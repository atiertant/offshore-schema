ROOT=$(shell pwd)

test: test-unit test-integration

test-unit:
	@echo Running tests...
	@NODE_ENV=test mocha test
	
test-integration:
	@echo Running integration tests...
	mkdir test_integration
	cd test_integration; \
		wget https://github.com/Atlantis-Software/offshore/archive/master.zip; \
		unzip -q master.zip
	cd test_integration/offshore-master; \
		npm install; \
		rm -rf node_modules/offshore-schema; \
		ln -s $(ROOT) node_modules/offshore-schema; \
		npm test
	rm -rf test_integration
