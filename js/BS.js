/* variables
	shipSide	- размер палубы
	user.field 	- игровое поле пользовател€
	comp.field 	- игровое поле компьютера
	user.fieldX,
	user.fieldY	- координаты игрового пол€ пользовател€
	comp.fieldX,
	comp.fieldY	- координаты игрового пол€ компьютера

	0 - пустое место
	1 - палуба корабл€
	2 - клетка р€дом с кораблЄм
	3 - обстрел€нна€ клетка
	4 - попадание в палубу
	*/

	'use strict';

	function Field(field) {
		this.fieldSide	= 330,
		this.shipSide	= 33,
		this.shipsData	= [
			'',
			[4, 'fourdeck'],
			[3, 'tripledeck'],
			[2, 'doubledeck'],
			[1, 'singledeck']
		],

		this.field		= field;
		this.fieldX		= field.getBoundingClientRect().top + window.pageYOffset;
		this.fieldY		= field.getBoundingClientRect().left + window.pageXOffset;
		this.fieldRight	= this.fieldY + this.fieldSide;
		this.fieldBtm	= this.fieldX + this.fieldSide;
		this.squadron	= [];
	}