"use strict"

//получаем блок затемнения и открытия поддержки
let twilight = document.querySelector('.twilight');
let support = document.querySelector('.supportOp');

//получаем блок о нас
let aboutUs = document.querySelector('.aboutUs');

//создаем и получаем изображение открытия видео и само видео
let video = document.querySelector('.program__lesson__plan_video');
let imgVideoClose = document.createElement('img');
imgVideoClose.src = 'img/close.png';
imgVideoClose.className = 'videoClose';

//для картинки бургера
let	imgOpen = document.createElement('img');
imgOpen.className = 'boorger';

//для картинки закрытия бургера
let imgClose = document.createElement('img');
imgClose.className = 'boorgerClose';

//беру все ссылки
const anchors = document.querySelectorAll('a[href*="#"]')

//обновляем страницу
function size_Adaptive() {

	window.location.reload(); 

}

//открытие поддержки
function supportOpen() {

	twilight.style.width = '100%';
	twilight.style.height = '100%';
	document.querySelector('.support').style.top = '10%';

}

//закрытие поддержки
function supportClose() {

	twilight.style.width = '0%';
	twilight.style.height = '0%';
	document.querySelector('.support').style.top = '100%';

}

//изменение шапки при уменьшении экрана
if ( document.documentElement.clientWidth < 750) {

	imgOpen.src = 'img/boorger.png';

	imgClose.src = 'img/close.png';

	document.querySelector('.menu>.container').append(imgOpen);

}

//открытие бургера
function openBoorger() {

  //устранение предыдущей картинки
 	imgOpen.style.opacity = '0';
 	imgOpen.style.left = '100%';

  //затемнение
	twilight.style.width = '100%';
	twilight.style.height = '100%';

  //отображение закрытия бургера
	document.querySelector('.menu>.container').append(imgClose);
	imgClose.style.zIndex = '2';
	imgClose.style.opacity = '1';
 	imgClose.style.left = '90%';
	document.querySelector('.header__nav').style.bottom = '35%';

}

//закрытие бургера
function closeBoorger() {

  //устранение предыдущей картинки
 	imgClose.style.opacity = '0';
 	imgClose.style.left = '100%';

  //затемнение убираем
	twilight.style.width = '0%';
	twilight.style.height = '0%';

  //отображение бургера
	document.querySelector('.menu>.container').append(imgOpen);
	imgOpen.style.zIndex = '2';
	imgOpen.style.opacity = '1';
	imgOpen.style.left = '90%';
	document.querySelector('.header__nav').style.bottom = '100%';

}

//открытие видео
function videoOpen() {

	video.style.width = '80%';
	document.querySelector('.program__lesson__plan').append(imgVideoClose);
		imgVideoClose.style.opacity = '1';


}

//закрытие видео и пауза
function videoClose() {

	video.style.width = '20px';
	imgVideoClose.style.opacity = '0';
	video.pause();

}

//открытие плашки о нас
function aboutUsOpen() {

	aboutUs.style.bottom = `${document.querySelector('.footer').offsetHeight}px`;
	twilight.style.width = '100%';
	twilight.style.height = '100%';

}

//закрытие плашки о нас
function aboutUsClose() {

	aboutUs.style.bottom = '-100%';
	twilight.style.width = '0%';
	twilight.style.height = '0%';

}

//плавный скрол к якорной ссылке
for (let anchor of anchors) {

  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

  })

}

//выплывающая и скрывающаяся плашка header
window.onscroll = () => {

	if (window.scrollY > document.documentElement.clientHeight) {

		//плашка меню выезжает
		document.querySelector('.menu').style.bottom = '85%';
		document.querySelector('.up').style.top = '75%'


		//открытие бургер меню
		if ( imgClose.style.opacity == '0' ) {

		 	imgOpen.style.opacity = '1';
			imgOpen.style.left = '90%';

		}

	}


	if (window.scrollY < document.documentElement.clientHeight) {

		//плашка меню прячется
		document.querySelector('.menu').style.bottom = '100%';
		document.querySelector('.up').style.top = '100%'

		//скрытие бергера всего
 		imgOpen.style.left = '100%';
 		imgOpen.style.opacity = '0';
 		document.querySelector('.header__nav').style.bottom = '100%';
 		imgClose.style.opacity = '0';
 		imgClose.style.left = '100%';
	}

	//плашка о нас при скроле пропадает
	aboutUs.style.bottom = '-100%';
	twilight.style.width = '0%';
	twilight.style.height = '0%';

}

//события открытиея и закрытия бургера
imgOpen.onclick = () => {openBoorger()}
imgClose.onclick = () => {closeBoorger()}

//события открытия и закрытия поддержки при клике
support.onclick = () => {supportOpen()}
twilight.onclick = () => {
	supportClose();
	aboutUsClose();
	closeBoorger();
}

//вызываем функцию при изменении ширины экрана
//window.addEventListener('resize', () => { size_Adaptive() });

//открытие и закрытие видео
video.onclick = () => {videoOpen()}
imgVideoClose.onclick = () => {videoClose()}


document.querySelector('.aboutUsOpen').onclick = () => {aboutUsOpen()}





