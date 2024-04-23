import { OldAndroidBoth } from "./OldAndroidBoth.js";
import { OldAndroidPhone } from "./OldAndroidPhone.js";
import { OldAndroidTablet } from "./OldAndroidTablet.js";

export const OldAndroid = {
    imageURL: "https://www.intelivita.co.uk/_next/static/media/android.4c1c0a2f.svg",
    label: 'Android',
    children: [
        {
            question: "On which device is the app used on?",
            options: [

                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/iphone.08dca49c.svg",
                    label: "Phone",
                    children: [
                        OldAndroidPhone
                    ]
                },
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/tablet.884cc382.svg",
                    label: "Tablet",
                    children: [
                        OldAndroidTablet
                    ]
                },
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/phone-tablet.cf3963b4.svg",
                    label: "Both",
                    children: [
                        OldAndroidBoth
                    ]

                },
            ]
        }
    ]
}