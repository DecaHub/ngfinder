/**
 * Created by DecaHub on 3/7/17.
 */

"use strict";

const path = require("path");
const fs = require("fs");

const errHandler = require("./errorHandler");
const aux = require("./aux");

const log = require("bootstrap-logs");

log.custom({
	danger : "[  ERROR  ] ",
	info   : "[  INFO   ] ",
	warning: "[ WARNING ] ",
	success: "[ SUCCESS ] "
});

const verboseErrors = false;

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
		
		return files;
		
	} catch (error) {
		
		if (error.code === "ENOENT") {
			
			log.danger(`Specified Target Directory not found: ${error.path}`);
			
			return null;
			
		}
		
		throw error;
		
	}
	
};

const getPath = function (string) {
	
	let rootPath = "";
	
	if (string === null || string === "") {
		
		rootPath = null;
		
		return rootPath;
		
	}
	
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
	
	return rootPath;
	
};

const processIgnorePaths = function (_ignore) {
	
	const ignoreSet = new Set();
	let stringArray = [];
	
	if (aux.isString(_ignore)) {
		
		stringArray.push(_ignore);
		
	} else if (aux.isArray(_ignore)) {
		
		stringArray = _ignore;
		
	}
	
	for (let elem = 0; elem < stringArray.length; ++elem) {
		
		const tempPath = getPath(stringArray[elem]);
		
		if (tempPath) {
			
			ignoreSet.add(tempPath);
			
		}
		
	}
	
	return ignoreSet;
	
};

const displayError = function (error) {
	
	if (verboseErrors) {
		
		log.danger(error.stack);
		
	} else {
		
		log.danger(error.message);
		
	}
	
};

const ngFinder = function (finderTask) {
	
	const ng = new (require("./ng"))();
	const validFinderTask = require("./finderTask");
	
	const rootFiles = new Set();
	
	/**
	 * Check object shell integrity
	 */

	try {

		errHandler.isInvalidObj(finderTask);
		errHandler.hasUnknownProperties(finderTask, validFinderTask);
		errHandler.hasAllRequiredProps(finderTask, validFinderTask);

	} catch (error) {
		
		displayError(error);
		
		return null;

	}

	/**
	 * Check property integrity
	 */

	try {

		errHandler.isTargetValid(finderTask.target);
		
		if (Object.prototype.hasOwnProperty.call(finderTask, "ignore")) {
			
			errHandler.isIgnoreValid(finderTask.ignore);
			
		}

	} catch (error) {
		
		displayError(error);
		
		return null;

	}

	const walker =
		fileWalker(getPath(finderTask.target),
			rootFiles, processIgnorePaths(finderTask.ignore));
	
	if (!walker) {
		
		return null;
		
	}

	return ng.filterFiles(rootFiles);
	
};

module.exports = ngFinder;
