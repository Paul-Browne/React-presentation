!function(W){
	var topics = {};
	W.subscribe = function(topic, func){
		topics[topic] = func;
	}
	W.publish = function(topic, data){
		topics[topic] && topics[topic](data);
	}
}(window);


// use like...
// subscribe("test", function(data){
//   console.log( data.toUpperCase() );
// })

// publish("test", "hello world" );
