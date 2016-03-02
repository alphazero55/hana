var gulp =require("gulp");
var exec=require('child_process').execSync;//同期実行

gulp.task('default', function() {
  // place code for your default task here
});
gulp.task('compass',function(){
	exec('compass compile');
});
