#!/bin/bash
npm run build && mocha --compilers js:babel-core/register test/*.js
