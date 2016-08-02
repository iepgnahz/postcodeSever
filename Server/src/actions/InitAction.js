"use strict";

class InitAction {
  constructor() {
    this.name = 'init';
    this.help = '请选择功能:1.邮编转编码 2.编码转邮编 q.退出';
  }

  doAction(cmd) {
    switch (cmd) {
      case "1":
        return {name: "postcode"};
        break;
      case "2":
        return {name: "barcode"};
        break;
      case "q":
        return{name:"exit"};
        break;
      default:
        return {name: "init", code: "输入无效请重新输入"};
    }
  }
}

module.exports = InitAction;
