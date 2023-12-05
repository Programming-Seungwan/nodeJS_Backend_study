// 해당 파일은 nodeJS에서의 실행 순서를 알 수 있는 파일에 해당

const process = require('process');

// setImmediate는 이벤트 루프 간에 가장 우선적으로 실행되는 코드이다
setImmediate(() => {
  console.log('immediate');
});

// process 모듈의 nextTick 함수는 다른 것보다도 가장 우선 순위가 높다고 할 수 있다
process.nextTick(() => {
  console.log('I am process function');
});

// 이 역시 비동기 처리가 되는 함수로서, 시스템의 이벤트 루프에 의해 관장되며 프로미스와 nextTick 보다는 우선 순위가 낮다
setTimeout(() => {
  console.log('I am setTimeout function');
}, 0);

// 프로미스는 micro task queue에 들어가며 우선 순위가 nextTick 다음으로 높다고 할 수 있다
Promise.resolve().then(() => console.log('I am promise'));
