CHANGELOG_TAG_URL_PREFIX := https://github.com/ghalactic/github-credential-rotation-action/releases/tag/
DOCKER_REPO ?= github-credential-rotation-action

-include .makefiles/Makefile
-include .makefiles/pkg/js/v1/Makefile
-include .makefiles/pkg/js/v1/with-npm.mk
-include .makefiles/pkg/docker/v1/Makefile
-include .makefiles/pkg/changelog/v1/Makefile

.makefiles/%:
	@curl -sfL https://makefiles.dev/v1 | bash /dev/stdin "$@"
