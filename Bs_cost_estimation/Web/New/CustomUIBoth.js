import { CustomUIBothBoth } from "./CustomUIBothBoth.js";
import { CustomUIBothPhone } from "./CustomUIBothPhone.js";
import { CustomUIBothTablet } from "./CustomUIBothTablet.js";

export const CustomUIBoth =

{
    imageURL: "https://www.intelivita.co.uk/_next/static/media/both.95605028.svg",
    label: "Both",
    children: [
        {
            question: "On which device is the app used on?",
            options: [
                CustomUIBothPhone,
                CustomUIBothTablet,
                CustomUIBothBoth
            ]
        }
    ]
}