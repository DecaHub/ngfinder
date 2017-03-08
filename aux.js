/**
 * Created by DecaHub on 3/8/17.
 */

"use strict";

const isString = function (obj) {
	
	return typeof obj.target === "string" || obj.target instanceof String
	
};

const isArray = function (obj) {
	
	return Array.isArray(obj);
	
};

module.exports = {
	
	isString,
	isArray
	
};
