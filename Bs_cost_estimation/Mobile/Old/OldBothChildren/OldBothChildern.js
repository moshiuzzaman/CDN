import { OldBothChildernAndroid } from "./OldBothChildernAndroid.js";
import { OldBothChildernBoth } from "./OldBothChildernBoth.js";
import { OldBothChildernIOS } from "./OldBothChildernIOS.js";

export const OldBothChildren = {
    question: "What technology has been used to develop the app?",
    questionTitle: "Please select a technology which your current app is build.",
    options: [
        {

            imageURL: "https://www.intelivita.co.uk/_next/static/media/android.4c1c0a2f.svg",
            label: "Android",
            children: [
                OldBothChildernAndroid
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/ios.be3e626d.svg",
            label: "Ios",
            children: [
                OldBothChildernIOS
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/both.95605028.svg ",
            label: "Both",
            children: [
                OldBothChildernBoth
            ]
        },

    ]

}