import { Ages, Buildings, Civilisation, Gaia, LandmarksChinese, LandmarksDelhi, LandmarksEnglish, LandmarksFrench, LandmarksRus, Research, Resources, Units } from "./Entities";
import { Build } from "./types";

export const chineseLancers: Build = {
	title: "Chinese Lancer - Fast Castle",
	civ: Civilisation.Chinese,
	author: "Aussie Drongo",
	authorLink: "https://www.youtube.com/channel/UC0IMY7nkVsUimZDMAWWcDsg",
	afterTips: [
		"Use the Imperial Spies ability together with your lancers to raid your enemy.",
		"You can add more stables and a blacksmith, and apply significant pressure to your opponent.",
		"You can build the Imperial Academy, enter the Song Dynasty, and begin booming with 1 TC"
	],
	steps: [
		{
			popCount: "6",
			subSteps: [
				{
					title: "Queue up villagers",
					picture: Units.Villager,
				},
				{
					title: "4 villagers build a house",
					picture: Buildings.House,
					thenJobs: ["Then send to sheep"]
				},
				{
					title: "2 villagers build lumber camp",
					thenJobs: ["Then send to wood"],
					picture: Buildings.Lumbercamp
				}
			]
		},
		{
			popCount: "7",
			subSteps: [
				{
					title: "1 to sheep",
					picture: Gaia.Sheep
				},
			]
		},
		{
			popCount: "8-9",
			subSteps: [
				{
					title: "1 build mining camp",
					thenJobs: ["Then to gold"],
					picture: Buildings.Miningcamp
				},
				{
					title: "2 on gold",
					picture: Resources.Gold
				},
			]
		},
		{
			popCount: "10",
			subSteps: [
				{
					title: "1 to mill deer",
					thenJobs: ["Then to deer"],
					picture: Buildings.Mill
				},
				{
					title: "Research Survival Techniques",
					picture: Research.Survivaltechniques
				},
			]
		},
		{
			popCount: "11-13",
			subSteps: [
				{
					title: "3 to Sheep",
					picture: Gaia.Sheep
				},
			]
		},
		{
			popCount: "14",
			subSteps: [
				{
					title: "1 to mill berries",
					thenJobs: ["Then on gold"],
					picture: Buildings.Mill
				},
			]
		},
		{
			popCount: "15-16",
			subSteps: [
				{
					title: "2 to Sheep",
					picture: Gaia.Sheep
				},
			]
		},
		{
			popCount: "16",
			subSteps: [
				{
					title: "Research Wheelbarrow from mill #2",
					picture: Research.Wheelbarrow
				},
				{
					title: "4 from sheep go to gold",
					picture: Resources.Gold
				},
				{
					title: "6 from sheep go to deer",
					picture: Gaia.Deer
				},
			]
		},
		{
			popCount: "17-19",
			subSteps: [
				{
					title: "3 to deer",
					picture: Gaia.Deer
				},
			]
		},
		{
			popCount: "19",
			subSteps: [
				{
					title: "2 from gold to build landmark (Barbican of the sun) on gold",
					picture: LandmarksChinese.Barbicanofthesun
				},
				{
					title: "Build house with wood villager",
					picture: Buildings.House
				},
			]
		},
		{
			popCount: "20-26",
			subSteps: [
				{
					title: "7 to sheep",
					picture: Gaia.Sheep
				},
			]
		},
		{
			popCount: "26",
			subSteps: [
				{
					title: "2 from landmark to gold",
					picture: Resources.Gold
				},
			]
		},
		{
			popCount: "27",
			subSteps: [
				{
					title: "Drop landmark with 7-9 villagers",
					thenJobs: ["Adjust economy based on landmark villagers"],
					picture: Resources.Gold
				},
				{
					title: "Build stable with wood villager",
					picture: Buildings.Stable
				},
				{
					title: "Begin making Lancers",
					picture: Units.Lancer
				},
			]
		},
	]
};

