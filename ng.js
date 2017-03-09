/**
 * Created by DecaHub on 3/8/17.
 */

"use strict";

const path = require("path");

class NG {
	
	constructor () {
		
		this.map = new Map();
		
		this.map.set("Apps", new Set());
		this.map.set("Modules", new Set());
		this.map.set("Constants", new Set());
		this.map.set("Providers", new Set());
		this.map.set("Enums", new Set());
		this.map.set("Models", new Set());
		this.map.set("Configs", new Set());
		this.map.set("Filters", new Set());
		this.map.set("Directives", new Set());
		this.map.set("Decorators", new Set());
		this.map.set("Interceptors", new Set());
		this.map.set("Services", new Set());
		this.map.set("Workflows", new Set());
		this.map.set("Repositories", new Set());
		this.map.set("Resolvers", new Set());
		this.map.set("Controllers", new Set());
		this.map.set("Components", new Set());
		this.map.set("OtherJS", new Set());
		
		this.types = {
			
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
		
	}
	
	filterFile (item) {
	
		const sansJS = path.basename(item, ".js");
		const type = path.extname(sansJS);
		
		switch (type) {
			
			case this.types.app:
				this.map.get("Apps").add(item);
				break;
			case this.types.module:
				this.map.get("Modules").add(item);
				break;
			case this.types.constants:
				this.map.get("Constants").add(item);
				break;
			case this.types.provider:
				this.map.get("Providers").add(item);
				break;
			case this.types.enum:
				this.map.get("Enums").add(item);
				break;
			case this.types.model:
				this.map.get("Models").add(item);
				break;
			case this.types.config:
				this.map.get("Configs").add(item);
				break;
			case this.types.filter:
				this.map.get("Filters").add(item);
				break;
			case this.types.directive:
				this.map.get("Directives").add(item);
				break;
			case this.types.decorator:
				this.map.get("Decorators").add(item);
				break;
			case this.types.interceptor:
				this.map.get("Interceptors").add(item);
				break;
			case this.types.service:
				this.map.get("Services").add(item);
				break;
			case this.types.workflow:
				this.map.get("Workflows").add(item);
				break;
			case this.types.repository:
				this.map.get("Repositories").add(item);
				break;
			case this.types.resolver:
				this.map.get("Resolvers").add(item);
				break;
			case this.types.controller:
				this.map.get("Controllers").add(item);
				break;
			case this.types.component:
				this.map.get("Components").add(item);
				break;
			default:
				this.map.get("OtherJS").add(item);
				break;
			
		}
	
	}
	
}

module.exports = NG;
