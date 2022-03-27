import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
    {
        _id: uuid(),
        title: "Dauntless",
        imgSrc: "dauntless.png",
        category: ["actionAdventure", "role-playing"],
        price: "1230",
        stars: 2.6
    },
    {
        _id: uuid(),
        title: "Dead By Daylight",
        imgSrc: "deadbydaylight.png",
        category: ["survival", 'horror'],
        price: "324",
        stars: 1.5
    },
    {
        _id: uuid(),
        title: "For Honor",
        imgSrc: "forhonour.png",
        category: ["actionAdventure"],
        price: "1325",
        stars: 1.9
    },
    {
        _id: uuid(),
        title: "God Of War",
        imgSrc: "GOW.png",
        category: ["actionAdventure"],
        price: "1210",
        stars: 4.5
    },
    {
        _id: uuid(),
        title: "Among Us",
        imgSrc: "amongus.png",
        category: ["rts", "party", "actionAdventure"],
        price: "60",
        stars: 2.0
    },
    {
        _id: uuid(),
        title: "Cyberpunk",
        imgSrc: "cyberpunk.png",
        category: ["actionAdventure", "role-playing"],
        price: "1100",
        stars: 4.1
    },
    {
        _id: uuid(),
        title: "Darkest Dungeon II",
        imgSrc: "darkestdungeon2.png",
        category: ["role-playing", "rts"],
        price: "1610",
        stars: 3.7
    },
    {
        _id: uuid(),
        title: "GTA V",
        imgSrc: "GTAV.png",
        category: ["openWorld", "actionAdventure"],
        price: "1162",
        stars: 4.2
    },
    {
        _id: uuid(),
        title: "Red Dead Redemption II",
        imgSrc: "reddead2.jpg",
        category: ["actionAdventure", "openWorld"],
        price: "1092",
        stars: 3.9
    },
    {
        _id: uuid(),
        title: "Ruined King",
        imgSrc: "ruinedking.png",
        category: ["rts", "role-playing", "actionAdventure"],
        price: "750",
        stars: 3.1
    },
    {
        _id: uuid(),
        title: "Borderlands 3",
        imgSrc: "borderland3.jpg",
        category: ["role-playing", "actionAdventure"],
        price: "747",
        stars: 3.2
    },
    {
        _id: uuid(),
        title: "Blue Fire",
        imgSrc: "bluefire.jpg",
        category: ["actionAdventure"],
        price: "351",
        stars: 2.5
    },
    {
        _id: uuid(),
        title: "Far Cry 6",
        imgSrc: "farcry6.jpg",
        category: ["actionAdventure"],
        price: "1499",
        stars: 4.3
    },
    {
        _id: uuid(),
        title: "Back 4 Blood",
        imgSrc: "back4blood.jpg",
        category: ["actionAdventure"],
        price: "1499",
        stars: 3.5
    },
    {
        _id: uuid(),
        title: "Tiny Tina's Wonderland",
        imgSrc: "tinytinaswonderland.jpg",
        category: ["role-playing", "actionAdventure"],
        price: "3299",
        stars: 4.0
    },
];
