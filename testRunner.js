/**
 * Created by DecaHub on 3/8/17.
 */

"use strict";

const ngfinder = require("./index");
const log = require("bootstrap-logs");

const getTestObjs = function () {
	
	const testObjs = [];
	
	testObjs.push({
		name: "Valid object",
		obj: {
			target: "test/docs",
			ignore: "test/docs/lib"
		}
	});
	
	testObjs.push({
		name: "Valid object",
		obj: {
			target: "test/docs/animations",
			ignore: "test/docs/lib"
		}
	});

	testObjs.push({
		name: "Missing required property: target",
		obj: {ignore: "test/docs/lib"}
	});


	testObjs.push({
		name: "Has both required properties but one invalid",
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

	testObjs.push({
		name: "Passed null",
		obj: null
	});

	testObjs.push({
		name: "Passed empty string",
		obj: ""
	});

	testObjs.push({
		name: "Passed empty object",
		obj: {}
	});

	testObjs.push({
		name: "Passed undefined",
		obj: undefined
	});

	testObjs.push({
		name: "Valid object. Valid ignore. Invalid target: number",
		obj: {
			target: 5,
			ignore: "test/docs/lib"
		}
	});

	testObjs.push({
		name: "Valid object. Valid ignore. Invalid target: array",
		obj: {
			target: ["string"],
			ignore: "test/docs/lib"
		}
	});

	testObjs.push({
		name: "Valid object. Valid ignore. Invalid target: empty object",
		obj: {
			target: {},
			ignore: "test/docs/lib"
		}
	});
	
	testObjs.push({
		name: "Valid object. Valid target and ignore. target not a path.",
		obj: {
			target: "test/docs this is not a path",
			ignore: "test/docs/lib"
		}
	});
	
	testObjs.push({
		name: "Valid object. Valid target. Valid ignore.",
		obj: {
			target: "test/docs",
			ignore: ["test/docs/lib", "test/docs/animations"]
		}
	});
	
	testObjs.push({
		name: "Valid object. Valid target. Valid ignore.",
		obj: {
			target: "test/docs",
			ignore: "test/docs"
		}
	});
	
	return testObjs;
	
};


const tests = getTestObjs();

for (let test = 0; test < tests.length; test++) {
	
	log.info(`Name: ${tests[test].name}`);
	
	const temp = ngfinder(tests[test].obj);
	
	if (temp !== null) {
		
		log.success(temp.length);
		
	}
	
}
