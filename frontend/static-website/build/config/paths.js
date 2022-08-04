export const paths = {
  src: {
    meta: {
      metaFiles: "./source/meta/*"
    },
    html: {
      htmlDir: "./source",
      htmlFiles:"./source/html/*.html"
    },
    styles: {
      scssDir: `../living-style-guide/source/`,
      scssFiles: [`../living-style-guide/source/**/*.scss`],
      scssEntry: [`../living-style-guide/source/**/*.entry.scss`],
    }
  },
  dist: {
    dir: `./dist`,
  },
};
