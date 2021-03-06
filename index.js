"use strict";

/* jshint esversion: 6 */

const TArray = require('./TArray');
const TFile = require('./TFile');
const TInfo = require('./TInfo');
const TMap = require('./TMap');
const TNumber = require('./TNumber');
const TObject = require('./TObject');
const TString = require('./TString');
const TUtil = require('./TUtil');
const TypeID = require('./TypeID');
const TInternet = require('./TInternet');
const TUrl = require('./TUrl');
const TRegExp = require('./TRegExp');
const TTestData = require('./TTestData');
const TDate = require('./TDate');
const TRandom = require('./TRandom');
const TNodeConsts = require('./TNodeConsts');
const antd_TPagination = require('./antd/TPagination');
const TVerify = require('./TVerfify');

module.exports = {
  TArray,
  TFile,
  TInfo,
  TMap,
  TNumber,
  TObject,
  TString,
  TUtil,
  TypeID,
  TInternet,
  TUrl,
  TRegExp,
  TTestData,
  TDate,
  TRandom,
  TNodeConsts,
  antd: {
    TPagination: antd_TPagination,
  },
  TVerify
};
