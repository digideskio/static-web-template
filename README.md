Features
========

- Reusable HTML files must start with underscore (e.g. ___head.html__)
- To insert a reusable piece of code, insert `{{_head}}` into HTML file (_index.html_ for example)
- Files must have unique names
- Folder _assets_ is used for images, css and JS, it is copied as is


Installation
============

1. Install Homebrew: `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
2. Install Gradle: `brew install gradle`
3. Install NPM: https://nodejs.org

Running Development
===================

1. Create new project `git clone git@github.com:ondrej-kvasnovsky/static-web-template.git myproject`
2. Go into project folder `cd myproject`
3. Start template engine `gradle -t developWeb` 
4. Go into `cd build` where template engine stores results.
5. Install dependencies for Gulp `npm i`
6. Run server `gulp`

Gradle tasks
============

`gradle copyAssets` 

Copies `src/assets` into `build/src/assets`

`gradle -t developWeb`

Builds HTML web page into _build_ folder. `developWeb` task also copies gulpfile.js and package.json into _build_ folder. 
It allows to go into _build_ folder `cd build` and run server to preview web page `cd build` and `gulp`. The web page is accessible on http://localhost:8080.
`-t` starts Gradle in continuous mode and Gradle will watch changes you make. All changes will be immediately reflected
 in build folder and thus available on http://localhost:8080.

### buildWeb

Builds HTML web page into _build_ folder. It is ready to be copied on a server.

