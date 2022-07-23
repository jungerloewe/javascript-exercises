const ftoc = function(f) {
  let c = (f - 32) * (5/9);
  Math.floor(c) + Math.round((c - Math.floor(c))*10)/10
  return Math.round((f - 32) * (5/9) * 10) / 10;
};

const ctof = function(c) {
  return Math.round(((c * 9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
