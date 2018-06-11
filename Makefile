install:
	npm install

start:
	npm run babel-node -- src/bin/pageLoader.js

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

debug:
	npm run babel-node -- src/bin/pageLoader.js

watch:
	npm test -- --watch

watchAll:
	npm test -- --watchAll
