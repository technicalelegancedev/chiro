var gulp           = require('gulp'), // Gulp
    sass           = require('gulp-sass'), // SASS,
    changed        = require('gulp-changed'),
    autoprefixer   = require('gulp-autoprefixer'); // Add the desired vendor prefixes and remove unnecessary in SASS-files


//
// SASS
//

// Unify Main
gulp.task('sass', function() {
  return gulp.src('html/assets/include/scss/**/*.scss')
    .pipe(changed('html/assets/css/'))
    .pipe(sass({outputStyle:'expanded'}))
    .pipe(autoprefixer(['last 3 versions', '> 1%'], { cascade: true }))
    .pipe(gulp.dest('html/assets/css/'))
});

// Blog & Magazine
// gulp.task('sass-blog', function() {
//   return gulp.src('./html/blog-magazine/classic/assets/scss/**/*.scss')
//     .pipe(changed('./html/blog-magazine/classic/assets/css/'))
//     .pipe(sass({outputStyle:'expanded'}))
//     .pipe(autoprefixer(['last 3 versions', '> 1%'], { cascade: true }))
//     .pipe(gulp.dest('./html/blog-magazine/classic/assets/css/'))
// });

// One Page (agency Demo example, please change this path if you are using other demos)
gulp.task('sass-op', function() {
  return gulp.src('html/one-pages/assets/scss/**/*.scss')
    .pipe(changed('html/one-pages/assets/css/'))
    .pipe(sass({outputStyle:'expanded'}))
    .pipe(autoprefixer(['last 3 versions', '> 1%'], { cascade: true }))
    .pipe(gulp.dest('html/one-pages/assets/css/'))
});


//
// Watch
//

gulp.task('watch', function() {
  gulp.watch('html/assets/include/scss/**/*.scss', ['sass', 'sass-op']);
});


//
// Default
//

gulp.task('default', ['watch']);