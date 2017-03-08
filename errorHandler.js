/**
 * Created by DecaHub on 3/8/17.
 */

"use strict";

const isInvalidObj = function (obj) {
	
	let state = "";
	let error = false;
	
	
	if (!obj) {
		
		state = obj === "" ? "empty string" : obj;
		error = true;
		
	} else if (Object.keys(obj).length === 0 && obj.constructor === Object) {
		
		state =  "empty object";
		error = true;
		
	}
	
	if (error) {
		
		throw new Error(`You passed ${state} as argument to ngFinder. Please pass an object with the proper format and properties.`);
		
	}
	
};

const hasUnknownProperties = function (obj, requiredProps) {
	
	let unknownProps = new Set();
	
	/**
	 * Check for unknown properties
	 * Throw error if unknown property found
	 */
	
	for (let prop in obj) {
		
		if (obj.hasOwnProperty(prop)) {
			
			if (!requiredProps.has(prop)) {
				
				unknownProps.add(prop);
				
			}
			
		}
		
	}
	
	if (unknownProps.size > 0) {
		
		let unknowns = "";
		
		for (let unknown of unknownProps) {
			
			unknowns += `${unknown} `;
			
		}
		
		throw new Error(`The object you passed to ngFinder has unknown properties: ${unknowns}`);
		
	}
	
};



const hasAllRequiredProps = function (obj, requiredProps) {
	
	
	let knownProps = new Set();
	
	/**
	 * Check for unknown properties
	 * Throw error if unknown property found
	 */
	
	for (let prop in obj) {
		
		if (obj.hasOwnProperty(prop)) {
			
			if (requiredProps.has(prop)) {
				
				knownProps.add(prop);
				
			}
			
		}
		
	}
	
	if (knownProps.size !== requiredProps.size) {
		
		let missing = "";
		
		for (let prop of requiredProps) {
			
			if (!knownProps.has(prop)) {
				
				missing += `${prop} `
				
			}
			
		}
		
		throw new Error(`The object you passed to ngFinder is missing required properties: ${missing}`);
		
	}
	
};

module.exports = {
	
	isInvalidObj,
	hasUnknownProperties,
	hasAllRequiredProps,
	
};

