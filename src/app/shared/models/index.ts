export interface IAliens {
	type: string,
	submitted_by:string,
	id: number,
	description: string
}

export interface IOccupation{
	name: string,
	id: number,
	description: string
}

export interface IEncounter{
	id: number,
	atype:string,
	date:string,
	colonist_id:number,
	action:string
}

export interface IColonist{
	name:string,
	age: number,
	id: string
}


export class Encounter{
	constructor(
		public atype: string,
		public date: string,
		public action: string,
		public colonist_id: number
	){}
}

export class Colonist{
	constructor(
		public name: string,
		public age: number,
		public job_id: string
	){}
}
