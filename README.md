# JSONDiff
JSONDiff tells you the differences between two JSON objects.

Automatically removes comments from the JSON files to compare the keys.

Was created to compare VS Code's default settings to your own settings.

## How to use
1. Create an a.json file in the root folder
2. Create an b.json file in the root folder
3. Remove trailing commas from both files
4. Run `node index.js` in the root folder
5. Take a look at the console log to see keys only in a.json, keys only in b.json and keys with different values.