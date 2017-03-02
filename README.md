# FlitwickJS
A simple node CLI matching program. Takes 2 lists and matches them on a desired field and outputs the combined results.

[![npm version](https://badge.fury.io/js/flitwick.svg)](https://badge.fury.io/js/neville) [![Build Status](https://travis-ci.org/ptallen63/flitwick.svg?branch=master)](https://travis-ci.org/ptallen63/flitwick)

***STILL IN ACTIVE DEV & TESTING.  
NOT FOR PRODUCTION!***

## Install

```
$ npm install -g flitwick
```

## Usage

```
$ flitwick path/to/list-you-want-to-match path/to/list-to-match-against <Field to match>
```

## Output

 The output will be a `.csv` file called `output.csv`. This will contain the items from the list you wanted to match with extra fields from the match against list. There will also be one extra column with a boolean value if the item matched or not.
