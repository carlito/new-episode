var gulp = require('gulp');
var minify = require('gulp-minify');
var modConcat = require("module-concat");

var outputFile = "./build/new-episode.js";


gulp.task('build', function(){
  modConcat("./src/js/main.js", outputFile, function(err, stats) {
    if(err) throw err;

    gulp.src(outputFile)
      .pipe(minify())
      .pipe(gulp.dest('build'));

    gulp.src('./src/episode-template')
      .pipe(gulp.dest('./build'));

    console.log(stats.files.length + " were combined into " + outputFile);
  });
});
