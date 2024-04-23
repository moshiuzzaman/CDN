import { BlogDevelopmentCodeIgniter } from "./BlogDevelopmentCodeIgniter.js";
import { BlogDevelopmentIDontKnow } from "./BlogDevelopmentIDontKnow.js";
import { BlogDevelopmentLaravel } from "./BlogDevelopmentLaravel.js";
import { BlogDevelopmentOther } from "./BlogDevelopmentOther.js";
import { BlogDevelopmentPhp } from "./BlogDevelopmentPhp.js";
import { BlogDevelopmentWordPress } from "./BlogDevelopmentWordPress.js";

export const BlogDevelopment =
{
    imageURL: "https://www.intelivita.co.uk/_next/static/media/BlogDevelopment.c01fe7aa.svg",
    label: "Blog Development",
    children: [
        {
            question: "Which technology would you like to use?",
            questionTitle: "Please specify the platform you would like to choose for your web development solutions.",
            options: [
                BlogDevelopmentPhp,
                BlogDevelopmentLaravel,
                BlogDevelopmentCodeIgniter,
                BlogDevelopmentWordPress,
                BlogDevelopmentIDontKnow,
                BlogDevelopmentOther,
            ]
        }
    ]
}