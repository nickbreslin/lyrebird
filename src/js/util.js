let util = {};

util.clamp = function (num, min, max) {
	'use strict';
  return num <= min ? min : num >= max ? max : num;
};