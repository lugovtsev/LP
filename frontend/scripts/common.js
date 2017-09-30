$(document).ready(function() {



/*code here*/

/* Прокрутка вверх

$('#totop').click(function()
{
	 $('html, body').animate({
        scrollTop: 0
    }, 500);
});
*/

/* Плавная прокрутка меню */

$('#menuList a').click(function(e)
{
	slideMenu(e, this);
});

$('#menuListDesktop a').click(function(e)
{
	slideMenu(e, this);
});

function slideMenu(e, item) {
	e.preventDefault();
	var blockId = $(item).attr('href');
	 $('html, body').animate({
        scrollTop: $(blockId).offset().top - 50
    }, 500);
}

$('#menu').click(function() {
	if ( $('#menu').hasClass('active') ) {
		$(".header__menu__list").removeClass('active');
		$(this).removeClass('active');
	}
	else {
		$(".header__menu__list").addClass('active');
		$(this).addClass('active');
	}
});




/*маска для input c телефоном*/
	$(".phone-input").mask("+7 (999) 999-99-99");

/*colorbox*/
	$('.reviews__video').colorbox({
			rel: '.reviews__video', //для группировки изображений
			opacity: 0.5,
			speed: 350,
			title: false,
			iframe:true,
			innerWidth:300,
			innerHeight:180,
		});

/*slick*/
	$('#example .slick-container').not('.slick-initialized').slick({
	  infinite: true,
	  arrows: true,
	  dots: false,
	  slidesToShow: 4,
	  slidesToScroll: 1,
		centerMode: false,
		focusOnSelect: true,
		responsive: [
    {
      breakpoint: 768,
      settings: {
				infinite: true,
			  arrows: true,
			  dots: false,
			  slidesToShow: 1,
			  slidesToScroll: 1,
      }
    },
		{
      breakpoint: 1024,
      settings: {
				infinite: true,
			  arrows: true,
			  dots: false,
			  slidesToShow: 3,
			  slidesToScroll: 1,
      }
    }
  ]
	});

	$('#photo .slick-container').not('.slick-initialized').slick({
	  infinite: true,
	  arrows: true,
	  dots: false,
	  slidesToShow: 4,
	  slidesToScroll: 1,
		asNavFor: '#photo .slick-for',
		centerMode: false,
		focusOnSelect: true,
		responsive: [
    {
      breakpoint: 768,
      settings: {
				infinite: true,
			  arrows: true,
			  dots: false,
			  slidesToShow: 1,
			  slidesToScroll: 1,
      }
    },
		{
      breakpoint: 1024,
      settings: {
				infinite: true,
			  arrows: true,
			  dots: false,
			  slidesToShow: 3,
			  slidesToScroll: 1,
      }
    }
  ]
	});

	$('#photo .slick-for').not('.slick-initialized').slick({
	 slidesToShow: 1,
	 slidesToScroll: 1,
	 arrows: true,
	 fade: true,
	 asNavFor: '#photo .slick-container'
	});

	//удаляем класс при фокусе
	$('.name-input').focus(function() {
		$(this).removeClass("fill-error");
		$(this).attr("placeholder","Ваше имя");
	});
	$('.phone-input').focus(function() {
		$(this).removeClass("fill-error");
		$(this).attr("placeholder","Ваш телефон");
	});

/*валидация формы*/
	$("form").submit(function() {
		var checkError = false; //проверка прохождения валидации
		//var regExpMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
		//var email = $(this).find('.email-input');
		var regExpName = /[^а-яЁё\s]/i;
		var name = $(this).find('.name-input');
		var phone = $(this).find('.phone-input');

		//не заполнено имя
		if (name.val()=="")
			{
				name.addClass("fill-error");
				name.attr("placeholder","*Заполните поле");
				checkError = true;
			}
		else if (regExpName.test(name.val())) //неверный формат имени
					{
						name.addClass("fill-error");
						name.attr("placeholder","Неверный формат имени");
						name.val("");
						checkError = true;
					}
		else
		{
			name.removeClass("fill-error");
			name.attr("placeholder","Ваше имя");

		}
		//не заполнен телефон
		if (phone.val()=="")
			{
				phone.addClass("fill-error");
				phone.attr("placeholder","*Заполните поле");
				checkError = true;
			}
		else
			{
				phone.removeClass("fill-error");
				phone.attr("placeholder","Ваш телефон");
			}
		//неверный формат email
		/*
		if (!regExpMail.test(email.val()) && email.val()!="")
			{
				email.addClass("fill-error");
				email.attr("placeholder","Неверный формат e-mail");
				email.val("");
				checkError = true;
			}
		else
			{
				email.removeClass("fill-error");
				email.attr("placeholder","Email");
			}*/
		if (checkError) return false; //отменить отправку формы, если валидация не пройдена
	});

});
