var orm = require("../config/orm");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
      console.log(res);
    });
  },
  insertOne: function(col, val, cb) {
    console.log(val);
    orm.insertOne("burgers", col, val, function(res) {
      cb(res);
    });
  },
  updateOne: function(input, val, cb) {
    orm.updateOne("burgers", input, val, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
