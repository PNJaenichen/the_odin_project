const ftoc = function(temp) {
  let cel = (temp - 32) * (5/9);
  if (Number.isInteger(cel)) {
    return cel;
  }
  return parseFloat(cel.toFixed(1));
}

const ctof = function(temp) {
  let fah = temp * (9/5) + 32;
  if (Number.isInteger(fah)) {
    return fah;
  }
  return parseFloat(fah.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
