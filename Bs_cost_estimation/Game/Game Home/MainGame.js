import { MobileHome } from '../../Mobile/ios/MobileHome.js';
import { WebHome } from '../../Web/WebHome.js';
import { All } from './All.js';
import { Android } from './Android.js';
import { Desktop } from './Desktop.js';
import { Steam } from './Steam.js';
import { Web } from './Web.js';
import { IOS } from './iOS.js';
export const mainGame = [
    {
        question: "What kind of project are you developing? ",
        options: [
            {
                imageURL: "https://www.intelivita.co.uk/_next/static/media/mobile-app.73b787d2.svg",
                label: "Mobile App",
                children: [
                    MobileHome
                ]

            },
            {
                imageURL: "https://www.intelivita.co.uk/_next/static/media/mobile-app.73b787d2.svg",
                label: "Web",
                children: [
                    WebHome
                ]
            },

            {
                imageURL: "https://www.intelivita.co.uk/_next/static/media/game.da246ce4.svg",
                label: "Game",
                children: [
                    {
                        question: "What platform would you like your game developed for?",
                        questionTitle: "What platform would you like your game developed for? ",
                        options: [
                            Android,
                            IOS,
                            Desktop,
                            Web,
                            Steam,
                            All
                        ]
                    }
                ]
            }
        ]
    }
];
