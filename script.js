$(() => {
	
	
	$("#artEdith").append(`<h1 id="edith">Edith Marie Gonzalez</h1>`);

	$("#edithMessage").append(`<p>I hope you are having a nice Wednesday! Know that we love you a lot! Don't work too hard and get more rest!</p><h5>You're loving friend,</h5><h4> Shiela</h4>`).hide();
	
	toggleElements();
	function toggleElements() {
			$("#edith").on("click", function () {
			$(this).next().toggle();
			$("#edithMessage").toggle();
		});
	}
	
	
});