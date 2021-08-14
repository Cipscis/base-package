'use strict';

import gulp from 'gulp';

//////////////////////
// Webpack bundling //
//////////////////////
import webpack from 'webpack';
import webpackConfig from './webpack.config.js';

const createJsBuilder = function (config = webpackConfig) {
	return new Promise((resolve, reject) => {
		webpack(config, (err, stats) => {
			if (err) {
				console.error(err);

				if (!config.watch) {
					reject();
					return;
				}
			} else if (stats.hasErrors()) {
				const error = new Error(stats.toString({ colors: true }));
				console.error(error);

				if (!config.watch) {
					reject();
					return;
				}
			} else {
				const statsString = stats.toString({
					chunks: false,
					colors: true,
				});
				console.log(statsString);

				if (!config.watch) {
					resolve(statsString);
				}
			}
		});
	});
};

const buildJs = function () {
	return createJsBuilder();
};

const webpackConfigWatch = Object.assign({}, webpackConfig, { watch: true });
const watchJs = function () {
	return createJsBuilder(webpackConfigWatch);
};

//////////////////////
// SCSS Compilation //
//////////////////////
import sassInit from 'gulp-sass';

import dartSass from 'sass';
const sass = sassInit(dartSass);

const cssSrcDir = 'docs/assets/scss';
const cssSrcFiles = `${cssSrcDir}/**/*.scss`;
const cssOutputDir = 'docs/assets/css';

const buildSass = function () {
	return gulp.src(cssSrcFiles)
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest(cssOutputDir));
};

const watchSass = function () {
	gulp.watch(cssSrcFiles, buildSass);
};

//////////////////
// Export tasks //
//////////////////
const build = gulp.parallel(buildSass, buildJs);
const watch = gulp.parallel(watchSass, watchJs);

export {
	build,
	watch,

	buildJs,
	buildSass,

	watchJs,
	watchSass,
};
export default gulp.series(build, watch);
