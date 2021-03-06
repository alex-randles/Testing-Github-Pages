// self executing anonymous function
(function () {
     
    // Define the Hookit variable as an anonymous function object
    // We also add version info
    var HookIt = function () {
	    this.hooks = {}
        this.version = '0.1.1'; 
        // Return as object for chaining
        return this;
    };

	// add prototyped function to the Hookit object
	HookIt.prototype.addHook = function (hookName, hook, debug) {
		
		// If hook not already registered in this.hooks then create an array and register 	
		if (!this.hooks[hookName]){ this.hooks[hookName] = new Array();}
		this.hooks[hookName].push(hook);
		// probably more elegant ways of doing this but let register a reference to this context for the hookWrapper function
		// which will be called by the edgeConnect javascript hook
		var $this = this;
		var hookWrapper = function() {
			if (debug) console.log(JSON.stringify($this.hooks, function(key, value) {
					if (typeof value === "function"){
						return value.name;
					}	
					return value;
					})
			); 
			var rtn = true;
			var debugdata;
			// repeat over over the hook's registered functions and apply the callee's arguments
			for(var i=0;i<$this.hooks[hookName].length;i++){
				if (debug) {debugdata = hookName + " " + i + " " + $this.hooks[hookName][i]; console.log("Calling " +  debugdata)};
				var hook = $this.hooks[hookName][i];
				var hookResponse = hook.apply(this,arguments);
				if(hookResponse==="undefined" || !hookResponse)
				{
				
					// if any one of the registered functions returns false or undefined then that takes precedent - 
					// will assume it is intentionally vetoing any further 
					// processing from connect
					rtn = false; 
					if (debug) console.log("Returns false or undefined: Further edgeConnect JavaScript processing might be affected");
				} else {
					rtn = hookResponse;
				}
			}
			return rtn;
		};
		
		// Register our interest on the global object for the requested hook and this should override any predefined hooks and add them to the 
		// hookwrapper registry of hooks
		if(''+window[hookName]  != ''+hookWrapper)  {
			if(typeof window[hookName] != "undefined")
			{
				this.hooks[hookName].push(window[hookName]); 
			}
			window[hookName] = hookWrapper;
		}
        // return reference to this to allow chaining          
        return this;
	}

	// Remove an existing hook
	HookIt.prototype.removeHook = function (hookName, hook) {
		var position = this.hooks[hookName].indexOf(hook);

		if (position != -1) {
			this.hooks[hookName].splice(position, 1);
		}
	};

	// Register HookIt with global Shorthand variable
	window.Hi = new HookIt();
})();


