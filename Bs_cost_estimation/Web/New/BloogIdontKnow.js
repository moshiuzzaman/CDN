import { BloogIdontKnowCustomUi } from "./BloogIdontKnowCustomUi.js";
import { BloogIdontKnowReadyTheme } from "./BloogIdontKnowReadyTheme.js";

export const BloogIdontKnow = {
    imageURL: "https://www.intelivita.co.uk/_next/static/media/I-dont-know.f857c8c8.svg",
    label: "I don't know",
    children: [
        {
            question: "Design Options?",
            questionTitle: "Would you prefer a ready-made template or do you need a fully customised website completely designed from scratch?",
            options: [
                BloogIdontKnowReadyTheme,
                BloogIdontKnowCustomUi

            ]
        }
    ]
}