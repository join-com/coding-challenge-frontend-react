#!/bin/bash
#
# Run:
#   npm run release [<releaseType>]
# Use the <releaseType> parameter to set release type:
#   major - for updating from 1.2.3 to 2.0.0
#   minor - for updating from 1.2.3 to 1.3.0 (by default)
#   patch - for updating from 1.2.3 to 1.2.4

set -e

RELEASE_TYPE=${1:-"minor"}


echo "Set release type to '$RELEASE_TYPE'"
echo
echo "Updating version..."

npm --no-git-tag-version version $RELEASE_TYPE 1> /dev/null

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

echo "Version was updated to $PACKAGE_VERSION"
echo
echo "Generating changelog..."

conventional-changelog -i CHANGELOG.md -s

echo "Changelog was generated successfully."
echo
echo "Commiting current changes..."

COMMIT_MESSAGE="$PACKAGE_VERSION"
git add CHANGELOG.md package.json
git commit -m "$COMMIT_MESSAGE"

echo "It has been created the commit with message:  '$COMMIT_MESSAGE'"
echo

TAG_LABEL=v$PACKAGE_VERSION
git tag "$TAG_LABEL"

echo "Tag $TAG_LABEL was added to changelog commit."
echo
echo -e '\033[42m\033[37m Do not forget to push new tag to github with git push origin --tags \033[0m'

