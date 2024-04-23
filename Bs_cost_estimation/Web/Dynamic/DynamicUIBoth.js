import { DynamicUIBothBoth } from "./DynamicUIBothBoth.js";
import { DynamicUIBothPhone } from "./DynamicUIBothPhone.js";
import { DynamicUIBothTablet } from "./DynamicUIBothTablet.js";

export const DynamicUIBoth =
{
    imageURL: "https://www.intelivita.co.uk/_next/static/media/both.95605028.svg",
    label: "Both",
    children: [
        {
            question: "On which device is the app used on?",
            options: [
                DynamicUIBothPhone,
                DynamicUIBothTablet,
                DynamicUIBothBoth
            ]
        }
    ]
}