import { CustomUIAndroid } from "./CustomUIAndroid.js";
import { CustomUIBoth } from "./CustomUIBoth.js";
import { CustomUIIOS } from "./CustomUIIOS.js";

export const ReadyTheme =
{
    imageURL: "https://www.intelivita.co.uk/_next/static/media/ReadyTheme.3e36c85f.svg",
    label: "Ready Theme",
    children: [
        {
            question: "Payment integration required?",
            options: [
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
                    label: "Yes",
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
                                                CustomUIIOS,
                                                CustomUIAndroid,
                                                CustomUIBoth,

                                            ]

                                        }
                                    ]
                                },
                                {
                                    imageURL: "https://www.intelivita.co.uk/_next/static/media/no-mobile-app.cc06883c.svg",
                                    label: "No",
                                },
                            ]
                        }
                    ]
                },
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
                    label: "No",
                    children: [
                        {
                            question: "Do you need a mobile app too?",
                            questionTitle: "Complement your web-solution with a mobile app to reach a wider audience.",
                            options: [
                                {
                                    imageURL: "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
                                    label: "Yes",
                                    children: [
                                        {
                                            question: "For which platform is your app developed?",
                                            options: [
                                                CustomUIIOS,
                                                CustomUIAndroid,
                                                CustomUIBoth,

                                            ]
                                        }
                                    ]
                                },
                                {
                                    imageURL: "https://www.intelivita.co.uk/_next/static/media/no-mobile-app.cc06883c.svg",
                                    label: "No",
                                },
                            ]
                        }
                    ]
                },

            ]
        }
    ]
}