const fs = require("fs");
var colors = require("colors");
const crearArchivo = async (base = 5, list = false, limit = 10) => {
  let salida = "";
  for (let i = 1; i <= limit; i++) {
    salida += `${base} x ${i} = ${i * base}\n`;
  }

  try {
    fs.writeFileSync(`./output/tabla-${base}.txt`, salida);

    if (list) {
      console.log("==========================".rainbow);
      console.log(`TABLA DEL`, base);
      console.log("==========================".trap);
      console.log(salida);
    }
    return `tabla-${base}.txt`.green;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
