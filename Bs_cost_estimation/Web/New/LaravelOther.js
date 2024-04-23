import { CustomUI } from "./CustomUI.js";
import { ReadyTheme } from "./ReadyTheme.js";
export const LaravelOther =
{

    imageURL: "https://www.intelivita.co.uk/_next/static/media/Others.80984a87.svg",
    label: "Other",
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