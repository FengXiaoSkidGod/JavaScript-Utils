			function Timer(func, time) {
			    let timerId = null;
			  
			    function start() {
			        // 使用 setTimeout 设置一个延迟调用
			        timerId = setTimeout(() => {
			            // 执行传入的函数
			            func();
			            start();  
			        }, time);  
			    }  
			
			    // 清除定时器
			    this.stop = function() {
			        clearTimeout(timerId);
			        timerId = null;
					console.log("Successful Stop!")
			    };
			  
			    // 开始定时器
			    start();
			}
