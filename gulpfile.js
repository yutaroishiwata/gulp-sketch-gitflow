"use strict";

// Load plugins
const gulp = require('gulp');
const path = require('path');
const rename = require("gulp-rename");
const unzip = require('gulp-unzip');
const glob = require("glob");
// .zip file location
const zipFiles = glob.sync('./sketch/**/*.zip');

// Tasks
function renameFile() {
  return gulp
    .src('./sketch/**/*.sketch', { base: '.' })
    .pipe(rename(function (path) {
      path.extname = ".zip";
    }))
    .pipe(gulp.dest('.')) // Current working directory
}

function unzipFile(done) {
  zipFiles.forEach(function (zipFile) {
    const zipFileDir = path.dirname(zipFile);
    return gulp
      .src(zipFile)
      .pipe(unzip({ keepEmpty: true }))
      .pipe(gulp.dest(zipFileDir)) // Same as zip file location
  })
  done();
}

// watch files
function watchFile(){
  gulp.watch('./sketch/**/*.sketch').on('change', build);
}

// define complex tasks
const build = gulp.series(renameFile, unzipFile);

// export tasks
exports.default = build;
exports.watch = watchFile;
