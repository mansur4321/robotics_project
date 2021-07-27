"use strict"

//HTML вставляемый в программу обучения для 10-15 лет
let maxPlanHTML = `

<div class="program__lesson">

	<div class="program__lesson__level">
		<p class="program__lesson__level_number text">Урок 2</p>
		<img src="img/circle.png" alt="" class="program__lesson__level_image">
	</div>

	<div class="program__lesson__plan program__lesson__plan-color1">

		<div class="program__lesson__plan_title subtitle">Программируем в Tinkercad</div>

		<ul class="program__lesson__plan_spisok">

			<li class="program__lesson__plan_row1">Построение кода</li>
			<li class="program__lesson__plan_row1">Циклы и условия</li>
			<li class="program__lesson__plan_row1">Подключение пьезодинамика</li>
			<li class="program__lesson__plan_row1">Проект «Маяк»</li>

		</ul>

		<p class="program__lesson__plan_text">Практика: рассматриваем основы блочного программирования,
		 подключаем пьезодинамик и создаем новый проект.</p>

	</div>
</div>

<div class="program__lesson">

	<div class="program__lesson__level">
		<p class="program__lesson__level_number text">Урок 3</p>
		<img src="img/circle.png" alt="" class="program__lesson__level_image">
	</div>

	<div class="program__lesson__plan program__lesson__plan-color1">

		<div class="program__lesson__plan_title subtitle">Осваиваем схемотехнику</div>

		<ul class="program__lesson__plan_spisok">

			<li class="program__lesson__plan_row1">Базовые элементы для создания схем</li>
			<li class="program__lesson__plan_row1">Работа с цифровыми и аналоговыми входами</li>
			<li class="program__lesson__plan_row1">Построение первой схемы</li>
			<li class="program__lesson__plan_row1">Проект «Светофор»</li>

		</ul>

		<p class="program__lesson__plan_text">Практика: составляем простые схемы и пишем для них программы.</p>

	</div>
</div>

<div class="program__lesson">

	<div class="program__lesson__level">
		<p class="program__lesson__level_number text">Урок 4</p>
		<img src="img/circle.png" alt="" class="program__lesson__level_image">
	</div>

	<div class="program__lesson__plan program__lesson__plan-color1">

		<div class="program__lesson__plan_title subtitle">Работаем с резисторами и механическими кнопками</div>

		<ul class="program__lesson__plan_spisok">

			<li class="program__lesson__plan_row1">Устройства взаимодействия со схемой</li>
			<li class="program__lesson__plan_row1">Подключение резисторов</li>
			<li class="program__lesson__plan_row1">Кнопки и потенциометры</li>
			<li class="program__lesson__plan_row1">Проект «Пианино»</li>

		</ul>

		<p class="program__lesson__plan_text">Практика: работаем с потенциометрами и механическими кнопками, подключаем резисторы. 
		Создаем «Пианино»: настраиваем пьезодинамики так, чтобы каждый играл свою ноту.</p>

	</div>
</div>

<div class="program__lesson">

	<div class="program__lesson__level">
		<p class="program__lesson__level_number text">Урок 5</p>
		<img src="img/circle.png" alt="" class="program__lesson__level_image">
	</div>

	<div class="program__lesson__plan program__lesson__plan-color1">

		<div class="program__lesson__plan_title subtitle">Изучаем фоторезистор</div>

		<ul class="program__lesson__plan_spisok">

			<li class="program__lesson__plan_row1">Подключение и устройство</li>
			<li class="program__lesson__plan_row1">Использование в умном доме</li>
			<li class="program__lesson__plan_row1">Проект «Умный свет»</li>

		</ul>

		<p class="program__lesson__plan_text">Практика: используем Arduino для умного дома.</p>

	</div>
</div>

<div class="program__lesson">

	<div class="program__lesson__level">
		<p class="program__lesson__level_number text">Урок 6</p>
		<img src="img/circle.png" alt="" class="program__lesson__level_image">
	</div>

	<div class="program__lesson__plan program__lesson__plan-color1">

		<div class="program__lesson__plan_title subtitle">Работаем со светодиодами</div>

		<ul class="program__lesson__plan_spisok">

			<li class="program__lesson__plan_row1">ШИМ — широтно-импульсная модуляция</li>
			<li class="program__lesson__plan_row1">Ввод переменных</li>
			<li class="program__lesson__plan_row1">Подключение RGB-светодиода</li>
			<li class="program__lesson__plan_row1">Проект «Ночник»</li>

		</ul>

		<p class="program__lesson__plan_text">Практика: определяем, когда необходимо переменное напряжение в сети. 
		Создаем лампу, которая переливается цветами радуги.</p>

	</div>
</div>

<div class="program__lesson">

	<div class="program__lesson__level">
		<p class="program__lesson__level_number text">Урок 7</p>
		<img src="img/circle.png" alt="" class="program__lesson__level_image">
	</div>

	<div class="program__lesson__plan program__lesson__plan-color1">

		<div class="program__lesson__plan_title subtitle">Отправляем сообщения в интернет</div>

		<ul class="program__lesson__plan_spisok">

			<li class="program__lesson__plan_row1">Компоненты для работы в реальном времени</li>
			<li class="program__lesson__plan_row1">WI-FI модуль</li>
			<li class="program__lesson__plan_row1">Датчик реального времени</li>

		</ul>

		<p class="program__lesson__plan_text">Практика: учим наши проекты реагировать на внешние изменения и автоматически отправлять сообщения о работе.</p>

	</div>
</div>

<div class="program__lesson">

	<div class="program__lesson__level">
		<p class="program__lesson__level_number text">Урок 8</p>
		<img src="img/circle.png" alt="" class="program__lesson__level_image">
	</div>

	<div class="program__lesson__plan program__lesson__plan-color1">

		<div class="program__lesson__plan_title subtitle">Работаем с моторами</div>

		<ul class="program__lesson__plan_spisok">

			<li class="program__lesson__plan_row1">Устройство и подключение моторов</li>
			<li class="program__lesson__plan_row1">Механика работы</li>
			<li class="program__lesson__plan_row1">Применение в производстве</li>
			<li class="program__lesson__plan_row1">Транзисторы</li>
			<li class="program__lesson__plan_row1">Моторы в робототехнике</li>

		</ul>

		<p class="program__lesson__plan_text">Практика: работаем с моторами и рассматриваем, как их применять в наших проектах.</p>

	</div>
</div>

<div class="program__lesson">

	<div class="program__lesson__level">
		<p class="program__lesson__level_number text">Урок 9</p>
		<img src="img/circle.png" alt="" class="program__lesson__level_image">
	</div>

	<div class="program__lesson__plan program__lesson__plan-color1">

		<div class="program__lesson__plan_title subtitle">Работаем с сервоприводами</div>

		<ul class="program__lesson__plan_spisok">

			<li class="program__lesson__plan_row1">Устройство и подключение сервоприводов</li>
			<li class="program__lesson__plan_row1">Механика работы</li>
			<li class="program__lesson__plan_row1">Применение в производстве</li>
			<li class="program__lesson__plan_row1">Подключение библиотек</li>
			<li class="program__lesson__plan_row1">Управление сервоприводом с помощью потенциометра</li>

		</ul>

		<p class="program__lesson__plan_text">Практика: рассматриваем роль сервоприводов в робототехнике и подключаем их к Arduino.</p>

	</div>
</div>

<div class="program__lesson">

	<div class="program__lesson__level">
		<p class="program__lesson__level_number text">Урок 10</p>
		<img src="img/circle.png" alt="" class="program__lesson__level_image">
	</div>

	<div class="program__lesson__plan program__lesson__plan-color1">

		<div class="program__lesson__plan_title subtitle">Обсуждаем будущий проект</div>
		<p class="program__lesson__plan_text">Практика: повторяем пройденные уроки, обсуждаем идеи будущего проекта.</p>

	</div>
</div>

<div class="program__lesson">

	<div class="program__lesson__level">
		<p class="program__lesson__level_number text">Урок 11</p>
		<img src="img/circle.png" alt="" class="program__lesson__level_image">
	</div>

	<div class="program__lesson__plan program__lesson__plan-color1">

		<div class="program__lesson__plan_title subtitle">Создаём проект</div>
		<p class="program__lesson__plan_text">Практика: обсуждаем функционал и детали проекта, собираем его.</p>

	</div>
</div>

<div class="program__lesson">

	<div class="program__lesson__level">
		<p class="program__lesson__level_number text ">Урок 12</p>
		<img src="img/circle.png" alt="" class="program__lesson__level_image program__lesson__level_image-two">
	</div>

	<div class="program__lesson__plan program__lesson__plan-color1">

		<div class="program__lesson__plan_title subtitle">Дорабатываем проект и подводим итоги</div>
		<p class="program__lesson__plan_text">Практика: исправляем возможные ошибки, готовимся к презентации проекта.</p>

	</div>
</div>

<div class="program__lesson">

	<div class="program__lesson__level">
		<p class="program__lesson__level_number text">Урок 13</p>
		<img src="img/circle.png" alt="" class="program__lesson__level_image program__lesson__level_image-two">
	</div>

	<div class="program__lesson__plan program__lesson__plan-color1 program__lesson__finalPlan">

		<div class="program__lesson__plan_title subtitle">Презентация проекта</div>
		<p class="program__lesson__plan_text finalText">На последнем занятии ребята показывают свои проекты родителям и жюри. Все получают цифровые сертификаты о прохождении обучения, а за три лучших проекта вручим призы.</p>

	</div>
</div>`;

