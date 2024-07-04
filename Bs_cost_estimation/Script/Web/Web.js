import { eCommerceSolution } from "./Components/eCommerceSolution.js";

import { WhatCategoryBestDescribesYourWebApplication } from "./Components/ComponentsDynamic.js";
import {
    InWhichTechnologyWasYourWebsiteDeveloped,
    WhichTechnologyWouldYouLikeToUseStatic,
} from "./Components/ComponentsOld.js";

export const Web = {
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
                    question: "What type of web solution do you need?",
                    questionTitle:
                        "Please select a category that describes your web application development.",
                    options: [
                        {
                            imageURL:
                                "https://www.intelivita.co.uk/_next/static/media/Dynamic.e9273ee5.svg",
                            label: "Dynamic",
                            children: [eCommerceSolution],
                        },
                        {
                            imageURL:
                                "https://www.intelivita.co.uk/_next/static/media/Static.0eaa91c2.svg",
                            label: "Static",
                            price:400,
                            children: [WhichTechnologyWouldYouLikeToUseStatic],
                        },
                        {
                            imageURL:
                                "https://www.intelivita.co.uk/_next/static/media/I-dont-know.f857c8c8.svg",
                            label: "I don't know",
                            children: [eCommerceSolution],
                        },
                    ],
                },
            ],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/old.c23041cd.svg",
            label: "Old",
            price:850,
            children: [
                {
                    question: "What type of web solution do you need?",
                    questionTitle:
                        "Please select a category that describes your web application development.",
                    options: [
                        {
                            imageURL:
                                "https://www.intelivita.co.uk/_next/static/media/Dynamic.e9273ee5.svg",
                            label: "Dynamic",
                            children: [
                                WhatCategoryBestDescribesYourWebApplication,
                            ],
                        },
                        {
                            imageURL:
                                "https://www.intelivita.co.uk/_next/static/media/Static.0eaa91c2.svg",
                            label: "Static",
                            children: [
                                InWhichTechnologyWasYourWebsiteDeveloped,
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
