import { Sport } from '../Game Children/Sport.js';
export const Steam =
{

    imageURL: "https://www.intelivita.co.uk/_next/static/media/Steam.35d23547.svg",
    label: "IOS",
    children: [
        {
            question: "What platform would you like your game developed for?",
            options: [
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/2d-game.5f161c9b.svg",
                    label: "2D",
                    children: [
                        {
                            question: "What platform would you like your game developed for?",
                            options: [
                                {
                                    imageURL: "https://www.intelivita.co.uk/_next/static/media/single-player.48b2a6b3.svg",
                                    label: "Single",
                                    children: [
                                        Sport
                                    ]

                                },
                                {
                                    imageURL: "https://www.intelivita.co.uk/_next/static/media/multiplayer.dd509e0a.svg",
                                    label: "Multiplayer",
                                    children: [
                                        Sport
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/3d-game.3b3572d0.svg",
                    label: "3D",
                    children: [
                        {
                            question: "What platform would you like your game developed for?",
                            options: [
                                {
                                    imageURL: "https://www.intelivita.co.uk/_next/static/media/single-player.48b2a6b3.svg",
                                    label: "Single",
                                    children: [
                                        Sport
                                    ]

                                },
                                {
                                    imageURL: "https://www.intelivita.co.uk/_next/static/media/multiplayer.dd509e0a.svg",
                                    label: "Multiplayer",
                                    children: [
                                        Sport
                                    ]
                                }
                            ]
                        }
                    ]
                }

            ]
        }
    ]
}
