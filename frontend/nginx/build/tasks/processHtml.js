import { src, dest, lastRun } from "gulp";
import { paths } from "../config/paths";
import plumber from "gulp-plumber";
import debug from "gulp-debug";
import htmlmin from "gulp-htmlmin";

export const processHtml = () => {
  return (
    src(paths.src.html.htmlFiles, { since: lastRun(processHtml) })
      .pipe(plumber())
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(debug({title: 'processHtml : '}))
      .pipe(dest([`${paths.dist.dir}`]))
  );
};
