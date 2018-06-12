install:
	npm install

start:
	npm run babel-node -- src/bin/pageLoader.js -h

publish:
	npm publish

lint:
	npm run eslint .

build:
	npm run-script build

test:
	npm test

debug:
	npm run babel-node -- src/bin/pageLoader.js --output tst/ https://hexlet.io/courses

debug1:
	npm run babel-node -- src/bin/pageLoader.js https://hexlet.io/courses

watch:
	npm test -- --watch

watchAll:
	npm test -- --watchAll

test-coverage:
	npm test -- --coverage
