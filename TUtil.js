"use strict";

/* jshint esversion: 8 */

module.exports = {

  /**
   * Throw exception if count arguments (1) is not equals (2)
   *
   * @param _arguments (1) --
   * @param _iCount (2) --
   */
  argsCountVerifEx: function (_arguments, _iCount) {
    if (arguments.length !== 2) {
      throw new Error('_args.length [' + _arguments.length + ']');
    }
    if (_iCount < 0) {
      throw new Error('_iCount [' + _iCount + ']');
    }
    //---
    if (_arguments.length !== _iCount) {
      throw new Error('incorrect number of arguments; [' + _arguments.length + '] instead [' + _iCount + ']');
    }
  },

  /**
   * Throw exception with text (2) if (1) is FALSE
   *
   * @param _b {Boolean} (1) --
   * @param _stText {String} (2) --
   */
  exceptIf: function (_b, _stText) {
    if (!_b) {
      console.warn('ERROR', _stText);
      throw Error(_stText);
    }
  }

};
