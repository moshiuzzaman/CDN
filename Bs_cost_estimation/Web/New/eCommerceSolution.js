import { BloogCodeIgniter } from "./BloogCodeIgniter.js";
import { BloogIdontKnow } from "./BloogIdontKnow.js";
import { BloogLaravel } from "./BloogLaravel.js";
import { BloogMagento } from "./BloogMagento.js";
import { BloogOther } from "./BloogOther.js";
import { BloogPHP } from "./BloogPHP.js";
import { BloogShopify } from "./BloogShopify.js";
import { BloogWooCommerce } from "./BloogWooCommerce.js";
import { usedCodeIgniter } from "./CodeIgniter.js";
import { usedLaravel } from "./Laravel.js";
import { usedLaravelIdon } from "./LaravelIdon'tknow.js";
import { LaravelOther } from "./LaravelOther.js";
import { usedTechnology } from "./UsedTechnology.js";
import { usedWordpress } from "./Wordpress.js";
export const eCommerceSolution =
{
    question: "What category best describes your web application?",
    options: [
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/eCommerceSolution.5f0f5b06.svg",
            label: "eCommerce Solution",
            children: [
                {
                    question: "Which technology would you like to use?",
                    questionTitle: "Please specify the platform you would like to choose for your web development solutions.",
                    options: [
                        BloogWooCommerce,
                        BloogMagento,
                        BloogShopify,
                        BloogPHP,
                        BloogLaravel,
                        BloogCodeIgniter,
                        BloogIdontKnow,
                        BloogOther
                    ]
                }
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/CustomWeb.82711330.svg",
            label: "Custom Web Development",
            children: [
                {
                    question: "Which technology would you like to use?",
                    questionTitle: "Please specify the platform you would like to choose for your web development solutions.",
                    options: [
                        usedTechnology,
                        usedLaravel,
                        usedCodeIgniter,
                        usedWordpress,
                        usedLaravelIdon,
                        LaravelOther
                    ]
                }
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/PortalDevelopment.9df1b275.svg",
            label: "Portal Development",
            children: [
                {
                    question: "Which technology would you like to use?",
                    questionTitle: "Please specify the platform you would like to choose for your web development solutions.",
                    options: [
                        usedTechnology,
                        usedLaravel,
                        usedCodeIgniter,
                        usedWordpress,
                        usedLaravelIdon,
                        LaravelOther
                    ]
                }
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/BlogDevelopment.c01fe7aa.svg",
            label: "Blog Development",
            children: [
                {
                    question: "Which technology would you like to use?",
                    questionTitle: "Please specify the platform you would like to choose for your web development solutions.",
                    options: [
                        usedTechnology,
                        usedLaravel,
                        usedCodeIgniter,
                        usedWordpress,
                        usedLaravelIdon,
                        LaravelOther
                    ]
                }
            ]
        }

    ]
}