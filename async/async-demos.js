var app = (function(){

	/* Sync */
	function addSync(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`	[@Service] returing result`);
		return result;
	}

	function addSyncClent(x,y){
		console.log(`[@Client] triggering addSync`);
		var result = addSync(x,y);
		console.log(`[@Client] result = ${result}`);
	}


	/* async */
	function addAsync(x,y, callback){
		console.log(`	[@Service] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`	[@Service] returing result`);
			callback(result);
		}, 4000);
	}

	function addAsyncClent(x,y){
		console.log(`[@Client] triggering addAsync`);
		addAsync(x,y, function(result){
			console.log(`[@Client] result = ${result}`);
		});
	}

	function addAsyncPromise(x,y){

		console.log(`	[@Service] processing ${x} and ${y}`);

		var promise = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@Service] returing result`);
				resolveFn(result);
			}, 4000);
		});

		return promise;

	}

	return { addSyncClent, addAsyncClent, addAsyncPromise };
})();


