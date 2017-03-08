/**
 * Created by DecaHub on 3/8/17.
 */

"use strict";

const ngfinder = require("./index");

const getTestObjs = function () {
	
	let testObjs = [];
	
	testObjs.push({
		name: "Valid object",
		obj: {
			target: "test/docs",
			ignore: "test/docs/lib"
		}
	});
	
	testObjs.push({
		name: "Missing required property: target",
		obj: {
			ignore: "test/docs/lib"
		}
	});
	
	
	testObjs.push({
		name: "Has both required properties but only invalid",
		obj: {
			target: "test/docs",
			ignore: "test/docs/lib",
			test: "test/path"
		}
	});
	
	testObjs.push({
		name: "Has none of the required properties",
		obj: {
			music: "test/docs",
			is: "test/docs/lib",
			life: "test/path"
		}
	});
	
	
	return testObjs;
};


let tests = getTestObjs();

for (let test = 0; test < tests.length; test++) {
	
	console.log(`Name: ${tests[test].name}`);
	let temp = ngfinder(tests[test].obj);
	
	if (test !== null) {
		console.log(temp);
	}
	
}