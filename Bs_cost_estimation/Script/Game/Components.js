export const HowWillEarnFromGame = {
    question: "How will you earn from the game?",
    questionTitle: "Select The Last One",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/in-app-purchase.abe576a7.svg",
            label: "IN-App Purchase",
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
            label: "Sell Product",
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
            label: "Advertise",
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
            label: "Subscription",
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Paid-App.ac716577.svg",
            label: "Paid App",
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/None-Earn.8002ba98.svg",
            label: "None",
        },
    ],
};

export const HowWillManageTheGame = {
    question: "How will the user log in to the game?",
    options: [
        {
            label: "Admin Panel",
            price:600,
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/admin-panel.4c91c07a.svg",
            children: [HowWillEarnFromGame],
        },
        {
            label: "Static",
            price:100,
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Static.0eaa91c2.svg",
            children: [HowWillEarnFromGame],
        },
        {
            label: "I don't Know",
            price:450,
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/I-dont-know.f857c8c8.svg",
            children: [HowWillEarnFromGame],
        },
    ],
};

export const HowWillUserLogin = {
    question: "How will the user log in to the game?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/email.898ac945.svg",
            label: "Email",
            children: [HowWillManageTheGame],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/social-media.e26534f1.svg",
            label: "Social Media",
            children: [HowWillManageTheGame],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/email-social.f07ca974.svg ",
            label: "Both",
            children: [HowWillManageTheGame],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/None-Earn.8002ba98.svg",
            label: "None",
            children: [HowWillManageTheGame],
        },
    ],
};

export const WillYouNeedGraphics = {
    question: "Will you need the graphics designed?",
    questionTitle:
        "Please specify if you have graphic ready or if you’d like us to prepare them.",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/graphics-yes.510518ee.svg",
            label: "Yes",
            children: [HowWillUserLogin],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/graphics-no.ef302394.svg",
            label: "No",
            children: [HowWillUserLogin],
        },
    ],
};
export const WhichCategoryBestDefinesYourGame = {
    question: "Which category best defines your game?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Sport.942fc6f2.svg",
            label: "Sport",
            price:300,
            children: [WillYouNeedGraphics],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Shooting.2aa1744c.svg",
            label: "Shooting",
            price:400,
            children: [WillYouNeedGraphics],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Racing.7819b97d.svg",
            label: "Racing",
            price:450,
            children: [WillYouNeedGraphics],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Adventure.b6bf28ec.svg",
            label: "Adventure",
            price:450,
            children: [WillYouNeedGraphics],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Puzzle.0f69d73a.svg",
            label: "Puzzle",
            price:450,
            children: [WillYouNeedGraphics],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Fighting.65347599.svg",
            label: "Fighting",
            price:850,
            children: [WillYouNeedGraphics],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/ActionGame.f005a4b9.svg",
            label: "Action Game",
            price:850,
            children: [WillYouNeedGraphics],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Board.c0df4f21.svg",
            label: "Board",
            price:850,
            children: [WillYouNeedGraphics],
        },

        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Simulator.bedb916d.svg",
            label: "Simulator",
            price:850,
            children: [WillYouNeedGraphics],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/other.a0a5b0cf.svg",
            label: "Other",
            price:1200,
            children: [WillYouNeedGraphics],
        },
    ],
};

export const SingleOrMultiPlayer = {
    question: "What platform would you like your game developed for?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/single-player.48b2a6b3.svg",
            label: "Single",
            children: [WhichCategoryBestDefinesYourGame],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/multiplayer.dd509e0a.svg",
            label: "Multiplayer",
            children: [WhichCategoryBestDefinesYourGame],
        },
    ],
};

export const WhatTypeOfGame = {
    question: "What platform would you like your game developed for?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/2d-game.5f161c9b.svg",
            label: "2D",
            price:1100,
            children: [SingleOrMultiPlayer],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/3d-game.3b3572d0.svg",
            label: "3D",
            price:1950,
            children: [SingleOrMultiPlayer],
        },
    ],
};
