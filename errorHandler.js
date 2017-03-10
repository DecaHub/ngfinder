/**
 * Created by DecaHub on 3/8/17.
 */

"use strict";

const is = require("is");

const isInvalidObj = function (obj) {
	
	let state = "";
	let error = false;
	
	
	if (!obj) {
		
		if (obj === "") {
			
			state = "empty string";
			
		} else {
			
			state = obj;
			
		}
		
		error = true;
		
	} else if (Object.keys(obj).length === 0 && obj.constructor === Object) {
		
		state = "empty object";
		error = true;
		
	} else if (!is.object(obj)) {
		
		throw new Error("ngFinder didn't get a Finder Task object. Please pass an object with the proper format and properties.");
		
	}
	
	if (error) {
		
		throw new Error(`ngFinder got ${state} as argument. Please pass an object with the proper format and properties.`);
		
	}
	
};

const hasUnknownProperties = function (obj, finderTask) {
	
	const unknownProps = new Set();
	
	/**
	 * Check for unknown properties
	 * Throw error if unknown property found
	 */
	
	for (const prop in obj) {
		
		if (Object.prototype.hasOwnProperty.call(obj, prop)) {
			
			if (!(finderTask.requiredProps.has(prop) ||
				finderTask.optionalProps.has(prop))) {
				
				unknownProps.add(prop);
				
			}
			
		}
		
	}
	
	if (unknownProps.size > 0) {
		
		let unknowns = "";
		
		for (const unknown of unknownProps) {
			
			unknowns += `${unknown} `;
			
		}
		
		throw new Error(`The object you passed to ngFinder has unknown properties: ${unknowns}`);
		
	}
	
};

const hasAllRequiredProps = function (obj, finderTask) {
	
	
	const knownProps = new Set();
	
	for (const prop in obj) {
		
		if (Object.prototype.hasOwnProperty.call(obj, prop)) {
			
			if (finderTask.requiredProps.has(prop)) {
				
				knownProps.add(prop);
				
			}
			
		}
		
	}
	
	if (knownProps.size !== finderTask.requiredProps.size) {
		
		let missing = "";
		
		for (const prop of finderTask.requiredProps) {
			
			if (!knownProps.has(prop)) {
				
				missing += `${prop} `;
				
			}
			
		}
		
		throw new Error(`The object you passed to ngFinder is missing required properties: ${missing}`);
		
	}
	
};


const isTargetValid = function (target) {
	
	if (!is.string(target)) {
		
		throw new Error("Property target is not a string.");
		
	} else if (target === "") {
		
		throw new Error("Property target is an empty string.");
		
	}
	
};

const isIgnoreValid = function (ignore) {
	
	if (is.array(ignore)) {
		
		for (let index = 0; index < ignore.length; index++) {
			
			if (!is.string(ignore[index])) {
				
				throw new Error("Property ignore is not an array of strings.");
				
			}
			
		}
		
	} else if (!is.string(ignore)) {
		
		throw new Error("Property ignore is not a string or an array of strings.");
		
	} else if (ignore === "") {
		
		throw new Error("Property ignore is an empty string.");
		
	}
	
};

module.exports = {
	
	isInvalidObj,
	hasUnknownProperties,
	hasAllRequiredProps,
	isTargetValid,
	isIgnoreValid
	
};

