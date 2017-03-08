/**
 * Created by DecaHub on 3/7/17.
 */

"use strict";

const path = require("path");
const fs = require("fs");

let root = "";
const rootFiles = new Set();

const types = {
	app: ".app",
	module: ".module",
	constants: ".constants",
	provider: ".provider",
	enum: ".enum",
	model: ".model",
	config: ".config",
	filter: ".filter",
	directive: ".directive",
	decorator: ".decorator",
	interceptor: ".interceptor",
	service: ".service",
	workflow: ".workflow",
	repository: ".repository",
	resolver: ".resolver",
	controller: ".controller",
	component: ".component"
};

const ng = new Map();

ng.set("Apps", new Set());
ng.set("Modules", new Set());
ng.set("Constants", new Set());
ng.set("Providers", new Set());
ng.set("Enums", new Set());
ng.set("Models", new Set());
ng.set("Configs", new Set());
ng.set("Filters", new Set());
ng.set("Directives", new Set());
ng.set("Decorators", new Set());
ng.set("Interceptors", new Set());
ng.set("Services", new Set());
ng.set("Workflows", new Set());
ng.set("Repositories", new Set());
ng.set("Resolvers", new Set());
ng.set("Controllers", new Set());
ng.set("Components", new Set());
ng.set("OtherJS", new Set());

const fileWalker = function (dir, files, ignorePaths) {
	
	try {
		
		fs.readdirSync(dir).forEach(function (item) {
			
			const filepath = path.join(dir, item);
			
			if (ignorePaths.has(filepath)) {
				
				return;
				
			}
			
			if (fs.statSync(filepath).isDirectory()) {
				
				fileWalker(filepath, files, ignorePaths);
				
			} else if (path.extname(filepath) === ".js") {
				
				files.add(filepath);
				
			}
			
		});
		
	} catch (error) {
		
		if (error.code === "ENOENT") {
			
			console.error(`Specified Target Directory not found: ${error.path}`);
			
		} else {
			
			throw error;
			
		}
		
	}
	
};

const filterFile = function (item) {
	
	const sansJS = path.basename(item, ".js");
	const type = path.extname(sansJS);
	
	switch (type) {
		
		case types.app:
			ng.get("Apps").add(item);
			break;
		case types.module:
			ng.get("Modules").add(item);
			break;
		case types.constants:
			ng.get("Constants").add(item);
			break;
		case types.provider:
			ng.get("Providers").add(item);
			break;
		case types.enum:
			ng.get("Enums").add(item);
			break;
		case types.model:
			ng.get("Models").add(item);
			break;
		case types.config:
			ng.get("Configs").add(item);
			break;
		case types.filter:
			ng.get("Filters").add(item);
			break;
		case types.directive:
			ng.get("Directives").add(item);
			break;
		case types.decorator:
			ng.get("Decorators").add(item);
			break;
		case types.interceptor:
			ng.get("Interceptors").add(item);
			break;
		case types.service:
			ng.get("Services").add(item);
			break;
		case types.workflow:
			ng.get("Workflows").add(item);
			break;
		case types.repository:
			ng.get("Repositories").add(item);
			break;
		case types.resolver:
			ng.get("Resolvers").add(item);
			break;
		case types.controller:
			ng.get("Controllers").add(item);
			break;
		case types.component:
			ng.get("Components").add(item);
			break;
		default:
			ng.get("OtherJS").add(item);
			break;
		
	}
	
};

const getPath = function (string) {
	
	let rootPath = "";
	
	if (string === null || string === "") {
		
		rootPath = path.join("app", "dist");
		
	} else {
		
		const temp = string.split(/[\\/]/);
		
		for (let elem = 0; elem < temp.length; elem++) {
			
			if (temp[elem] === "" || temp[elem] === null) {
				
				temp.splice(elem, 1);
				
				/**
				 * Rewind elem by 1;
				 * else elem next to the spliced elem won't be inspected.
				 */
				
				elem -= 1;
				
			} else if (elem < temp.length - 1) {
				
				rootPath += `${temp[elem]}/`;
				
			} else {
				
				rootPath += temp[elem];
				
			}
			
		}
		
	}
	
	if (rootPath === null || rootPath === "") {
		
		return null;
		
	}
	
	return rootPath;
	
};

const processIgnorePaths = function (_ignore) {
	
	const ignoreSet = new Set();
	
	for (let elem = 0; elem < _ignore.length; ++elem) {
		
		const tempPath = getPath(_ignore[elem]);
		
		if (tempPath) {
			
			ignoreSet.add(tempPath);
			
		}
		
	}
	
	return ignoreSet;
	
};

const ngFinder = function (finderTask) {
	
	let ignorePaths = null;
	const ngFiles = [];
	
	console.log(finderTask.ignore);
	
	root = getPath(finderTask.target);
	
	ignorePaths = processIgnorePaths(finderTask.ignore);
	
	console.log(ignorePaths);
	
	
	fileWalker(root, rootFiles, ignorePaths);
	
	for (const item of rootFiles) {
		
		filterFile(item);
		
	}
	
	for (const [name, set] of ng.entries()) {
		
		if (set.size > 0) {
			
			for (const file of set) {
				
				ngFiles.push(file);
				
			}
			
		}
		
	}
	
	return ngFiles;
	
};

console.log(ngFinder({
	target: "docs",
	ignore: ["docs/lib", "docs/animations"]
}).length);

module.exports = ngFinder;
