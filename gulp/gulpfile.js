const {src,dest} = require('gulp');
const fileinclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const source = require('gulp-sourcemaps');
const rename = require('gulp-rename')
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');


function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
  
  // html task 
  function HTMLtask(){
return src('src/*.html')
.pipe(
    fileinclude({
        prefix: '@@',
        basepath: '@file'
    })
    
)
.pipe(dest('dist/'))
}

function styleTask(){
    return src('src/sass/**/*.scss')
    .pipe(source.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('styles.scss'))
    .pipe(sass())
    //.on('error'),sass.logError)
    .pipe(rename({suffix: '.min'}))
    .pipe(source.write('.'))
    .pipe(dest('dist/css/'))
}

// JS task
function JSTask() {
    return src('src/js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('dist/js/'));
}




   


exports.styleTask = styleTask;
exports.htmlTask = HTMLtask;
exports.default = defaultTask;
exports.jsTask = JSTask;
