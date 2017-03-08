/**
 * Created by DecaHub on 3/8/17.
 */

"use strict";

const isString = function (obj) {
	
	return typeof obj === "string" || obj instanceof String
	
};

const isArray = function (obj) {
	
	return Array.isArray(obj);
	
};

module.exports = {
	
	isString,
	isArray
	
};
