import { WhatTypeOfGame } from "./Components.js";

export const Game = {
    question: "What platform would you like your game developed for?",
    questionTitle: "What platform would you like your game developed for? ",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/android.4c1c0a2f.svg",
            label: "Android",
            children: [WhatTypeOfGame],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/ios.be3e626d.svg",
            label: "IOS",
            children: [WhatTypeOfGame],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/desktop-game.916f0387.svg",
            label: "Desktop",
            children: [WhatTypeOfGame],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/web.d72abfdc.svg",
            label: "Web",
            children: [WhatTypeOfGame],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Steam.35d23547.svg",
            label: "IOS",
            children: [WhatTypeOfGame],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/all-game-app.efa1655c.svg",
            label: "All",
            children: [WhatTypeOfGame],
        },
    ],
};
