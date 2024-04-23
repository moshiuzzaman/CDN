import { CustomUIAndroidBoth } from "./CustomUIAndroidBoth.js";
import { CustomUIAndroidPhone } from "./CustomUIAndroidPhone.js";
import { CustomUIAndroidTablet } from "./CustomUIAndroidTablet.js";

export const CustomUIAndroid =
{
    imageURL: "https://www.intelivita.co.uk/_next/static/media/android.4c1c0a2f.svg",
    label: "Android",
    children: [
        {
            question: "On which device is the app used on?",
            options: [
                CustomUIAndroidPhone,
                CustomUIAndroidTablet,
                CustomUIAndroidBoth


            ]
        }
    ]
}