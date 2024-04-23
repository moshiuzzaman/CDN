import { BloogCodeIgniterCustomUi } from "./BloogCodeIgniterCustomUi.js";
import { BloogCodeIgniterReadTheme } from "./BloogCodeIgniterReadTheme.js";

export const BloogCodeIgniter = {
    imageURL: "https://www.intelivita.co.uk/_next/static/media/Codeigniter.9fdff3af.svg",
    label: "CodeIgniter",
    children: [
        {
            question: "Design Options?",
            questionTitle: "Would you prefer a ready-made template or do you need a fully customised website completely designed from scratch?",
            options: [
                BloogCodeIgniterReadTheme,
                BloogCodeIgniterCustomUi
            ]
        }
    ]
}