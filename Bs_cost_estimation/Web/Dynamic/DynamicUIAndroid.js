import { DynamicUIAndroidPhone } from "./DynamicUIAndroidPhone.js";
import { DynamicUIAndroidTBoth } from "./DynamicUIAndroidTBoth.js";
import { DynamicUIAndroidTablet } from "./DynamicUIAndroidTablet.js";

export const DynamicUIAndroid =
{
    imageURL: "https://www.intelivita.co.uk/_next/static/media/android.4c1c0a2f.svg",
    label: "Android",
    children: [
        {
            question: "On which device is the app used on?",
            options: [
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/iphone.08dca49c.svg",
                    label: "Phone",
                    children: [
                        DynamicUIAndroidPhone
                    ]

                },
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/ipad.ce5b36ef.svg",
                    label: "Tablet",
                    children: [
                        DynamicUIAndroidTablet]
                },
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/iphone-ipad.884e9f24.svg",
                    label: "Both",
                    children: [
                        DynamicUIAndroidTBoth
                    ]

                }


            ]
        }
    ]
}