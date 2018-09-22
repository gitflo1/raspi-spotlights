Setup:
- node v8.12.0 and npm v6.4.1
- "npm i -g typescript" installed

How to compile and start the server:

1. run "npm install" in the root-dir (where the package.json exists)
2. run "npm run tsc" to compile the TypeScript code into JavaScript code (the target directory is ./build)
3. run "node ./build/server.js" to start the server on http://localhost:3000

-> Visit http://localhost:3000/welcome and the server responds with a "Hello, World!"