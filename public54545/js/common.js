$(document).ready(function(){function e(e,i){e.preventDefault();var s=$(i).attr("href");$("html, body").animate({scrollTop:$(s).offset().top-50},500)}$("#menuList a").click(function(i){e(i,this)}),$("#menuListDesktop a").click(function(i){e(i,this)}),$("#menu").click(function(){$("#menu").hasClass("active")?($(".header__menu__list").removeClass("active"),$(this).removeClass("active")):($(".header__menu__list").addClass("active"),$(this).addClass("active"))}),$(".phone-input").mask("+7 (999) 999-99-99"),$(".reviews__video").colorbox({rel:".reviews__video",opacity:.5,speed:350,title:!1,iframe:!0,innerWidth:300,innerHeight:180}),$("#example .slick-container").not(".slick-initialized").slick({infinite:!0,arrows:!0,dots:!1,slidesToShow:4,slidesToScroll:1,centerMode:!1,focusOnSelect:!0,responsive:[{breakpoint:768,settings:{infinite:!0,arrows:!0,dots:!1,slidesToShow:1,slidesToScroll:1}},{breakpoint:1024,settings:{infinite:!0,arrows:!0,dots:!1,slidesToShow:3,slidesToScroll:1}}]}),$("#photo .slick-container").not(".slick-initialized").slick({infinite:!0,arrows:!0,dots:!1,slidesToShow:4,slidesToScroll:1,asNavFor:"#photo .slick-for",centerMode:!1,focusOnSelect:!0,responsive:[{breakpoint:768,settings:{infinite:!0,arrows:!0,dots:!1,slidesToShow:1,slidesToScroll:1}},{breakpoint:1024,settings:{infinite:!0,arrows:!0,dots:!1,slidesToShow:3,slidesToScroll:1}}]}),$("#photo .slick-for").not(".slick-initialized").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,fade:!0,asNavFor:"#photo .slick-container"}),$("form").submit(function(){var e=!1,i=/[^а-яЁё\s]/i,s=$(this).find(".name-input"),o=$(this).find(".phone-input");if(""==s.val()?(s.addClass("fill-error"),s.attr("placeholder","*Заполните поле"),e=!0):i.test(s.val())?(s.addClass("fill-error"),s.attr("placeholder","Неверный формат имени"),s.val(""),e=!0):(s.removeClass("fill-error"),s.attr("placeholder","Имя*")),""==o.val()?(o.addClass("fill-error"),o.attr("placeholder","*Заполните поле"),e=!0):(o.removeClass("fill-error"),o.attr("placeholder","Телефон*")),e)return!1})});