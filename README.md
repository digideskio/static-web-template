Features
========

- Reusable files must start with underscore (e.g. _head.html)
- To insert a reusable piece of code, insert {{_head}}
- Files must have unique names
- Directory assets is used for images, css and JS, it is copied as is


Installation
============

1. Install Homebrew: /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
2. Install Gradle: brew install gradle
3. Install NPM: https://nodejs.org

Running Development
===================

1. Clone: 
2. cd yourproject
3. gradle -t developWeb 
4. cd build
5. npm i
6. gulp