//HTML вставляемый в программу обучения для 6-9 лет
let minPlanHTML = `

<div class="program__lesson">

	<div class="program__lesson__level">
		<p class="program__lesson__level_number text">Урок 2</p>
		<img src="img/circle.png" alt="" class="program__lesson__level_image">
	</div>

	<div class="program__lesson__plan program__lesson__plan-color1">

		<div class="program__lesson__plan_title subtitle">Работаем с резисторами и механическими кнопками</div>

		<ul class="program__lesson__plan_spisok">

			<li class="program__lesson__plan_row1">Устройства взаимодействия со схемой</li>
			<li class="program__lesson__plan_row1">Подключение резисторов</li>
			<li class="program__lesson__plan_row1">Кнопки и потенциометры</li>
			<li class="program__lesson__plan_row1">Проект «Пианино»</li>

		</ul>

		<p class="program__lesson__plan_text">Практика: работаем с потенциометрами и механическими кнопками, подключаем резисторы. 
		Создаем «Пианино»: настраиваем пьезодинамики так, чтобы каждый играл свою ноту.</p>

	</div>
</div>

<div class="program__lesson">

	<div class="program__lesson__level">
		<p class="program__lesson__level_number text">Урок 3</p>
		<img src="img/circle.png" alt="" class="program__lesson__level_image">
	</div>

	<div class="program__lesson__plan program__lesson__plan-color1">

		<div class="program__lesson__plan_title subtitle">Работаем с моторами</div>

		<ul class="program__lesson__plan_spisok">

			<li class="program__lesson__plan_row1">Устройство и подключение моторов</li>
			<li class="program__lesson__plan_row1">Механика работы</li>
			<li class="program__lesson__plan_row1">Применение в производстве</li>
			<li class="program__lesson__plan_row1">Транзисторы</li>
			<li class="program__lesson__plan_row1">Моторы в робототехнике</li>

		</ul>

		<p class="program__lesson__plan_text">Практика: работаем с моторами и рассматриваем, как их применять в наших проектах.</p>

	</div>
</div>

<div class="program__lesson">

	<div class="program__lesson__level">
		<p class="program__lesson__level_number text">Урок 4</p>
		<img src="img/circle.png" alt="" class="program__lesson__level_image">
	</div>

	<div class="program__lesson__plan program__lesson__plan-color1">

		<div class="program__lesson__plan_title subtitle">Работаем с сервоприводами</div>

		<ul class="program__lesson__plan_spisok">

			<li class="program__lesson__plan_row1">Устройство и подключение сервоприводов</li>
			<li class="program__lesson__plan_row1">Механика работы</li>
			<li class="program__lesson__plan_row1">Применение в производстве</li>
			<li class="program__lesson__plan_row1">Подключение библиотек</li>
			<li class="program__lesson__plan_row1">Управление сервоприводом с помощью потенциометра</li>

		</ul>

		<p class="program__lesson__plan_text">Практика: рассматриваем роль сервоприводов в робототехнике и подключаем их к Arduino.</p>

	</div>
</div>

<div class="program__lesson">

	<div class="program__lesson__level">
		<p class="program__lesson__level_number text">Урок 5</p>
		<img src="img/circle.png" alt="" class="program__lesson__level_image">
	</div>

	<div class="program__lesson__plan program__lesson__plan-color1">

		<div class="program__lesson__plan_title subtitle">Обсуждаем будущий проект</div>
		<p class="program__lesson__plan_text">Практика: повторяем пройденные уроки, обсуждаем идеи будущего проекта.</p>

	</div>
</div>

<div class="program__lesson">

	<div class="program__lesson__level">
		<p class="program__lesson__level_number text">Урок 6</p>
		<img src="img/circle.png" alt="" class="program__lesson__level_image">
	</div>

	<div class="program__lesson__plan program__lesson__plan-color1">

		<div class="program__lesson__plan_title subtitle">Создаём проект</div>
		<p class="program__lesson__plan_text">Практика: обсуждаем функционал и детали проекта, собираем его.</p>

	</div>
</div>

<div class="program__lesson">

	<div class="program__lesson__level">
		<p class="program__lesson__level_number text">Урок 7</p>
		<img src="img/circle.png" alt="" class="program__lesson__level_image program__lesson__level_image-two">
	</div>

	<div class="program__lesson__plan program__lesson__plan-color1 program__lesson__finalPlan">

		<div class="program__lesson__plan_title subtitle">Презентация проекта</div>
		<p class="program__lesson__plan_text finalText">На последнем занятии ребята показывают свои проекты родителям и жюри. Все получают цифровые сертификаты о прохождении обучения и вручим призы.</p>

	</div>
</div>`;


