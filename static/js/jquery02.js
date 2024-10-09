$(function() {
    $('.two').css('display', 'none')
    var one = $('.one')
    var two = $('.two')
    var img = $('.one img')

    $(one).each(function(i) {
        $(this).click(function() {
            if ($(two[i]).css('display') === 'none') {
                $(two[i]).slideDown(400)
                $(img[i]).css({ 'transform': 'rotate(180deg)' })
                $(one).each(function(t) {
                    if (t !== i) {
                        $(two[t]).slideDown(400)
                        $(img[t]).css({ 'transform': 'rotate(0deg)' })
                    }
                })
            } else {
                $(two[i]).slideUp(400)
                $(img[i]).css({ 'transform': 'rotate(0deg)' })
            }
        })
    })
})