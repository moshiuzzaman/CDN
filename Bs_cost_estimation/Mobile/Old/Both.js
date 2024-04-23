import { OldBothChildren } from "./OldBothChildren/OldBothChildern.js";
import { OldBothPhone } from "./OldBothChildren/OldBothPhone.js";
import { OldBothTablet } from "./OldBothChildren/OldBothTablet.js";

export const OldBoth =
{
    question: "On which device is the app used on?",
    options: [
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/phone.c9b394ba.svg",
            label: "Phone",
            children: [
                OldBothPhone
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/tablet.884cc382.svg",
            label: "Tablet",
            children: [
                OldBothTablet
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/both.95605028.svg ",
            label: "Both",
            children: [
                OldBothChildren
            ]
        },
    ]
}