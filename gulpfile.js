var gulp = require('gulp');
var connect = require('connect');
 
gulp.task('server', function(){
  connect(connect.static('_site')).listen(9000);
  console.log('Server running at http://localhost:9000/');
});
