CHANGELOG_TAG_URL_PREFIX := https://github.com/ghalactic/REPLACE_ME/releases/tag/
DOCKER_REPO ?= replace_me

-include .makefiles/Makefile
-include .makefiles/pkg/js/v1/Makefile
-include .makefiles/pkg/js/v1/with-npm.mk
-include .makefiles/pkg/docker/v1/Makefile
-include .makefiles/pkg/changelog/v1/Makefile

.makefiles/%:
	@curl -sfL https://makefiles.dev/v1 | bash /dev/stdin "$@"
