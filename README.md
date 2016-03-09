wnm-seqcalc
=======

[![Build Status](https://travis-ci.org/khchanel/wnm-seqcalc.svg?branch=master)](https://travis-ci.org/khchanel/wnm-seqcalc)

Numberic Sequence Calculator

[Specification Here](Wng Coding Task.pdf)

The solution is implemented as a standalone Single Page Application (SPA)
The app is built around Javascript AngularJS, Bootstrap, HTML5 and CSS3.
With the use of nodejs-powered frontend tools such as grunt, bower, yeoman generators

Hosted Demo: http://khchanel.com/apps/wnm-seqcalc


## Development setup
You will require nodejs (~v0.12) and npm (~2.12) and run the following commands in console:
```
npm install
bower install
```

## Build
Run the below command and extra the files from "dist" folder
```
grunt build
```

## Run
```
grunt serve
```

## Test

### Unit Test
```
grunt test
```

### End-to-End Test with Protractor
```
1. Start the Selenium server:
./node_modules/.bin/webdriver-manager start

2. Open a new terminal and Run the application (see above)

3. Open a new terminal and run Protractor:
./node_modules/.bin/protractor protractor.conf.js
```
