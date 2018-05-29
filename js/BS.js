/* variables
	shipSide	- ������ ������
	user.field 	- ������� ���� ������������
	comp.field 	- ������� ���� ����������
	user.fieldX,
	user.fieldY	- ���������� �������� ���� ������������
	comp.fieldX,
	comp.fieldY	- ���������� �������� ���� ����������

	0 - ������ �����
	1 - ������ �������
	2 - ������ ����� � �������
	3 - ������������ ������
	4 - ��������� � ������
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