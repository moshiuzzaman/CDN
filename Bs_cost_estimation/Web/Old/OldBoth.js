import { OldBothBoth } from "./OldBothBoth.js";
import { OldBothPhone } from "./OldBothPhone.js";
import { OldBothTablet } from "./OldBothTablet.js";

export const OldBoth = {
    imageURL: "https://www.intelivita.co.uk/_next/static/media/both.95605028.svg",
    label: 'Both',
    children: [
        {
            question: "On which device is the app used on?",
            options: [
                OldBothPhone,
                OldBothTablet,
                OldBothBoth,
            ]
        }
    ]
}