export const englishLongbowmen: Build = {
	title: "English Longbowmen Rush",
	civ: Civilisation.English,
	author: "Farm Man Official",
	authorLink: "https://www.youtube.com/watch?v=fNIOOK-UlNM",
	afterTips: [
		"Carry on using your longbowmen to harrass your enemy.",
		"If your rush goes well, consider choosing the King's Palace when going up to castle age. If not, The White Tower may be a better defensive choise."
	],
	steps: [
		{
			popCount: "6",
			subSteps: [
				{
					title: "Queue up villagers",
					picture: Units.Villager,
				},
				{
					title: "Send all villagers to sheep",
					picture: Gaia.Sheep,
				}
			]
		},
		{
			popCount: "7",
			subSteps: [
				{
					title: "Build a house",
					picture: Buildings.House,
					thenJobs: ["Then go to sheep"],
				},
			]
		},
		{
			popCount: "8",
			subSteps: [
				{
					title: "Go to sheep",
					picture: Gaia.Sheep,
				},
			]
		},
		{
			popCount: "9-12",
			subSteps: [
				{
					title: "Build a mining camp",
					thenJobs: ["Then to gold"],
					picture: Buildings.Miningcamp
				},
				{
					title: "+3 on gold",
					picture: Resources.Gold
				},
			]
		},
		{
			popCount: "13",
			subSteps: [
				{
					title: "Build a lumber camp",
					thenJobs: ["Then to wood"],
					picture: Buildings.Lumbercamp
				},
			]
		},
		{
			popCount: "13",
			subSteps: [
				{
					title: "Build the Council Hall landmark with your gold miners",
					hint: "You may have to force your villagers to drop off food and gold to afford this.",
					thenJobs: ["Then to wood"],
					picture: LandmarksEnglish.CouncilHall
				},
			]
		},
		{
			popCount: "14-17",
			subSteps: [
				{
					title: "+4 on wood",
					picture: Resources.Wood
				},
			]
		},
		{
			popCount: "18",
			subSteps: [
				{
					title: "Build a house",
					picture: Buildings.House,
					thenJobs: ["Then to wood"]
				},
			]
		},
		{
			subSteps: [
				{
					title: "Start building longbowmen when you have reached feudal.",
					picture: Units.Longbowman
				},
			]
		},
		{
			popCount: "19-22",
			subSteps: [
				{
					title: "+4 on wood",
					picture: Resources.Wood
				},
			]
		},

	]
};

export const delhiStandard: Build = {
	title: "Standard Delhi Opening",
	civ: Civilisation.Delhi,
	author: "FitzBro",
	authorLink: "https://www.youtube.com/watch?v=RStS5SZhOi0",
	afterTips: [
		"Use your army of archers, spearmen and scholars to pressure your opponent.",
	],
	steps: [
		{
			popCount: "6",
			subSteps: [
				{
					title: "4 vills build mill on berries",
					picture: Buildings.Mill,
				},
				{
					title: "1 vill builds a mosque",
					picture: Buildings.Mosque
				},
				{
					title: "1 vill builds a lumber camp",
					picture: Buildings.Lumbercamp,
				},
			]
		},
		{
			popCount: "7",
			subSteps: [
				{
					title: "Build a house",
					picture: Buildings.House,
					thenJobs: ["Then go to berries"],
				},
			]
		},
		{
			subSteps: [
				{
					title: "Research wheelbarrow (mill). forestry (lumber camp) & efficient production (mosque)",
					picture: Research.Wheelbarrow
				},
				{
					title: "Queue all remaining techs",
				},
			]
		},
		{
			popCount: "8",
			subSteps: [
				{
					title: "Go to wood",
					picture: Resources.Wood,
				},
			]
		},
		{
			popCount: "9-11",
			subSteps: [
				{
					title: "+3 to berries",
					picture: Resources.Berries,
				},
			]
		},
		{
			subSteps: [
				{
					title: "Send your wood choppers to build a gold mine",
					picture: Buildings.Miningcamp,
					thenJobs: ["Then go to gold"],
				},
			]
		},
		{
			popCount: "12",
			subSteps: [
				{
					title: "Go to gold",
					picture: Resources.Gold,
				},
			]
		},
		{
			popCount: "13-15",
			subSteps: [
				{
					title: "+3 on wood",
					picture: Resources.Wood,
				},
			]
		},
		{
			popCount: "15",
			subSteps: [
				{
					title: "Build the Dome of Faith landmark with 4 berry vills",
					picture: LandmarksDelhi.DomeOfFaith,
				},
				{
					title: "Send 2 berry vills to wood",
					picture: Resources.Wood,
				}
			]
		},
		{
			popCount: "16",
			subSteps: [
				{
					title: "+1 on wood",
					picture: Resources.Wood,
				},
			]
		},
		{
			popCount: "17",
			subSteps: [
				{
					title: "Build a house",
					picture: Buildings.House,
					thenJobs: ["Then go to wood"],
				},
			]
		},
		{
			popCount: "18",
			subSteps: [
				{
					title: "+1 on wood",
					picture: Resources.Wood,
				},
			]
		},
		{
			popCount: "19",
			subSteps: [
				{
					title: "+1 to sheep",
					picture: Gaia.Sheep,
				},
			]
		},
		{
			subSteps: [
				{
					title: "Use 2 wood villagers to build a baracks",
					picture: Buildings.Barracks,
					thenJobs: ["Then go to wood"],
				},
			]
		},
		{
			subSteps: [
				{
					title: "Continue training villagers splitting them between food and wood",
					picture: Resources.Food,
				},
				{
					title: "Train a few spearmen for early defence",
					picture: Units.Spearman,
					thenJobs: ["Consider a second barracks if you are under pressure"]
				},
			]
		},
		{
			subSteps: [
				{
					title: "Once you go up to fuedal age queue up techs at every building",

				},
				{
					title: "Train scholars continuously at the dome of faith with the waypoint set to your mosque",
					picture: Units.Scholar,
					thenJobs: ["Build a second mosque (and update the waypoint) once the first is full"]
				},
				{
					title: "Build 2 archery ranges and a blacksmith",
					picture: Buildings.ArcheryRange,
					thenJobs: ["Don't forget to queue all blacksmith research each time you age up"]
				},
			]
		},
	]
};

