import mysql from 'mysql';

const pools = {};
let options = {};

function poolOptions(value) {
  options = value;
}

function pool(name = 'default') {
  if (!pools[name]) {
    pools[name] = mysql.createPool(options[name] || options.default);
  }

  return {
    query(string, values, callback) {
      pools[name].query(string, values, callback);
    }
  };
}

export {
  pool,
  poolOptions
};
