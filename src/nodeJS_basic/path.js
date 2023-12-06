// 실행하는 대상 js 파일의 절대 경로를 의미하는 것은 __filename이다. __dirname은 마찬가지인데 그냥 디렉터리 절대경로
console.log(__filename);

// 이건 node 명렬어를 입력하는 위치의 절대 경로를 의미한다.
console.log(process.cwd());