export const frenchKnights: Build = {
	title: "French Royal Knight Opening",
	civ: Civilisation.French,
	author: "FitzBro",
	authorLink: "https://www.youtube.com/watch?v=QdrU0qhDoxI",
	afterTips: [
		"Build up your royal knights and harrass your opponents with them. 2-3 can kill a villager so you can send them out quickly!"
	],
	steps: [
		{
			popCount: "6",
			subSteps: [
				{
					title: "Queue up villagers",
					picture: Units.Villager,
				},
				{
					title: "Send all villagers to sheep",
					picture: Gaia.Sheep,
				}
			]
		},
		{
			popCount: "7",
			subSteps: [
				{
					title: "+1 to sheep",
					picture: Gaia.Sheep,
				},
			]
		},
		{
			popCount: "8",
			subSteps: [
				{
					title: "Build a house",
					picture: Buildings.House,
					thenJobs: ["Build a gold mining camp", "Go to gold"]
				},
			]
		},
		{
			popCount: "9-10",
			subSteps: [
				{
					title: "+2 to gold",
					picture: Resources.Gold,
				},
			]
		},
		{
			popCount: "11",
			subSteps: [
				{
					title: "+1 to sheep",
					picture: Gaia.Sheep,
				},
			]
		},
		{
			popCount: "12",
			subSteps: [
				{
					title: "Build a lumber camp",
					thenJobs: ["Then to wood"],
					picture: Buildings.Lumbercamp
				},
			]
		},
		{
			popCount: "13-14",
			subSteps: [
				{
					title: "+2 to wood",
					picture: Resources.Wood,
				},
			]
		},
		{
			subSteps: [
				{
					title: "Use 2 food vills to build the School Of Cavalry landmark (2:30)",
					picture: LandmarksFrench.SchoolOfCavalry
				},
			]
		},
		{
			popCount: "15",
			subSteps: [
				{
					title: "Send to landmark",
					picture: LandmarksFrench.SchoolOfCavalry
				},
			]
		},
		{
			popCount: "16-17",
			subSteps: [
				{
					title: "+2 to sheep",
					picture: Gaia.Sheep,
				},
			]
		},
		{
			subSteps: [
				{
					title: "Use a gold vill to build a house",
					picture: Buildings.House,
				},
			]
		},
		{
			popCount: "18",
			subSteps: [
				{
					title: "+1 to gold",
					picture: Resources.Gold,
				},
			]
		},
		{
			popCount: "19-21",
			subSteps: [
				{
					title: "+3 to food",
					picture: Resources.Food,
				},
			]
		},
		{
			popCount: "22",
			subSteps: [
				{
					title: "Build a house",
					picture: Buildings.House,
				},
			]
		},
		{
			subSteps: [
				{
					title: "Landmark builders to gold. (tot 7)",
					picture: Resources.Gold,
				},
			]
		},
		{
			subSteps: [
				{
					title: "Start training royal knights",
					picture: Units.RoyalKnight
				},
				{
					title: "Research forestry and specialized pick",
					picture: Research.Forestry
				},
			]
		},
	]
};

