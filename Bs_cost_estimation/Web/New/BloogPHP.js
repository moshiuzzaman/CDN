import { BloogPHPCustomUi } from "./BloogPHPCustomUi.js";
import { BloogPHPReadyTheme } from "./BloogPHPReadyTheme.js";

export const BloogPHP = {
    imageURL: "https://www.intelivita.co.uk/_next/static/media/php.0a67efef.svg",
    label: "PHP",
    children: [
        {
            question: "Design Options?",
            questionTitle: "Would you prefer a ready-made template or do you need a fully customised website completely designed from scratch?",
            options: [
                BloogPHPReadyTheme,
                BloogPHPCustomUi,

            ]
        }
    ]
}