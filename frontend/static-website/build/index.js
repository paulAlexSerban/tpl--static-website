import { task, series, parallel, watch } from "gulp";
import { paths } from "./config/paths";
import { clean } from "./tasks/clean";

import { lintHtml } from "./tasks/lintHtml";
import { processHtml } from "./tasks/processHtml";
import { processMetaFiles } from "./tasks/processMetaFiles";

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------

task("clean", clean);

task("lint:html", lintHtml);
task("lint", parallel("lint:html"));

task("process:html", series(lintHtml, processHtml, processMetaFiles));

// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------

task("build", series("clean", parallel("process:html")));

task("watch", () => {
  watch(paths.src.html.htmlFiles, series("process:html"));
});
