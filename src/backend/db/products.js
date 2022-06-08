import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
	{
		_id: uuid(),
		title: "Tiny Tina's Wonderland",
		imgSrc: "tinytinaswonderland.jpg",
		backImg:
			"https://pbs.twimg.com/media/E_Vw-oXVQAIMtGg?format=jpg&name=4096x4096",
		category: ["role-playing", "actionAdventure"],
		price: "3299",
		stars: 4.0,
		description:
			"Bullets, magic, and broadswords collide across this chaotic fantasy world brought to life by the unpredictable Tiny Tina. Roll your own multiclass hero and loot, shoot, slash, and cast your way through outlandish monsters and loot-filled dungeons on a quest to stop the tyrannical Dragon Lord.",
	},
	{
		_id: uuid(),
		title: "Dauntless",
		imgSrc: "dauntless.png",
		backImg: "https://images.alphacoders.com/868/868865.jpg",
		category: ["actionAdventure", "role-playing"],
		price: "1230",
		stars: 2.6,
		description:
			"Dauntless is a massively multiplayer action RPG where you team up with other Slayers to hunt down powerful creatures called Behemoths. Explore the furthest reaches of the Shattered Isles as you quest, craft, and fight to take down increasingly dangerous foes, all while forging your legend as a Slayer of Ramsgate.",
	},
	{
		_id: uuid(),
		title: "Dead By Daylight",
		imgSrc: "deadbydaylight.png",
		backImg: "https://images4.alphacoders.com/721/721397.jpg",
		category: ["survival", "horror"],
		price: "324",
		stars: 1.5,
		description:
			"Inspired by cult classic slasher films, Dead by Daylight™ is a multiplayer (4vs1) horror and action game in which one ruthless Killer hunts down four Survivors trying to evade a gruesome death. Players can experience the thrill of both Killer and Survivor in this deadly game of hide and seek.",
	},
	{
		_id: uuid(),
		title: "For Honor",
		imgSrc: "forhonour.png",
		backImg: "https://images.hdqwalls.com/wallpapers/for-honor-game-4k-fa.jpg",
		category: ["actionAdventure"],
		price: "1325",
		stars: 1.9,
		description:
			"For Honor is a 2017 action video game developed and published by Ubisoft for Microsoft Windows, PlayStation 4, and Xbox One. The game allows players to play the roles of historical forms of soldiers and warriors such as knights, samurai, vikings, controlled using a third-person perspective.",
	},
	{
		_id: uuid(),
		title: "God Of War",
		imgSrc: "GOW.png",
		backImg: "https://wallpapercave.com/wp/wp3282807.jpg",
		category: ["actionAdventure"],
		price: "1210",
		stars: 4.5,
		description:
			"Based in ancient history, the story follows the titular protagonist, Kratos, a Spartan warrior and later the God of War, who was tricked into killing his family by his former master, the original Greek God of war Ares. This sets off a series of events that leads to wars with the pantheons.",
	},
	{
		_id: uuid(),
		title: "Among Us",
		imgSrc: "amongus.png",
		backImg: "https://images5.alphacoders.com/110/1104367.jpg",
		category: ["rts", "party", "actionAdventure"],
		price: "60",
		stars: 2.0,
		description:
			"Among Us is a multiplayer game where 10 players get dropped into an alien spaceship, sky headquarters or planet base, where each player is designated with a private role of either a “crewmate” and an “impostor.” This is an online multiplayer social deduction game, and a player can either be a crewmate or an imposter.",
	},
	{
		_id: uuid(),
		title: "Cyberpunk",
		imgSrc: "cyberpunk.png",
		backImg: "https://wallpaperaccess.com/full/4346504.jpg",
		category: ["actionAdventure", "role-playing"],
		price: "1100",
		stars: 4.1,
		description:
			'Cyberpunk is a subgenre of science fiction in a dystopian futuristic setting that tends to focus on a "combination of lowlife and high tech", featuring futuristic technological and scientific achievements, such as artificial intelligence and cybernetics, juxtaposed with societal collapse or decay.',
	},
	{
		_id: uuid(),
		title: "Darkest Dungeon II",
		imgSrc: "darkestdungeon2.png",
		backImg: "https://images7.alphacoders.com/611/thumb-1920-611159.jpg",
		category: ["role-playing", "rts"],
		price: "1610",
		stars: 3.7,
		description:
			"Darkest Dungeon II is a roguelike road trip of the damned. Form a party, equip your stagecoach, and set off across a decaying landscape in a last gasp attempt to avert the apocalypse. The greatest dangers you face, however, may come from within...",
	},
	{
		_id: uuid(),
		title: "GTA V",
		imgSrc: "GTAV.png",
		backImg: "https://wallpaperaccess.com/full/707055.jpg",
		category: ["openWorld", "actionAdventure"],
		price: "1162",
		stars: 4.2,
		description:
			"Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.",
	},
	{
		_id: uuid(),
		title: "Red Dead Redemption II",
		imgSrc: "reddead2.jpg",
		backImg: "https://images.alphacoders.com/976/976234.png",
		category: ["actionAdventure", "openWorld"],
		price: "1092",
		stars: 3.9,
		description:
			"Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption. The story is set in 1899 and follows the exploits of outlaw Arthur Morgan, a member of the Van der Linde gang, in a fictionalized representation of the Western, Midwestern, and Southern United States. Arthur must deal with the decline of the Wild West whilst attempting to survive against government forces, rival gangs, and other adversaries.",
	},
	{
		_id: uuid(),
		title: "Ruined King",
		imgSrc: "ruinedking.png",
		backImg:
			"https://images.hdqwalls.com/wallpapers/ruined-king-league-of-legends-4k-1c.jpg",
		category: ["rts", "role-playing", "actionAdventure"],
		price: "750",
		stars: 3.1,
		description:
			"Ruined King: A League of Legends Story takes player on the journey of 6 characters on Bilgewater and Shadow Isles, in the world Runeterra of League of Legends canon universe. Bilgewater is a port-city on the Serpent Isles and a town of outlaws. This town welcomes everyone, a good place for a fresh new beginning.",
	},
	{
		_id: uuid(),
		title: "Borderlands 3",
		imgSrc: "borderland3.jpg",
		backImg: "https://images.alphacoders.com/101/1017258.jpg",
		category: ["role-playing", "actionAdventure"],
		price: "747",
		stars: 3.2,
		description:
			"The plot is centered on four new Vault Hunters recruited by the Crimson Raiders of Pandora to stop twins Troy and Tyreen Calypso and their insane cult followers from harnessing the power of the alien Vaults spread across the galaxy.",
	},
	{
		_id: uuid(),
		title: "Blue Fire",
		imgSrc: "bluefire.jpg",
		backImg: "https://images4.alphacoders.com/113/thumb-1920-1131610.jpg",
		category: ["actionAdventure"],
		price: "351",
		stars: 2.5,
		description:
			"Journey through the desolated kingdom of Penumbra and discover the hidden secrets of this long-forgotten land. Explore mystical temples, where you'll need to master the art of movement to survive increasingly difficult 3D platforming challenges.",
	},
	{
		_id: uuid(),
		title: "Far Cry 6",
		imgSrc: "farcry6.jpg",
		backImg: "https://wallpaperaccess.com/full/3618379.jpg",
		category: ["actionAdventure"],
		price: "1499",
		stars: 4.3,
		description:
			"Welcome to Yara, a tropical paradise frozen in time. As the dictator of Yara, Antón Castillo is intent on restoring his nation back to its former glory by any means, with his son, Diego, following in his bloody footsteps. Their oppressive rule has ignited a revolution.",
	},
	{
		_id: uuid(),
		title: "Back 4 Blood",
		imgSrc: "back4blood.jpg",
		backImg: "https://images7.alphacoders.com/116/1166920.jpg",
		category: ["actionAdventure"],
		price: "1499",
		stars: 3.5,
		description:
			"Back 4 Blood is a thrilling cooperative first-person shooter from the creators of the critically acclaimed Left 4 Dead franchise. You are at the center of a war against the Ridden. These once-human hosts of a deadly parasite have turned into terrifying creatures bent on devouring what remains of civilization. With humanity’s extinction on the line, it’s up to you and your friends to take the fight to the enemy, eradicate the Ridden, and reclaim the world.",
	},
];