function minAgePlan() {

	let programAll = document.querySelectorAll('.program__lesson');


	for (var i = 1; i < programAll.length; i++) {

		programAll[i].remove();

	}


	document.querySelector('.les').insertAdjacentHTML('afterend', minPlanHTML);
}


function maxAgePlan() {

	let programAll = document.querySelectorAll('.program__lesson');


	for (var i = 1; i < programAll.length; i++) {

		programAll[i].remove();

	}


	document.querySelector('.les').insertAdjacentHTML('afterend', maxPlanHTML);
}

//изменение стилей при 6-9 лет
function minAgeStyle() {

	//блок плана урока и его список и кнопки в минигейм
	let liAll = document.querySelectorAll('li');
	let borderAll = document.querySelectorAll('.program__lesson__plan');
	let button = document.querySelectorAll('.game__controllers__button');

	document.querySelector('.header').style.background = '#65C4FB';
	document.querySelector('.header').style.boxShadow = '0 0 15px #65C4FB';

	document.querySelector('.header__logo_image').src = 'img/bender_blue.png';

	document.querySelector('.header__age_min').style.background = '#65C4FB';
	document.querySelector('.header__age_min').style.color = '#000';
	document.querySelector('.header__age_min').style.border = '3px solid #000';
	document.querySelector('.header__age_min').style.boxShadow = '0 0 0px #000';

	document.querySelector('.header__age_max').style.background = '#000';
	document.querySelector('.header__age_max').style.border = '3px solid #65C4FB';
	document.querySelector('.header__age_max').style.color = '#65C4FB';
	document.querySelector('.header__age_max').style.boxShadow = '0 0 5px #000';

	document.querySelector('.header__text').innerHTML = 'Ознакомим детей с основами робототехники на Arduino. Дети учатся моделировать своих роботов, знакомятся с датчиками, изучают устройство механизмов. Все программы заранее прошиты в материнской плате.';

	document.querySelector('.header__btn').style.marginTop = '50px';

	document.querySelector('.header__button_game').style.background = '#65C4FB';

	document.querySelector('.project').style.background = '#65C4FB';
	document.querySelector('.project__fon-top').src = "img/fon.png";
	document.querySelector('.project__fon-bottom').src = "img/fon_revers.png";
	document.querySelector('.project__image').src = "img/child.png";

	document.querySelector('.finalText').style.color = '#65C4FB';

	//меняю цвет кнопок в minigame
	for (let k = 0; k < button.length; k++) {

		button[k].style.background = '#65C4FB';
	
	}

	document.querySelector('.signUp').style.background = '#65C4FB';
	document.querySelector('.signUp__btn').style.color = '#65C4FB';

	// изменяем цвет точек у списка	
	for (let j = 0; j < liAll.length; j++){

		liAll[j].className = 'program__lesson__plan_row1';

	}

	//изменение цвета у бордера в плане урока
	for (let i = 0; i < borderAll.length; i++){	

		if ( borderAll[i].classList.contains('program__lesson__plan-color1') != true ) {
			
			borderAll[i].classList.remove('program__lesson__plan-color2');
			borderAll[i].classList.add('program__lesson__plan-color1');

		}

	}

	document.querySelector('.support').style.border = '3px solid #65C4FB';
	document.querySelector('.support').style.boxShadow = '0px 0px 5px #65C4FB'

	document.querySelector('.support__btn').style.background = '#65C4FB';
	document.querySelector('.support__btn').style.boxShadow = '0px 0px 2px #65C4FB';

}

