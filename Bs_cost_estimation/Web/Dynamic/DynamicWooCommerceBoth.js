import { DynamicWooCommerceBothBoth } from "./DynamicWooCommerceBothBoth.js";
import { DynamicWooCommerceBothPhone } from "./DynamicWooCommerceBothPhone.js";
import { DynamicWooCommerceBothTablet } from "./DynamicWooCommerceBothTablet.js";

export const DynamicWooCommerceBoth = {
    imageURL: "https://www.intelivita.co.uk/_next/static/media/both.95605028.svg",
    label: "Both",
    children: [
        {
            question: "On which device is the app used on?",
            options: [
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/phone.c9b394ba.svg",
                    label: "Phone",
                    children: [
                        DynamicWooCommerceBothPhone
                    ]
                },
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/tablet.884cc382.svg",
                    label: "Tablet",
                    children: [
                        DynamicWooCommerceBothTablet
                    ]
                },
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/phone-tablet.cf3963b4.svg",
                    label: "Both",
                    children: [
                        DynamicWooCommerceBothBoth
                    ]
                },

            ]
        }
    ]
}