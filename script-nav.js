$("#first_block").on("click", function(){
    $("body, html").animate({
        scrollTop: 700
    }, 1000)
})

$("#second_block").on("click", function(){
    $("body, html").animate({
        scrollTop: 1500
    }, 2000)
})

$("#third_block").on("click", function(){
    $("body, html").animate({
        scrollTop: 3500
    }, 3000)
})

$("#up").on("click", function(){
    $("body, html").animate({
        scrollTop: -1200
    }, 3000)
})
