import { DynamicWooCommerceAndroidBoth } from "./DynamicWooCommerceAndroidBoth.js";
import { DynamicWooCommerceAndroidPhone } from "./DynamicWooCommerceAndroidPhone.js";
import { DynamicWooCommerceAndroidTablet } from "./DynamicWooCommerceAndroidTablet.js";

export const DynamicWooCommerceAndroid =
{
    imageURL: "https://www.intelivita.co.uk/_next/static/media/android.4c1c0a2f.svg",
    label: "Android",
    children: [
        {
            question: "On which device is the app used on?",
            options: [
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/phone.c9b394ba.svg",
                    label: "Phone",
                    children: [
                        DynamicWooCommerceAndroidPhone
                    ]
                },
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/tablet.884cc382.svg",
                    label: "Tablet",
                    children: [
                        DynamicWooCommerceAndroidTablet
                    ]
                },
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/phone-tablet.cf3963b4.svg",
                    label: "Both",
                    children: [
                        DynamicWooCommerceAndroidBoth
                    ]
                },

            ]
        }
    ]
}