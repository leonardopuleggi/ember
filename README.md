# Ember basic applications

Basic Ember applications at different LTS

While migrating between different LTS version you might need to check out how to migrate specific behaviours.

This repository contains a list of the latest Ember LTS releases to help up during a migration

LTS versions [https://emberjs.com/releases/lts/](https://emberjs.com/releases/lts/)


## Usage

* `git clone <repository-url>` this repository
* `cd starterXYZ` - in the version you want to test out (3.4, 3.8, 3.12, etc.)
* `npm install`
* `npm start` - it'll use the local Ember in node_modules and start the development server on localhost:4200
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Why?

During migration between different Ember versions, we needed a way to isolate migration problems that might arise while updating Ember or one of the npm dependencies
