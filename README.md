Static web template with _for my needs_ optimized templating engine. 

Conventions
===========

- Reusable HTML files must start with underscore (e.g. _head.html).
- To insert a reusable piece of code, insert `{{_head}}` into HTML file (into _index.html_ for example). It gets replaced
by content of _head.html file.
- HTML templates must have unique names.
- Folder _assets_ is used for images, css and JS, it is copied as is.
- If you create HTML file with other name than _index.html_, for example _contact.html_. The template engine will create 
new folder _contact_ and place _index.html_ into that folder. Then you get _contact.html_ available on nice URL, as follows: http://localhost:8080/contact .


Installation
============

1. Install Homebrew: `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
2. Install Gradle: `brew install gradle`
3. Install NPM: https://nodejs.org

Running Development
===================

1. Create new project `git clone git@github.com:ondrej-kvasnovsky/static-web-template.git myproject`
2. Go into project folder `cd myproject`
3. Start template engine in continuous mode `gradle -t developWeb` 
4. Go into `cd build` where template engine stores results.
5. Install dependencies for Gulp `npm i`
6. Run server `gulp` (Gulp will auto-reload changes, no need for restarting).

Gradle tasks
============

#### `gradle -t developWeb`

Builds HTML web page into _build_ folder. `developWeb` task also copies _gulpfile.js_ and _package.json_ into _build_ folder. 
In order to start a server go into _build_ folder `cd build` and run Gulp to preview web page `gulp`. The web page is accessible on http://localhost:8080.
`-t` starts Gradle in continuous mode and Gradle will watch changes you make in _src_ folder. All the changes are immediately reflected
 in _build_ folder and thus available on http://localhost:8080.

#### `gradle buildWeb`

Builds HTML web page into _build_ folder. It is ready to be copied on a server.

#### `gradle copyAssets` 

Copies `src/assets` into `build/src/assets`
