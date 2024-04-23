import { CustomUI } from "./CustomUI.js";
import { ReadyTheme } from "./ReadyTheme.js";
export const usedLaravel =
{

    imageURL: "https://www.intelivita.co.uk/_next/static/media/Laravel.14f0d8d3.svg",
    label: "Laravel",
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