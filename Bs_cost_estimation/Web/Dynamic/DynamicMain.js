import { DynamicCodeIgniter, DynamicLaravel, DynamicMagento, DynamicOther, DynamicPHP, DynamicShopify, DynamicWooCommerce, DynamicWordpress } from "./DynamicWooCommerce.js";
import { CodeigniterMain, LaravelMain, OtherMain, PHPMain, WordpressrMain, dontKnowMain } from "./PHPMain.js";

export const DynamicMain =
{
    question: "What category best describes your web application?",
    questionTitle: "Please specify the platform you would like to choose for your web development solutions.",
    options: [
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/eCommerce.efec4ead.svg",
            label: "eCommerce",
            children: [
                {
                    question: "What category best describes your web application?                    ",
                    questionTitle: "Please specify the platform you would like to choose for your web development solutions.",
                    options: [
                        DynamicWooCommerce,
                        DynamicMagento,
                        DynamicShopify,
                        DynamicPHP,
                        DynamicLaravel,
                        DynamicCodeIgniter,
                        DynamicWordpress,
                        DynamicOther
                    ]
                }
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/Laravel.14f0d8d3.svg",
            label: "CMS Application",
            children: [
                {
                    question: "What category best describes your web application?                    ",
                    questionTitle: "Please specify the platform you would like to choose for your web development solutions.",
                    options: [
                        PHPMain,
                        LaravelMain,
                        CodeigniterMain,
                        WordpressrMain,
                        OtherMain,
                        dontKnowMain
                    ]
                }
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/CustomWeb.82711330.svg",
            label: "Custom Web Solution",
            children: [
                {
                    question: "What category best describes your web application?                    ",
                    questionTitle: "Please specify the platform you would like to choose for your web development solutions.",
                    options: [
                        PHPMain,
                        LaravelMain,
                        CodeigniterMain,
                        WordpressrMain,
                        OtherMain,
                        dontKnowMain
                    ]
                }
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/PortalDevelopment.9df1b275.svg",
            label: "Online Portal",
            children: [
                {
                    question: "What category best describes your web application?                    ",
                    questionTitle: "Please specify the platform you would like to choose for your web development solutions.",
                    options: [
                        PHPMain,
                        LaravelMain,
                        CodeigniterMain,
                        WordpressrMain,
                        OtherMain,
                        dontKnowMain
                    ]
                }
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/BlogDevelopment.c01fe7aa.svg",
            label: "Blog",
            children: [
                {
                    question: "What category best describes your web application?                    ",
                    questionTitle: "Please specify the platform you would like to choose for your web development solutions.",
                    options: [
                        PHPMain,
                        LaravelMain,
                        CodeigniterMain,
                        WordpressrMain,
                        OtherMain,
                        dontKnowMain
                    ]
                }
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/education.2e6e57aa.svg",
            label: "Educational Application",
            children: [
                {
                    question: "What category best describes your web application?                    ",
                    questionTitle: "Please specify the platform you would like to choose for your web development solutions.",
                    options: [
                        PHPMain,
                        LaravelMain,
                        CodeigniterMain,
                        WordpressrMain,
                        OtherMain,
                        dontKnowMain
                    ]
                }
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/social-web.675a69ec.svg",
            label: "Social Media",
            children: [
                {
                    question: "What category best describes your web application?                    ",
                    questionTitle: "Please specify the platform you would like to choose for your web development solutions.",
                    options: [
                        PHPMain,
                        LaravelMain,
                        CodeigniterMain,
                        WordpressrMain,
                        OtherMain,
                        dontKnowMain
                    ]
                }
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/Others.80984a87.svg",
            label: "Other",
            children: [
                {
                    question: "What category best describes your web application?                    ",
                    questionTitle: "Please specify the platform you would like to choose for your web development solutions.",
                    options: [
                        PHPMain,
                        LaravelMain,
                        CodeigniterMain,
                        WordpressrMain,
                        OtherMain,
                        dontKnowMain
                    ]
                }
            ]
        }

    ]
}
