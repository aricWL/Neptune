$("document").ready(function() {
    let stack = []
    let index;
    let delay = 0
    let square;

    $('.square').on('click', function(e){
    	
    	if($(this).css('backgroundColor') !== 'rgb(0, 0, 255)'){
    		$(this).css('backgroundColor', 'blue')
    		stack.push(e.target.id)
    		if(stack.length === 9){
    			let popOff = setInterval(function(){
    				square = stack.pop()
    				$('#'+square).css('backgroundColor', 'white')
    			}, 300)
    			setTimeout(function(){
    				clearInterval(popOff)
    				$('.square').off()
    			}, 3000)
    		}
    	}else{
    		index = stack.indexOf($(this))
    		stack.splice(index, 1)
    		$(this).css('backgroundColor', 'white')
    	}
    })

});