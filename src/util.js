export default {
  clone: function (obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  iff(condition, trueRet, falseRet) {
    if (condition === true) {
      if (typeof trueRet === "function") {
        return trueRet();
      }
      return trueRet;
    } else {
      if (typeof falseRet === "function") {
        return falseRet();
      }
      return falseRet;
    }
  }
};
