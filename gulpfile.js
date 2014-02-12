var gulp = require('gulp');
var connect = require('connect');
var exec = require('gulp-exec');
var livereload = require('gulp-livereload');
 
gulp.task('server', function(){
  connect(connect.static('_site')).listen(9000);
  console.log('Server running at http://localhost:9000/');
  gulp.watch('src/**', function(event){
    console.log(event.path+ ' ' + event.type +', rebuilding...')
    gulp.src('').pipe(exec("jekyll build && compass compile")).pipe(livereload());
  });
});
