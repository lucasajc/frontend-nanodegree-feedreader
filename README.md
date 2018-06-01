
# Project Overview

This is a project that tests, with [Jasmine](http://jasmine.github.io/), a web-based application that reads RSS feeds.

# How to run it

To run the test platform, download the content and start by opening the file "index.html"! The spec file (jasmine/spec/feedreader.js) contains the implementations of tests.

# Tests included in this project

1. A test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. A test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. A test that ensures the menu element is hidden by default.
4. A test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
5. A test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
6. A test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

# Other requirements

1. No test should be dependent on the results of another.
2. Callbacks should be used to ensure that feeds are loaded before they are tested.
3. Implement error handling for undefined variables and out-of-bound array access.
4. All tests should pass.

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)