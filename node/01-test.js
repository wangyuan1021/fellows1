console.log('start');
for(var i=0;i<5;i++){
    setTimeout(function () {
        console.log(i);
    },0);
}
console.log("end");
/*异步代码---event loop
1 当前线程空闲
2 满足触发条件*/