import { Game } from "./Game/Game.js";
import { Mobile,  } from "./Mobile/Mobile.js";
import { Web } from "./Web/Web.js";

export const Json = [
    {
        question: "What kind of project are you developing? ",
        options: [
            {
                imageURL: "https://www.intelivita.co.uk/_next/static/media/mobile-app.73b787d2.svg",
                label: "Mobile App",
                price:2650,
                children: [
                    Mobile
                ]

            },
            {
                imageURL: "https://www.intelivita.co.uk/_next/static/media/mobile-app.73b787d2.svg",
                label: "Web",
                price:2200,
                children: [
                    Web
                ]
            },

            {
                imageURL: "https://www.intelivita.co.uk/_next/static/media/game.da246ce4.svg",
                label: "Game",
                price:4800,
                children: [
                    Game
                ]
            }
        ]
    }
];
