import { task, series, parallel, watch } from "gulp";
import { paths } from "./config/paths";
import { lintScss } from "./tasks/lintScss";
import { compileScss } from "./tasks/compileScss";

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------
const watchSCSS = () => {
  const folder = paths.src.styles.scssFiles;
  watch(folder, series("lint", "compile"));
};

// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------
task("lint", parallel(lintScss));
task("compile", parallel(compileScss));
task("watch", series("lint", "compile", watchSCSS));
