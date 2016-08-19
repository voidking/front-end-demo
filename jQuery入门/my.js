$(document).ready(function(){


	$("#button0").click(function(){
		//console.log($("form input")[0]);
		//console.log($("form>input")[0]);
		//console.log($("label + input")[1]);
		//console.log($("form ~ input")[0]);

		//console.log($("li:first")[0]);	
		//console.log($("input:not(:checked)")[0]);
		//console.log($("tr:even")[0]);
		//console.log($("input:empty")[0]);
		$("img").each(function(i){
			this.src="img2.jpg";
		});

	});

	$("h1").click(function(){
		$(this).hide();
		console.log(this);
		console.log($(this));
		console.log(this.toString());
		console.log($(this).toString());
		console.log($(this).context);
	});

	$("p.c_color").click(function(){
		$(this).css("background-color","red");
	});

	$("#content").delegate( "*", "focus blur", function( event ) {
	    var elem = $( this );
	    setTimeout(function() {
	       elem.toggleClass( "focused", elem.is( ":focus" ) );
	    }, 0);
	});



});