export const rusTC: Build = {
	title: "Rus Speedy 2nd Town Center",
	civ: Civilisation.Rus,
	author: "fiftyfivecats",
	authorLink: "https://old.reddit.com/r/aoe4/comments/qk58pq/perfect_rus_5m_start_second_town_hall_done_before/",
	description: "Out-produce your opponents by dropping a 2nd town centre at 5:35.",
	cons: [
		"This build only gives you 1 scout meaning other player may deny deer."
	],
	afterTips: [
		"Wall up using palisade walls.",
		"Use your 2 towncentres to boom and out produce your opponent.",
		"Continue using your scout to collect bounty.",
	],
	steps: [
		{
			popCount: "6",
			subSteps: [
				{
					title: "Queue up villagers",
					picture: Units.Villager,
				},
				{
					title: "Send all villagers to sheep",
					picture: Gaia.Sheep,
				},
				{
					title: "Use your scout to find sheep and hunt deer",
					picture: Gaia.Deer,
					hint: "This will collect gold for the landmark & bounty for the Rus' unique mechanic."
				}
			]
		},
		{
			popCount: "7-8",
			subSteps: [
				{
					title: "+2 to sheep",
					picture: Gaia.Sheep,
				},
			]
		},
		{
			popCount: "9",
			subSteps: [
				{
					title: "Build a house",
					picture: Buildings.House,
					thenJobs: ["Then build a lumber camp", "Then go to wood"],
				},
			]
		},
		{
			popCount: "10-11",
			subSteps: [
				{
					title: "+2 to sheep",
					picture: Gaia.Sheep,
				},
			]
		},
		{
			popCount: "12",
			subSteps: [
				{
					title: "Buld the Kremlin landmark",
					hint: "This relies on the gold gathered by your scout hunting deer / boar.",
					picture: LandmarksRus.Kremlin,
				},
				{
					title: "Send 1 sheep villager to help with the landmark",
					picture: LandmarksRus.Kremlin,
				},
				{
					title: "Send 4 sheep villagers to build a stone mine",
					picture: Buildings.Miningcamp,
				},
				{
					title: "Send 2 sheep villagers to wood",
					picture: Resources.Wood,
				},
			],
			ecoBalance: {
				food: 3,
				wood: 3,
				gold: 0,
				stone: 4,
				building: 2
			}
		},
		{
			popCount: "14",
			subSteps: [
				{
					title: "+1 to wood",
					picture: Resources.Wood,
				},
			]
		},
		{
			popCount: "15-16",
			subSteps: [
				{
					title: "+2 to stone",
					picture: Resources.Stone,
				},
			]
		},
		{
			popCount: "17-18",
			subSteps: [
				{
					title: "+2 to wood",
					picture: Resources.Wood,
				},
			]
		},
		{
			subSteps: [
				{
					title: "When the landmark has completed (4:30), use your stoneminers to drop a town centre by a gold deposit",
					picture: Buildings.TownCenter,
					hint: "Your 2nd TC should go up by about 5:25"
				},
				{
					title: "Send your landmark builders to food",
					picture: Resources.Food
				},
			]
		},
		{
			popCount: "19",
			subSteps: [
				{
					title: "Build a house",
					picture: Buildings.House,
					thenJobs: ["Then go to food"]
				},
			]
		},
		{
			popCount: "20-35",
			subSteps: [
				{
					title: "Put your next 15 vills mostly on food with a few on wood",
					picture: Resources.Food,
				},
			]
		},
	]
};