//изменение стилей при 10-15 лет
function maxAgeStyle() {

	//блок плана урока и его список и кнопки в минигейм
	let liAll = document.querySelectorAll('li');
	let borderAll = document.querySelectorAll('.program__lesson__plan');
	let button = document.querySelectorAll('.game__controllers__button');


	document.querySelector('.header').style.background = '#A55AE5';
	document.querySelector('.header').style.boxShadow = '0 0 15px #A55AE5';

	document.querySelector('.header__logo_image').src = 'img/bender_purple.png';

	document.querySelector('.header__age_min').style.background = '#000';
	document.querySelector('.header__age_min').style.color = '#A55AE5';
	document.querySelector('.header__age_min').style.border = '3px solid #A55AE5';
	document.querySelector('.header__age_min').style.boxShadow = '0 0 5px #000';

	document.querySelector('.header__age_max').style.background = '#A55AE5';
	document.querySelector('.header__age_max').style.border = '3px solid #000';
	document.querySelector('.header__age_max').style.color = '#000';
	document.querySelector('.header__age_max').style.boxShadow = '0 0 0px #000';

	document.querySelector('.header__text').innerHTML = 'Поможем освоить робототехнику на Arduino. Учащиеся научатся управлять роботами, рисовать схемы, программировать датчики и двигатели.';

	document.querySelector('.header__btn').style.marginTop = '115px';

	document.querySelector('.header__button_game').style.background = '#A55AE5';

	document.querySelector('.project').style.background = '#A55AE5';
	document.querySelector('.project__fon-top').src = "img/fon_purple.png";
	document.querySelector('.project__fon-bottom').src = "img/fon_purple_revers.png";
	document.querySelector('.project__image').src = "img/Teen.png";

	document.querySelector('.finalText').style.color = '#A55AE5';

	//меняю цвет кнопок в minigame
	for (let k = 0; k < button.length; k++) {

		button[k].style.background = '#A55AE5';
	
	}

	document.querySelector('.signUp').style.background = '#A55AE5';
	document.querySelector('.signUp__btn').style.color = '#A55AE5';

	// изменяем цвет точек у списка
	for (let j = 0; j < liAll.length; j++){

		liAll[j].className = 'program__lesson__plan_row2';

	}

	//изменение цвета у бордера в плане урока
	for (let i = 0; i < borderAll.length; i++){	

		if ( borderAll[i].classList.contains('program__lesson__plan-color2') != true ) {
			
			borderAll[i].classList.remove('program__lesson__plan-color1');
			borderAll[i].classList.add('program__lesson__plan-color2');

		}
	}

	document.querySelector('.support').style.border = '3px solid #A55AE5';
	document.querySelector('.support').style.boxShadow = '0px 0px 5px #A55AE5'

	document.querySelector('.support__btn').style.background = '#A55AE5';
	document.querySelector('.support__btn').style.boxShadow = '0px 0px 2px #A55AE5';
	
}


let ageMin = document.querySelector('.header__age_min');
let ageMax = document.querySelector('.header__age_max');

ageMin.onclick = () => {
	minAgePlan();
	minAgeStyle();
}
ageMax.onclick = () => {
	maxAgePlan();
	maxAgeStyle();
}