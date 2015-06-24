$(document).ready(function () {
	console.log("readayyy");
	$('form').on("submit", function() {
		console.log("The form has been submitted");
		var valueOne = $("input[name='number-one']").val();
		var valueTwo = $("input[name='number-two']").val();
		console.log("Value one: " + valueOne + "\n" + "Value two: "
			+ valueTwo)

		// ajax to the backend
		$.ajax({
			type: "POST",
			url: "/",
			data: { first: valueOne, second: valueTwo},
			success: function(results) {
				console.log(results);
				$('#results').html(results.total);
				$('input[name="number-one"]').val("");
				$('input[name="number-one"]').focus();
				$('input[name="number-two"]').val("");
			},
			error: function(error) {
				console.log(error)
			}
		});
	});
});