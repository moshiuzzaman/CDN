
import { OnWhichDeviceIsTheAppUsedOnAndroidIos, OnWhichDeviceIsTheAppUsedOnBoth } from "./ComponentsOld.js";

import { WhatDeviceWillTheAppBeUsedOn } from "./ComponentsNew.js";

export const Mobile = {
    question: "How would you like to start?",
    questionTitle:
        "Please specify if your app needs to be built from scratch or do we need to modify an existing build?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/new.53637ee2.svg",
            label: "New",
            children: [
                {
                    question:
                        "What platform do you want the app to be developed on?",
                    options: [
                        {
                            imageURL:
                                "https://www.intelivita.co.uk/_next/static/media/ios.be3e626d.svg",
                            label: "IOS",
                            price:700,
                            children: [WhatDeviceWillTheAppBeUsedOn],
                        },
                        {
                            imageURL:
                                "https://www.intelivita.co.uk/_next/static/media/android.4c1c0a2f.svg",
                            label: "Android",
                            price:250,
                            children: [WhatDeviceWillTheAppBeUsedOn],
                        },
                        {
                            imageURL:
                                "https://www.intelivita.co.uk/_next/static/media/both.95605028.svg ",
                            label: "Both",
                            price:800,
                            children: [WhatDeviceWillTheAppBeUsedOn],
                        },
                        {
                            imageURL:
                                "https://www.intelivita.co.uk/_next/static/media/not-sure.43f510ea.svg",
                            label: "Not Sure",
                            price:700,
                            children: [WhatDeviceWillTheAppBeUsedOn],
                        },
                    ],
                },
            ],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/old.c23041cd.svg",
            label: "Old",
            price:600,
            children: [
                {
                    question:
                        "What platform do you want the app to be developed on?",
                    options: [
                        {
                            imageURL:
                                "https://www.intelivita.co.uk/_next/static/media/ios.be3e626d.svg",
                            label: "IOS",
                            children: [OnWhichDeviceIsTheAppUsedOnAndroidIos],
                        },
                        {
                            imageURL:
                                "https://www.intelivita.co.uk/_next/static/media/android.4c1c0a2f.svg",
                            label: "Android",
                            children: [OnWhichDeviceIsTheAppUsedOnAndroidIos],
                        },
                        {
                            imageURL:
                                "https://www.intelivita.co.uk/_next/static/media/both.95605028.svg ",
                            label: "Both",
                            children: [OnWhichDeviceIsTheAppUsedOnBoth],
                        },
                    ],
                },
            ],
        },
    ],
};
