var gulp=require("gulp");
var gulp_min_css=require("gulp-minify-css");
var gulp_sass=require("gulp-sass");
var gulp_plumber=require("gulp-plumber");
var gulp_tinypng=require("gulp-tinypng");
var gulp_uglify=require("gulp-uglify");
var browser_sync = require("browser-sync").create();
var gulp_autoprefixer=require("gulp-autoprefixer");
var gulp_rename=require("gulp-rename");

//scss转css
gulp.task("scss",function(){
	gulp.src('src/**/*.scss')
		.pipe(gulp_plumber())
		.pipe(gulp_sass())
		.pipe(gulp_autoprefixer({
			browsers: ['last 2 versions', ' last 3 Chrome versions','last 3 Edge versions','last 3 Safari versions','Firefox >= 20'],
			cascade: false
		}))
		.pipe(gulp_rename(function (path){
           path.dirname = path.dirname.replace(/scss/, 'css') 
        }))
		.pipe(gulp.dest('src/'));
});
//css压缩
gulp.task("css",function(){
	gulp.src(["src/**/*.scss","!src/**/common/**/*.scss"])
		.pipe(gulp_plumber())
		.pipe(gulp_sass())
		.pipe(gulp_min_css(
			{
				keepSpecialCommentes:'*'
			}
		))
		.pipe(gulp_autoprefixer({
			browsers: ['last 2 versions', ' last 3 Chrome versions','last 3 Edge versions','last 3 Safari versions','Firefox >= 20'],
			cascade: false
		}))
		.pipe(gulp_rename(function (path){
           path.dirname = path.dirname.replace(/scss/, 'css') 
        }))
		.pipe(gulp.dest("dist/"));
});
//图片压缩
gulp.task("img",function(){
	gulp.src("src/**/*.{png,jpg}")
		.pipe(gulp_plumber())
		.pipe(gulp_tinypng("tCk7pDoZL2Qd5LQ00bozb1w_LrMTfoQu"))
		.pipe(gulp.dest("dist/"));
});
//js压缩
gulp.task("uglify",function(){
	gulp.src("src/**/*.js")
		.pipe(gulp_uglify())
		.pipe(gulp.dest('dist/'))
});

//html、font、其他文件copy
gulp.task("copy",function(){
	gulp.src("src/**/*.{ico,gif}").pipe(gulp.dest("dist/"));
	gulp.src("src/font/*").pipe(gulp.dest("dist/font/"));
	gulp.src("src/**/*.{png,jpg}").pipe(gulp.dest("dist/"));
	gulp.src(["src/**/*.html","!src/**/common/**/*.html","src/**/common.html"]).pipe(gulp.dest("dist/"));
});

//定义自动刷新浏览器任务
gulp.task("browser", function() {
    browser_sync.init({
    	port:3000,
        server: {
            baseDir: "src/"
        }
    });
    gulp.watch("src/**/*.scss",["scss"]).on("change",browser_sync.reload);
    gulp.watch("src/**/*.html").on("change",browser_sync.reload);
});


//定义一键开发模式
gulp.task('dev',['browser','scss']);

//定义一键生成模式
gulp.task("pro",["img","uglify","css"]);

