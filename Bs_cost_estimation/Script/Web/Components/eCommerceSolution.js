import {
    WhichTechnologyWouldYouLikeToUseAll,
    WhichTechnologyWouldYouLikeToUseECommerceSolution,
} from "./ComponentsNew.js";

export const eCommerceSolution = {
    question: "What category best describes your web application?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/eCommerceSolution.5f0f5b06.svg",
            label: "eCommerce Solution",
            children: [WhichTechnologyWouldYouLikeToUseECommerceSolution],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/CustomWeb.82711330.svg",
            label: "Custom Web Development",
            price:1800,
            children: [WhichTechnologyWouldYouLikeToUseAll],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/PortalDevelopment.9df1b275.svg",
            label: "Portal Development",
            price:2200, 
            children: [WhichTechnologyWouldYouLikeToUseAll],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/BlogDevelopment.c01fe7aa.svg",
            label: "Blog Development",
            price:750,
            children: [WhichTechnologyWouldYouLikeToUseAll],
        },
    ],
};
