import { BlogDevelopmentPhpCustomUI } from "./BlogDevelopmentPhpCustomUI.js";
import { BlogDevelopmentPhpReadyTheme } from "./BlogDevelopmentPhpReadyTheme.js";

export const BlogDevelopmentPhp = {
    imageURL: "https://www.intelivita.co.uk/_next/static/media/php.0a67efef.svg",
    label: "PHP",
    children: [
        {
            question: "Design Options?",
            questionTitle: "Would you prefer a ready-made template or do you need a fully customised website completely designed from scratch?",
            options: [
                BlogDevelopmentPhpReadyTheme,
                BlogDevelopmentPhpCustomUI,

            ]
        }
    ]
}