import { CustomUI } from "./CustomUI.js";
import { ReadyTheme } from "./ReadyTheme.js";
export const usedTechnology =

{

    imageURL: "https://www.intelivita.co.uk/_next/static/media/php.0a67efef.svg",
    label: "PHP",
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