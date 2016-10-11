#!/usr/bin/env node

var colors = require("colors");
var exec = require("child_process").exec;

function runProcessAndExitOnError(pName, cmd) {
  exec(cmd, function (error, stdout) {
    var spaceCount = 24;
    var space = JSON.parse(JSON.stringify(new Array(spaceCount - pName.length))).join(" ");

    var a = [];
    if (error !== null) {
      a.push("╔══════════════════════════════════════════════════════════════════╗".red);
      a.push("║                   ".red + pName.red + " Error   ".red + space + "               ║".red);
      a.push("╚══════════════════════════════════════════════════════════════════╝".red);
      a.push(stdout.toString().red);
      a.push("╚══════════════════════════════════════════════════════════════════╝".red);
      console.log((a.join("\n")).red);
      process.exit(1);
    } else {

      a.push("╔══════════════════════════════════════════════════════════════════╗");
      a.push(`║                   ${pName} Success   ${space}             ║`);
      a.push("╚══════════════════════════════════════════════════════════════════╝");
      a.push(stdout.toString());
      a.push("╚══════════════════════════════════════════════════════════════════╝");
      console.log(a.join("\n"));
    }
  });
}

(function () {
  runProcessAndExitOnError("ESLint", "npm run eslint");
})();
