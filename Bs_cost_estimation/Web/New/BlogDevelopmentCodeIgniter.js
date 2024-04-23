import { BlogDevelopmentCodeIgniterCustomUI } from "./BlogDevelopmentCodeIgniterCustomUI.js";
import { BlogDevelopmentCodeIgniterReadyTheme } from "./BlogDevelopmentCodeIgniterReadyTheme.js";

export const BlogDevelopmentCodeIgniter = {
    imageURL: "https://www.intelivita.co.uk/_next/static/media/Codeigniter.9fdff3af.svg",
    label: "CodeIgniter",
    children: [
        {
            question: "Design Options?",
            questionTitle: "Would you prefer a ready-made template or do you need a fully customised website completely designed from scratch?",
            options: [
                BlogDevelopmentCodeIgniterReadyTheme,
                BlogDevelopmentCodeIgniterCustomUI,

            ]
        }
    ]
}