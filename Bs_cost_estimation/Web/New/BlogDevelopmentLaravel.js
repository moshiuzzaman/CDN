import { BlogDevelopmentLaravelCustomUi } from "./BlogDevelopmentLaravelCustomUi.js";
import { BlogDevelopmentLaravelReadyTheme } from "./BlogDevelopmentLaravelReadyTheme.js";

export const BlogDevelopmentLaravel = {
    imageURL: "https://www.intelivita.co.uk/_next/static/media/Laravel.14f0d8d3.svg",
    label: "Laravel",
    children: [
        {
            question: "Design Options?",
            questionTitle: "Would you prefer a ready-made template or do you need a fully customised website completely designed from scratch?",
            options: [
                BlogDevelopmentLaravelReadyTheme,
                BlogDevelopmentLaravelCustomUi,

            ]
        }
    ]
}