"use strict";


const ChangedPostcode = require("../ChangedPostcode");

class PostcodeAction {
  constructor() {
    this.name = "postcode";
    this.help = "请输入邮编(q返回上一层):";
  }

  doAction(cmd) {
    let changedPostcode = new ChangedPostcode();
    if (cmd === "q") {
      return {name: "init"};
    } else {
      let barcode = changedPostcode.changePostCode(cmd);
      if (barcode === "您输入的邮编不合法,应是5,9或者10数字0-9字符,并且若有-,其应在第六位处,请重新输入") {
        return {name: "postcode", code: barcode};
      } else {
        return {name: "init", code: barcode};
      }
    }
  }
}

module.exports = PostcodeAction;
