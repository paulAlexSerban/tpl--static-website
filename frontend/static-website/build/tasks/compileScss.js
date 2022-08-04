import { src, dest } from "gulp";
import { paths } from "../config/paths";
import dartSass from "dart-sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import debug from "gulp-debug";
import plumber from "gulp-plumber";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import stripCssComments from "gulp-strip-css-comments";
import sassInheritance from "gulp-sass-inheritance";
import changed from "gulp-changed";
import prettier from "gulp-prettier";
import wait from "gulp-wait";
import { onError } from "../utils/onError";
import gulpif from "gulp-if";
import minifyCss from "gulp-minify-css";
import cleanCss from "gulp-clean-css";
import size from "gulp-size";

const sass = gulpSass(dartSass);
const plugins = [autoprefixer()];
const nodeEnv = process.env.NODE_ENV || "development";

export const compileScss = () => {
  console.log(
    `Executing COMPILE:SCSS on '${paths.src.styles.scssEntry}' in MODE: ${nodeEnv}`
  );
  return new Promise((resolve, reject) => {
    return (
      src(paths.src.styles.scssEntry)
        .pipe(changed(paths.dist.dir))
        .pipe(sassInheritance({ dir: paths.src.styles.scssDir }))
        .pipe(
          plumber({
            errorHandler: onError,
          })
        )
        .pipe(wait(200))
        .pipe(sass.sync().on("error", sass.logError))
        .pipe(postcss(plugins))
        .pipe(
          rename((file) => {
            file.dirname = `css/pages`;
          })
        )
        .pipe(
          cleanCss(
            {
              debug: true,
              level: {
                2: {
                  restructureRules: true,
                  removeDuplicateRules: true,
                },
              },
            },
          )
        )
        // .pipe(debug({ title: "@debug compileScss : " }))
        .pipe(stripCssComments())
        .pipe(prettier())
        .pipe(gulpif(nodeEnv !== "development", minifyCss()))
        .pipe(
          size({
            title: "compileScss : ",
            showFiles: true,
            showTotal: true,
          })
        )
        .pipe(dest(paths.dist.dir))
        .on("error", reject)
        .on("end", resolve)
    );
  });
};
