#!/bin/bash
npm run build &&
istanbul cover ./node_modules/mocha/bin/_mocha --report lcovonly -- --compilers js:babel-core/register test/*.js &&
cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js
