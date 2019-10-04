'use strict';

const decomment = require('decomment');
const fs = require('fs');
const sortJson = require('sort-json');

// Read both JSON files
const aFile = fs.readFileSync('a.json', 'utf-8');
const bFile = fs.readFileSync('b.json', 'utf-8');

// Remove comments so that we can loop through the keys
const a = JSON.parse(decomment(aFile));
const b = JSON.parse(decomment(bFile));

// Sort a and b
const aSorted = sortJson(a);
const bSorted = sortJson(b);

// Save sorted
fs.writeFileSync('aSorted.json', JSON.stringify(aSorted));
fs.writeFileSync('bSorted.json', JSON.stringify(bSorted));

let keysOnlyInA = {};
let keysOnlyInB = {};
let keysWithDifferentValues = {};

// Iterate through the a.json
for (const key in a) {
	// If key does not exist in b.json
	if(!b.hasOwnProperty(key)) {
		// Add it to keysOnlyInA
		keysOnlyInA[key] = a[key];
	} else {
		// If the key exists but it's value is different in b.json
		if(JSON.stringify(a[key]) != JSON.stringify(b[key])) {
			// Add it to the keysWithDifferentValues
			keysWithDifferentValues[key] = a[key];
		}
	}
}

// Iterate through the b.json
for (const key in b) {
	// If key doesn't exist in a.json
	if(!a.hasOwnProperty(key)) {
		// Add it to keysOnlyInB
		keysOnlyInB[key] = b[key];
	}
}

// Keys only in A
console.log('Keys only in A');
console.log(keysOnlyInA);

// Keys only in B
console.log('Keys only in B');
console.log(keysOnlyInB);

// Keys with different values
console.log('Keys with different values');
console.log(keysWithDifferentValues);