
import { CustomUI } from "./CustomUI.js";
import { ReadyTheme } from "./ReadyTheme.js";
export const usedWordpress =
{

    imageURL: "https://www.intelivita.co.uk/_next/static/media/wordpress.f3aac4cf.svg",
    label: "Wordpress",
    children: [
        {
            question: "Design Options?",
            questionTitle: "Would you prefer a ready-made template or do you need a fully customised website completely designed from scratch?",
            options: [
                ReadyTheme,
                CustomUI
            ]
        }
    ]
}