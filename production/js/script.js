$(document).ready(function () {
    $('.card_1').hide(0);
    $('.card_2').hide(0);
    $('.card_3').hide(0);
    $('.card_4').hide(0);
    $('.card_5').hide(0);
    $('.card_6').hide(0);
    const
        slidesWrapper  = document.querySelector('.slider-line')
        , slides         = document.querySelectorAll('.slide_head_text')
        , movLeft = (el, mov) => new Promise(r =>
        {
        el.ontransitionend =_=>
            {
            el.ontransitionend = null
            el.style.transition = 'none';
            r()
            }
        el.style.transition = '1s';
        el.style.transform  = `translateX(${-mov * index}px)`;
        })
        , movRight = (el, mov) => new Promise(r =>
            {
            el.ontransitionend =_=>
                {
                el.ontransitionend = null
                el.style.transition = 'none';
                r()
                }
            el.style.transition = '1s';
            el.style.transform  = `translateX(${-mov * index}px)`;
            });

    let index = 1;
        $('.slider_next').click(function (e) { //Кнопка вперед
            (async ()=>{
                await movLeft( slidesWrapper, slides[index].clientWidth)
                index = ++index % slides.length;
            })()
        });
        $('.slider_back').click(function (e) { //Кнопка назад
            (async ()=>{
                if(index > 1){
                    index = (index - 2) % slides.length;
                    await movRight( slidesWrapper, slides[index].clientWidth)
                    index = ++index % slides.length;
                }
            })()
        });

    $('.block:nth-child(1)').click(function (e) { 
        openWindow(1)
        
    });
    $(".card_info_close").click(function (e) { 
        $('.card_1').hide(0);
        $('.card_2').hide(0);
        $('.card_3').hide(0);
        $('.card_4').hide(0);
        $('.card_5').hide(0);
        $('.card_6').hide(0);
        $('.cards').slideDown(400);
    });
    $(".card_11").click(function (e) { 
        $('.cards').hide(0);
        $('.card_1').slideDown(400);
    });
    $(".card_22").click(function (e) { 
        $('.cards').hide(0);
        $('.card_2').slideDown(400);
    });
    $(".card_33").click(function (e) { 
        $('.cards').hide(0);
        $('.card_3').slideDown(400);
    });
    $(".card_44").click(function (e) { 
        $('.cards').hide(0);
        $('.card_4').slideDown(400);
    });
    $(".card_55").click(function (e) { 
        $('.cards').hide(0);
        $('.card_5').slideDown(400);
    });
    $(".card_66").click(function (e) { 
        $('.cards').hide(0);
        $('.card_6').slideDown(400);
    });
});