'use strict';

const test = require('ava');
const okLABColorRegex = /^oklab\((\d+(\.\d+)?%?|\.\d+) (-?\d+(\.\d+)?) (-?\d+(\.\d+)?)?( \/ (\d+(\.\d+)?%?|\.\d+))?\)$/;

const randomOkLABColor = require('./');

test('should return a valid okLAB color', (t) => {
  t.plan(10);

  for (let i = 0; i < 10; i++) {
    const color = randomOkLABColor();
    t.regex(color, okLABColorRegex);
  }
});

test('should return an object with valid okLAB color values', (t) => {
  t.plan(40);

  for (let i = 0; i < 10; i++) {
    const color = randomOkLABColor(0, 1, -128, 127, -128, 127, 0, 1, true);
    t.true(Number(color.l) >= 0 && Number(color.l) <= 1);
    t.true(Number(color.a) >= -128 && Number(color.a) <= 127);
    t.true(Number(color.b) >= -128 && Number(color.b) <= 127);
    t.true(Number(color.alpha) >= 0 && Number(color.alpha) <= 1);
  }
});
