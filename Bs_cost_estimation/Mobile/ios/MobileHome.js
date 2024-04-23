import { OldAndroid } from "../Old/Android.js"
import { OldBoth } from "../Old/Both.js"
import { OLDIOS } from "../Old/IOS.js"
import { MobileAndroid } from "./Android.js"
import { MobileBoth } from "./Both.js"
import { MobileIOS } from "./IOS.js"
export const MobileHome =
{
    question: "How would you like to start?",
    questionTitle: "Please specify if your app needs to be built from scratch or do we need to modify an existing build?",
    options: [
        {

            imageURL: "https://www.intelivita.co.uk/_next/static/media/new.53637ee2.svg",
            label: "New",
            children: [
                {
                    question: "What platform do you want the app to be developed on?",
                    options: [
                        {

                            imageURL: "https://www.intelivita.co.uk/_next/static/media/ios.be3e626d.svg",
                            label: "IOS",
                            children: [
                                MobileIOS
                            ]
                        },
                        {


                            imageURL: "https://www.intelivita.co.uk/_next/static/media/android.4c1c0a2f.svg",
                            label: "Android",
                            children: [
                                MobileAndroid
                            ],
                        },
                        {

                            imageURL: "https://www.intelivita.co.uk/_next/static/media/both.95605028.svg ",
                            label: "Both",
                            children: [
                                MobileBoth
                            ],
                        },
                        {

                            imageURL: "https://www.intelivita.co.uk/_next/static/media/not-sure.43f510ea.svg",
                            label: "Not Sure",
                            children: [
                                MobileIOS
                            ],
                        },
                    ],
                },
            ]

        },
        {

            imageURL: "https://www.intelivita.co.uk/_next/static/media/old.c23041cd.svg",
            label: "Old",
            children: [
                {
                    question: "What platform do you want the app to be developed on?",
                    options: [
                        {
                            imageURL: "https://www.intelivita.co.uk/_next/static/media/ios.be3e626d.svg",
                            label: "IOS",
                            children: [
                                OLDIOS
                            ]
                        },
                        {
                            imageURL: "https://www.intelivita.co.uk/_next/static/media/android.4c1c0a2f.svg",
                            label: "Android",
                            children: [
                                OldAndroid
                            ],
                        },
                        {

                            imageURL: "https://www.intelivita.co.uk/_next/static/media/both.95605028.svg ",
                            label: "Both",
                            children: [
                                OldBoth
                            ],
                        },

                    ],
                },
            ]
        }
    ]
}

