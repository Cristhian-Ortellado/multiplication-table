const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base of the multiplication table",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: false,
    default: false,
    describe: "List the mutiplication table",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: false,
    default: 10,
    describe: "The last iteration of the multiplication table",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) throw "The base should to be a number";

    if (isNaN(argv.h) || argv.h <= 0) throw "The limit should be a positive number";
    
    return true;
  }).argv;

module.exports = argv;
