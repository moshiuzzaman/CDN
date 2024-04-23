import { OldAndroid } from "./OldAndroid.js";
import { OldBoth } from "./OldBoth.js";
import { OldIos } from "./OldIos.js";

export const OldOther = {
    imageURL: "https://www.intelivita.co.uk/_next/static/media/Others.80984a87.svg",
    label: "Other",
    children: [
        {
            question: "Do you need design changes?",
            options: [
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
                    label: "Yes",
                    children: [
                        {
                            question: "Please provide a brief description of the changes required ",
                            questionTitle: "Text Box",
                            options: [
                                {
                                    label: "Skip",
                                    children: [
                                        {
                                            question: "Do you need a mobile app too?",
                                            questionTitle: "Complement your web-solution with a mobile app to reach a wider audience.",
                                            options: [
                                                {
                                                    imageURL: "https://www.intelivita.co.uk/_next/static/media/yes-mobile-app.ca57c1d1.svg",
                                                    label: "Yes",
                                                    children: [
                                                        {
                                                            question: "For which platform is your app developed?",
                                                            options: [
                                                                OldIos,
                                                                OldAndroid,
                                                                OldBoth
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    imageURL: "https://www.intelivita.co.uk/_next/static/media/no-mobile-app.cc06883c.svg",
                                                    label: "Subscription"
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]

                },
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
                    label: "No",
                    children: [
                        {
                            question: "Please provide a brief description of the changes required ",
                            options: [
                                {
                                    label: "Skip",
                                    children: [
                                        {
                                            question: "Do you need a mobile app too?",
                                            questionTitle: "Complement your web-solution with a mobile app to reach a wider audience.",
                                            options: [
                                                {
                                                    imageURL: "https://www.intelivita.co.uk/_next/static/media/yes-mobile-app.ca57c1d1.svg",
                                                    label: "Yes",
                                                    children: [
                                                        {
                                                            question: "For which platform is your app developed?",
                                                            options: [
                                                                OldIos,
                                                                OldAndroid,
                                                                OldBoth
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    imageURL: "https://www.intelivita.co.uk/_next/static/media/no-mobile-app.cc06883c.svg",
                                                    label: "No"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },

            ]

        }
    ]
}