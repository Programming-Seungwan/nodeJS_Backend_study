function foo() {
  console.log('Hello world!');
}

function boo() {
  console.log('Hi korea!');
}

// 할당해주는 과정이 필요함. 일종의 객체 생성이라고 봐도 됨
exports.foo = foo;

exports.boo = boo;
