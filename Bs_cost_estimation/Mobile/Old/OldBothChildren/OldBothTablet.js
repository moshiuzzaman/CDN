import { OldBothTabletAndroid } from "./OldBothTabletAndroid.js";
import { OldBothTabletBoth } from "./OldBothTabletBoth.js";
import { OldBothTabletIos } from "./OldBothTabletIos.js";

export const OldBothTablet = {
    question: "What technology has been used to develop the app?",
    questionTitle: "Please select a technology which your current app is build.",
    options: [
        {

            imageURL: "https://www.intelivita.co.uk/_next/static/media/android.4c1c0a2f.svg",
            label: "Android",
            children: [
                OldBothTabletAndroid
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/ios.be3e626d.svg",
            label: "Ios",
            children: [
                OldBothTabletIos
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/both.95605028.svg ",
            label: "Both",
            children: [
                OldBothTabletBoth
            ]
        },

    ]

}