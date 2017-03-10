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

const ngFinder = require("./index");

describe("NgFingder", function () {
	
	it('returns 20 when target is "test/docs", ignore not used.', function () {
		
		const ngFinderTest = ngFinder({target: "test/docs"});
		
		expect(ngFinderTest.length).to.equal(24);
		
	});
	
	it('returns 18 when target is "test/docs", ignore is "test/docs/lib"', function () {
		
		const ngFinderTest = ngFinder({
			target: "test/docs",
			ignore: "test/docs/lib"
		});
		
		expect(ngFinderTest.length).to.equal(18);
		
	});
	
	it('returns null when ignore is present but target is missing', function () {
		
		const ngFinderTest = ngFinder({ignore: "test/docs/lib"});
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns null when it has both required properties but one invalid', function () {
		
		const ngFinderTest = ngFinder({
			target: "test/docs",
			ignore: "test/docs/lib",
			test: "test/path"
		});
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns null when it has none of the required properties', function () {
		
		const ngFinderTest = ngFinder({
			music: "test/docs",
			is: "test/docs/lib",
			life: "test/path"
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
			ignore: "test/docs/lib"
		});
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns null when it gets a valid object with a valid ignore but invalid target: empty object', function () {
		
		const ngFinderTest = ngFinder({
			target: {},
			ignore: "test/docs/lib"
		});
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns null when it gets a valid object with a valid ignore but invalid target: array', function () {
		
		const ngFinderTest = ngFinder({
			target: ["string"],
			ignore: "test/docs/lib"
		});
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns null when it gets a valid object with a valid ignore and target, but target is not a path', function () {
		
		const ngFinderTest = ngFinder({
			target: "test/docs this is not a path",
			ignore: "test/docs/lib"
		});
		
		expect(ngFinderTest).to.equal(null);
		
	});
	
	it('returns 16 with this valid object', function () {
		
		const ngFinderTest = ngFinder({
			target: "test/docs",
			ignore: ["test/docs/lib", "test/docs/animations"]
		});
		
		expect(ngFinderTest.length).to.equal(16);
		
	});
	
	it('returns 0 when target and ignore are the same', function () {
		
		const ngFinderTest = ngFinder({
			target: "test/docs",
			ignore: "test/docs"
		});
		
		expect(ngFinderTest.length).to.equal(0);
		
	});
	
});
