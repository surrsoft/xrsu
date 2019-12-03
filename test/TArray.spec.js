"use strict";

/* jshint esversion: 8 */

/*
START: 'npm run test'
 */

const { expect } = require('chai');
const { describe, it } = require('mocha');
const TArray = require('../TArray');

const arr = [1, 2, 3, 4, 5, 6, 7];

describe('TArray.subArray_C', () => {
  it('010', () => {
    const arr0 = TArray.subArray_C(arr, 2, 2);
    expect(arr0).eql([3, 4]);
  });
  it('012', () => {
    const arr0 = TArray.subArray_C(arr, 0, 2);
    expect(arr0).eql([1, 2]);
  });
  it('013', () => {
    const arr0 = TArray.subArray_C(arr, 0, 20);
    expect(arr0).eql(arr);
  });
  it('014', () => {
    const arr0 = TArray.subArray_C(arr, 20, 2);
    expect(arr0).eql([]);
  });
  it('016', () => {
    const arr0 = TArray.subArray_C(arr, -2, 2);
    expect(arr0).eql([]);
  });
  it('020', () => {
    const arr0 = TArray.subArray_C([], 2, 2);
    expect(arr0).eql([]);
  });

});

