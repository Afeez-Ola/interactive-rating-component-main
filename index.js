let rating_value = 0
$(".button").click(function() {
    rating_value = parseInt($(this).html());
    console.log(rating_value)
})

$(".submit").click(function(){
    $(".rating").attr("id", "hidden")
    $(".thank-you-state").attr("id", "")
    $(".result").html(rating_value)
})

