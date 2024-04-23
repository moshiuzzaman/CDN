
import { CustomUI } from "./CustomUI.js";
import { ReadyTheme } from "./ReadyTheme.js";
export const usedCodeIgniter =
{

    imageURL: "https://www.intelivita.co.uk/_next/static/media/Codeigniter.9fdff3af.svg",
    label: "CodeIgniter",
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