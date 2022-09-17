const {
  promiseTheaterIXX,
  promiseTheaterVGC
} = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (params) => {
  let theaterIXX = await promiseTheaterIXX();
  let theaterVGC = await promiseTheaterVGC();

  return new Promise((resolve) => {
    const hasil = [...theaterIXX, ...theaterVGC] ?
      .filter(res => res.hasil === params) ? .length
    return resolve(hasil);
  });
}


module.exports = {
  promiseOutput,
};