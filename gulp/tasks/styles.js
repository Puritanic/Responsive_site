var gulp 		 	= require('gulp'),	
 	gutil 		 	= require('gulp-util'),
	postcss 	 	= require('gulp-postcss'),
	cssnext		 	= require('postcss-cssnext'),
	postcssurl	   	= require('postcss-url'),
	reporter	 	= require("postcss-reporter"),
	postcssImport   = require("postcss-import"),
	sourcemaps	 	= require('gulp-sourcemaps');


gulp.task('styles', function(){

	return gulp.src('./app/assets/styles/style.css')
		.pipe( sourcemaps.init())
		.pipe(postcss([
			require('postcss-partial-import')({prefix: '_', extension: '.css'}),
				postcssurl(),
					cssnext(),
						require('postcss-nesting'),
							reporter(),
			]))
		.on('error', gutil.log, function(err){
			this.emit('end');
		})
  		.pipe(sourcemaps.write('.'))
  		.pipe(gulp.dest('./app/temp/styles'));
});		


// require('postcss-partial-import')({prefix: '_', extension: '.css'}),