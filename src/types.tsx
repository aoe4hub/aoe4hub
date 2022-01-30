import {  Civilisation, Entity } from "./Entities";

export interface Build {
	title?: string;
	steps?: Step[];
	civ?: Civilisation;
	author?: string;
	authorLink?: string;
	afterTips?: string[];
	description?: string;
	pros?: string[];
	cons?: string[];
}

export interface Step {
	popCount?: string;
	subSteps?: SubStep[];
	ecoBalance?: EcoBalance;
}

export interface SubStep {
	title?: string;
	description?: string;
	picture?: Entity;
	thenJobs?: string[];
	hint?: string;
}

export interface EcoBalance {
	food: number;
	wood: number;
	gold: number;
	stone: number;
	building?: number;
}
