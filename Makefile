install: instal-deps install-flow
	npm install

install-deps:
	npm install

install-flow:
	npm run flow-typed install

start:
	npm run babel-node -- src/bin/page-loader.js

publish:
	npm publish

lint:
	npm run eslint .

check-types:
	npm run flow

build:
	npm run-script build

test:
	npm test

debug-tree:
	npm run babel-node -- src/bin/page-loader.js

debug-plain:
	npm run babel-node -- src/bin/page-loader.js

watch:
	npm test -- --watch

watchAll:
	npm test -- --watchAll
