
export type Entity = Ages | Buildings | Civilisation | Gaia | LandmarksChinese | LandmarksDelhi | LandmarksEnglish | LandmarksFrench | LandmarksRus | Research | Resources | Units;

export enum Ages {
	Feudal = "Feudal Ages"
}

export enum Buildings {
	ArcheryRange = "Archery Range",
	Barracks = "Barracks",
	Farm = "Farm",
	House = "House",
	Lumbercamp = "Lumber Camp",
	Mill = "Mill",
	Miningcamp = "Mining Camp",
	Mosque = "Mosque",
	PalisadeWall = "Palisade Wall",
	Stable = "Stable",
	TownCenter = "Town Center"
}

export enum Civilisation {
	Abbasids = "Abbasid Dynasty",
	Chinese = "Chinese",
	Delhi = "Delhi Sultanate",
	English = "English",
	French = "French",
	Rus = "Rus",
	Hre = "Holy Roman Empire",
	Mongols = "Mongols",
}

export enum Gaia {
	Boar = "Boar",
	Deer = "Deer",
	Sheep = "Sheep"
}

export enum LandmarksChinese {
	Barbicanofthesun = "Barbican of the sun",
	Imperialpalace = "Imperial Palace"
}

export enum LandmarksDelhi {
	DomeOfFaith = "Dome Of Faith",
}

export enum LandmarksEnglish {
	CouncilHall = "Council Hall",
}

export enum LandmarksFrench {
	SchoolOfCavalry = "School Of Cavalry",
}

export enum LandmarksRus {
	Kremlin = "Kremlin",
}

export enum Research {
	Forestry = "Forestry",
	SpecializedPick = "SpecializedPick",
	Survivaltechniques = "Survival Techniques",
	Wheelbarrow = "Wheelbarrow"
}

export enum Resources {
	Berries = "Berries",
	Building = "Building",
	Food = "Food",
	Gold = "Gold",
	Stone = "Stone",
	Wood = "Wood",
}

export enum Units {
	Lancer = "Lancer",
	Longbowman = "Longbowman",
	RoyalKnight = "RoyalKnight",
	Scholar = "Scholar",
	Spearman = "Spearman",
	Villager = "Villager",
}

export function getCivBgImg(civ?: Civilisation): string {
	switch (civ) {
		case Civilisation.Abbasids: return "/backgrounds/abbasids.webp";
		case Civilisation.Chinese: return "/backgrounds/chinese.png";
		case Civilisation.Delhi: return "/backgrounds/delhi.png";
		case Civilisation.English: return "/backgrounds/english.png";
		case Civilisation.French: return "/backgrounds/french.webp";
		case Civilisation.Hre: return "/backgrounds/hre.webp";
		case Civilisation.Mongols: return "/backgrounds/mongols.webp";
		case Civilisation.Rus: return "/backgrounds/rus.png";

		default: return "/backgrounds/chinese.png";
	}
}

export function getCivPatternImg(civ?: Civilisation): string {
	switch (civ) {
		case Civilisation.Abbasids: return "/patterns/abbasids.png";
		case Civilisation.Chinese: return "/patterns/chinese.png";
		case Civilisation.Delhi: return "/patterns/delhi.png";
		case Civilisation.English: return "/patterns/english.png";
		case Civilisation.French: return "/patterns/french.png";
		case Civilisation.Hre: return "/patterns/hre.png";
		case Civilisation.Mongols: return "/patterns/mongols.png";
		case Civilisation.Rus: return "/patterns/rus.png";
	}

	return "/patterns/english.png";
}

export function getCivColor(civ?: Civilisation): string {
	switch (civ) {
		case Civilisation.Chinese: return "rgb(216, 88, 58)";
		case Civilisation.Delhi: return "rgb(44,167,101)";
		case Civilisation.English: return "rgb(217,59,43)";
		case Civilisation.French: return "rgb(49,176,242)";
		case Civilisation.Rus: return "rgb(199,63,50)";
		default: return "rgb(216, 88, 58)";
	}
}

export function getPicImgUrl(entity?: Entity): string {
	switch (entity) {
		case Ages.Feudal: return "/ages/Feudal_Age.png";

		case Buildings.ArcheryRange: return "/buildings/ArcheryRange.png";
		case Buildings.Barracks: return "/buildings/Barracks.png";
		case Buildings.Farm: return "/buildings/Farm.png";
		case Buildings.House: return "/buildings/House.png";
		case Buildings.Lumbercamp: return "/buildings/Lumber_Camp.png";
		case Buildings.Mill: return "/buildings/Mill.png";
		case Buildings.Miningcamp: return "/buildings/Mining_Camp.png";
		case Buildings.Mosque: return "/buildings/Mosque.png";
		case Buildings.Miningcamp: return "/buildings/Mining_Camp.png";
		case Buildings.Stable: return "/buildings/Stable.png";
		case Buildings.TownCenter: return "/buildings/Town_Center.png";

		case Gaia.Boar: return "/gaia/Boar.png";
		case Gaia.Deer: return "/gaia/Deer.png";
		case Gaia.Sheep: return "/gaia/Sheep.png";

		case LandmarksChinese.Barbicanofthesun: return "/landmarks/chinese/Barbicanofthesun.png";
		case LandmarksChinese.Imperialpalace: return "/landmarks/chinese/Imperialpalace.png";

		case LandmarksDelhi.DomeOfFaith: return "/landmarks/delhi/DomeOfFaith.png";

		case LandmarksEnglish.CouncilHall: return "/landmarks/english/CouncilHall.png";

		case LandmarksFrench.SchoolOfCavalry: return "/landmarks/french/SchoolOfCavalry.png";

		case LandmarksRus.Kremlin: return "/landmarks/rus/Kremlin.png";

		case Research.Forestry: return "/research/Forestry.png";
		case Research.SpecializedPick: return "/research/SpecializedPick.png";
		case Research.Survivaltechniques: return "/research/SurvivalTechniques.png";
		case Research.Wheelbarrow: return "/research/Wheelbarrow.png";

		case Resources.Berries: return "/resources/Berry_Bush.png";
		case Resources.Building: return "/resources/Building.png"
		case Resources.Food: return "/resources/Food.png";
		case Resources.Wood: return "/resources/Wood.png";
		case Resources.Stone: return "/resources/Stone.png";
		case Resources.Gold: return "/resources/GoldMine.png";

		case Units.Lancer: return "/units/Lancer.png";
		case Units.Longbowman: return "/units/Longbowman.png";
		case Units.RoyalKnight: return "/units/RoyalKnight.png"
		case Units.Scholar: return "/units/Scholar.png";
		case Units.Spearman: return "/units/Spearman.png"
		case Units.Villager: return "/units/Villager.jpeg";

		default: return "/unknown.png";
	}
}