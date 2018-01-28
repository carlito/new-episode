var gulp = require('gulp');
var minify = require('gulp-minify');
var modConcat = require("module-concat");
var ncp = require('ncp').ncp;
var colors = require('colors');

var outputFile = "./build/new-episode.js";


gulp.task('build', function(){
  modConcat("./src/js/main.js", outputFile, function(err, stats) {
    if(err) throw err;

    gulp.src(outputFile)
      .pipe(minify())
      .pipe(gulp.dest('build'));

      // Copy template folder
      ncp('./src/episode-template', './build/episode-template', function (err) {
        if (err) {
          return console.error(err);
        } else {
          console.log('Done.'.green);
        }
      });

    console.log(stats.files.length + " were combined into " + outputFile);
  });
});
