/**
 * Created by DecaHub on 3/9/17.
 */

/* global define, it, describe */
/* eslint no-magic-numbers: 0 */
/* eslint quotes: 0 */

"use strict";

const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;

const ngFinder = require("./../index");

describe("NgFingder", function () {
	
	it('returns 20 when target is "test_samples/docs", ignore not used.', function () {
		
		const ngFinderTest = ngFinder({target: "test_samples/docs"});
		
		expect(ngFinderTest.length).to.equal(24);
		
	});
	
	it('returns 18 when target is "test_samples/docs", ignore is "test_samples/docs/lib"', function () {
		
		const ngFinderTest = ngFinder({
			target: "test_samples/docs",
			ignore: "test_samples/docs/lib"
		});
		
		expect(ngFinderTest.length).to.equal(18);
		
	});
	
	it('returns null when ignore is present but target is missing', function () {
		
		const ngFinderTest = ngFinder({ignore: "test_samples/docs/lib"});
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns null when it has both required properties but one invalid', function () {
		
		const ngFinderTest = ngFinder({
			target: "test_samples/docs",
			ignore: "test_samples/docs/lib",
			test: "test_samples/path"
		});
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns null when it has none of the required properties', function () {
		
		const ngFinderTest = ngFinder({
			music: "test_samples/docs",
			is: "test_samples/docs/lib",
			life: "test_samples/path"
		});
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns null when it gets null', function () {
		
		const ngFinderTest = ngFinder(null);
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns null when it gets an empty string', function () {
		
		const ngFinderTest = ngFinder("");
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns null when it gets an empty object', function () {
		
		const ngFinderTest = ngFinder({});
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns null when it gets undefined', function () {
		
		const ngFinderTest = ngFinder(undefined);
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns null when it gets a valid object with a valid ignore but invalid target: number', function () {
		
		const ngFinderTest = ngFinder({
			target: 5,
			ignore: "test_samples/docs/lib"
		});
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns null when it gets a valid object with a valid ignore but invalid target: empty object', function () {
		
		const ngFinderTest = ngFinder({
			target: {},
			ignore: "test_samples/docs/lib"
		});
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns null when it gets a valid object with a valid ignore but invalid target: array', function () {
		
		const ngFinderTest = ngFinder({
			target: ["string"],
			ignore: "test_samples/docs/lib"
		});
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns null when it gets a valid object with a valid ignore and target, but target is not a path', function () {
		
		const ngFinderTest = ngFinder({
			target: "test_samples/docs this is not a path",
			ignore: "test_samples/docs/lib"
		});
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns null when it gets a valid object with an empty string target', function () {
		
		const ngFinderTest = ngFinder({
			target: "",
			ignore: "test_samples/docs"
		});
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns null when it gets a valid object with a valid target, but empty string as ignore', function () {
		
		const ngFinderTest = ngFinder({
			target: "test_samples/docs",
			ignore: ""
		});
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns null when it gets a valid object with a valid target, but invalid ignore: 5', function () {
		
		const ngFinderTest = ngFinder({
			target: "test_samples/docs",
			ignore: 5
		});
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns null when it gets a valid object with a valid target, but invalid ignore: undefined', function () {
		
		const ngFinderTest = ngFinder({
			target: "test_samples/docs",
			ignore: undefined
		});
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns 24 when it gets a valid object with a valid target, but ignore is empty array', function () {
		
		const ngFinderTest = ngFinder({
			target: "test_samples/docs",
			ignore: []
		});
		
		expect(ngFinderTest.length).to.equal(24);
		
	});
	
	it('returns 16 with this valid object', function () {
		
		const ngFinderTest = ngFinder({
			target: "test_samples/docs",
			ignore: ["test_samples/docs/lib", "test_samples/docs/animations"]
		});
		
		expect(ngFinderTest.length).to.equal(16);
		
	});
	
	it('returns 0 when target and ignore are the same', function () {
		
		const ngFinderTest = ngFinder({
			target: "test_samples/docs",
			ignore: "test_samples/docs"
		});
		
		expect(ngFinderTest.length).to.equal(0);
		
	});
	
	it('returns null when target is an array and there is no ignore', function () {
		
		const ngFinderTest = ngFinder({
			target: ["test_samples/docs"]
		});
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns null when passed an array', function () {
		
		const ngFinderTest = ngFinder(["test_samples/docs"]);
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
});
