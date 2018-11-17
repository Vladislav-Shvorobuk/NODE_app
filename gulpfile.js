
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const sourcemaps = require("gulp-sourcemaps");
// const plumber = require("gulp-plumber");

gulp.task("scss", () => {
    return gulp
    .src("dev/scss/**/*.scss")
    .pipe(sourcemaps.init())
    // .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(
        autoprefixer(["last 15 versions", "> 1%", "ie 8", "ie 7"], {
            cascode: true 
        })
    )
    
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("public/stylesheets"))
});

gulp.task("default", ["scss"], () => {
    gulp.watch("dev/scss/**/*.scss", ["scss"]);
});