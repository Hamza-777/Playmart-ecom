import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
    {
        _id: uuid(),
        title: "Among Us",
        imgSrc: "amongus.png",
        category: "rts",
        price: "60",
        stars: 1
    },
    {
        _id: uuid(),
        title: "Cyberpunk",
        imgSrc: "cyberpunk.png",
        category: "actionAdventure",
        price: "1100",
        stars: 4
    },
    {
        _id: uuid(),
        title: "Darkest Dungeon II",
        imgSrc: "darkestdungeon2.png",
        category: "actionAdventure",
        price: "1610",
        stars: 3
    },
    {
        _id: uuid(),
        title: "Dauntless",
        imgSrc: "dauntless.png",
        category: "rts",
        price: "1230",
        stars: 2
    },
    {
        _id: uuid(),
        title: "Dead By Daylight",
        imgSrc: "deadbydaylight.png",
        category: "rts",
        price: "324",
        stars: 3
    },
    {
        _id: uuid(),
        title: "For Honor",
        imgSrc: "forhonour.png",
        category: "actionAdventure",
        price: "1325",
        stars: 4
    },
    {
        _id: uuid(),
        title: "God Of War",
        imgSrc: "GOW.png",
        category: "actionAdventure",
        price: "1210",
        stars: 4
    },
    {
        _id: uuid(),
        title: "GTA V",
        imgSrc: "GTAV.png",
        category: "openWorld",
        price: "1162",
        stars: 4
    },
    {
        _id: uuid(),
        title: "Read Dead Redemption II",
        imgSrc: "reddead2.jpg",
        category: "actionAdventure",
        price: "1092",
        stars: 4
    },
    {
        _id: uuid(),
        title: "Ruined King",
        imgSrc: "ruinedking.png",
        category: "rts",
        price: "750",
        stars: 1
    },
];
