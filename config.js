System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "tsconfig": true
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "@angular": "npm:@angular",
    "@angular/common": "npm:@angular/common@2.0.0-rc.2",
    "@angular/common@2.0.0-rc.2": "npm:@angular/common@2.0.0-rc.2",
    "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.2",
    "@angular/compiler@2.0.0-rc.2": "npm:@angular/compiler@2.0.0-rc.2",
    "@angular/core": "npm:@angular/core@2.0.0-rc.2",
    "@angular/core@2.0.0-rc.2": "npm:@angular/core@2.0.0-rc.2",
    "@angular/forms": "npm:@angular/forms@0.1.0",
    "@angular/forms@0.1.0": "npm:@angular/forms@0.1.0",
    "@angular/http": "npm:@angular/http@2.0.0-rc.2",
    "@angular/http@2.0.0-rc.2": "npm:@angular/http@2.0.0-rc.2",
    "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.2",
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0-rc.2",
    "@angular/platform-browser-dynamic@2.0.0-rc.2": "npm:@angular/platform-browser-dynamic@2.0.0-rc.2",
    "@angular/platform-browser@2.0.0-rc.2": "npm:@angular/platform-browser@2.0.0-rc.2",
    "@angular/router": "npm:@angular/router@3.0.0-alpha.7",
    "@angular/router-deprecated": "npm:@angular/router-deprecated@2.0.0-rc.2",
    "@angular/router-deprecated@2.0.0-rc.2": "npm:@angular/router-deprecated@2.0.0-rc.2",
    "@angular/router@3.0.0-alpha.7": "npm:@angular/router@3.0.0-alpha.7",
    "@angular/upgrade": "npm:@angular/upgrade@2.0.0-rc.2",
    "@angular/upgrade@2.0.0-rc.2": "npm:@angular/upgrade@2.0.0-rc.2",
    "angular2-in-memory-web-api": "npm:angular2-in-memory-web-api@0.0.12",
    "bootstrap": "npm:bootstrap@3.3.6",
    "core-js": "npm:core-js@2.4.0",
    "lodash": "npm:lodash@4.13.1",
    "reflect-metadata": "npm:reflect-metadata@0.1.3",
    "rxjs": "npm:rxjs@5.0.0-beta.6",
    "systemjs": "npm:systemjs@0.19.27",
    "ts": "github:frankwallis/plugin-typescript@4.0.16",
    "typescript": "npm:typescript@1.8.10",
    "zone.js": "npm:zone.js@0.6.12",
    "github:frankwallis/plugin-typescript@4.0.16": {
      "typescript": "npm:typescript@1.8.10"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.5"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:@angular/common@2.0.0-rc.2": {
      "@angular/core": "npm:@angular/core@2.0.0-rc.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/compiler@2.0.0-rc.2": {
      "@angular/core": "npm:@angular/core@2.0.0-rc.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/core@2.0.0-rc.2": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rxjs": "npm:rxjs@5.0.0-beta.6",
      "zone.js": "npm:zone.js@0.6.12"
    },
    "npm:@angular/forms@0.1.0": {
      "@angular/common": "npm:@angular/common@2.0.0-rc.2",
      "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.2",
      "@angular/core": "npm:@angular/core@2.0.0-rc.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/http@2.0.0-rc.2": {
      "@angular/core": "npm:@angular/core@2.0.0-rc.2",
      "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.2",
      "rxjs": "npm:rxjs@5.0.0-beta.6"
    },
    "npm:@angular/platform-browser-dynamic@2.0.0-rc.2": {
      "@angular/common": "npm:@angular/common@2.0.0-rc.2",
      "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.2",
      "@angular/core": "npm:@angular/core@2.0.0-rc.2",
      "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/platform-browser@2.0.0-rc.2": {
      "@angular/common": "npm:@angular/common@2.0.0-rc.2",
      "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.2",
      "@angular/core": "npm:@angular/core@2.0.0-rc.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/router-deprecated@2.0.0-rc.2": {
      "@angular/common": "npm:@angular/common@2.0.0-rc.2",
      "@angular/core": "npm:@angular/core@2.0.0-rc.2",
      "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.2"
    },
    "npm:@angular/router@3.0.0-alpha.7": {
      "@angular/common": "npm:@angular/common@2.0.0-rc.2",
      "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.2",
      "@angular/core": "npm:@angular/core@2.0.0-rc.2",
      "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.2",
      "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0-rc.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rxjs": "npm:rxjs@5.0.0-beta.6"
    },
    "npm:@angular/upgrade@2.0.0-rc.2": {
      "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.2",
      "@angular/core": "npm:@angular/core@2.0.0-rc.2",
      "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.2"
    },
    "npm:angular2-in-memory-web-api@0.0.12": {
      "@angular/core": "npm:@angular/core@2.0.0-rc.2",
      "@angular/http": "npm:@angular/http@2.0.0-rc.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "reflect-metadata": "npm:reflect-metadata@0.1.3",
      "rxjs": "npm:rxjs@5.0.0-beta.6",
      "zone.js": "npm:zone.js@0.6.12"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:bootstrap@3.3.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@2.4.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash@4.13.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:rxjs@5.0.0-beta.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:systemjs@0.19.27": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "when": "npm:when@3.7.7"
    },
    "npm:typescript@1.8.10": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:when@3.7.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:zone.js@0.6.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});

/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    packages: packages
  };
  System.config(config);
})(this);

