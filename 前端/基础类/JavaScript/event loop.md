# event loop
### Task 队列中，任务源可以分为 微任务（microtask） 和 宏任务（macrotask）。在 ES6 规范中，microtask 称为 jobs，macrotask 称为 task
### 微任务包括 process.nextTick ，promise ，Object.observe ，MutationObserver
### 宏任务包括 script ， setTimeout ，setInterval ，setImmediate ，I/O ，UI rendering
### Event loop 执行顺序：
1.执行同步代码，这属于宏任务
2.执行栈为空，查询是否有微任务需要执行
3.执行所有微任务
4.必要的话渲染 UI
5.然后开始下一轮 Event loop，执行宏任务中的异步代码