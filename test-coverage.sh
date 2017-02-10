#!/bin/bash
npm run build &&
istanbul cover ./node_modules/mocha/bin/_mocha --report html -- --compilers js:babel-core/register test/*.js
