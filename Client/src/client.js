'use strict';
const repl = require('repl');
var request = require('superagent');

function start(repl) {
  request
    .get('http://127.0.0.1:3000/start')//建立连接
    .end(function (err, res) {
      console.log(res.text);
      repl.start({
        prompt: '> ', eval: (cmd, context, filename, output) => {
          run(cmd, output);
        }
      });
    });
}

function run(cmd, output) {
  request
    .post('http://127.0.0.1:3000/run')
    .type('form')
    .send({cmd: cmd.trim()})//send参数必须是键值对
    .end(function (err, res) {
      let answer = JSON.parse(res.text);
      if (!answer.code) {
        let str = answer.newStatus.help;
        output(str);
        if(str === "goodBye")
          process.exit();
      } else {
        output(`${answer.code}\n${answer.newStatus.help}`);
      }
    });
}

start(repl);
