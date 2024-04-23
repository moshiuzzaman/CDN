import { OldBothPhoneBoth } from "./OldBothPhoneBoth.js";
import { OldBothPhoneIos } from "./OldBothPhoneIos.js";
import { OldBothPhoneJava } from "./OldBothPhoneJava.js";

export const OldBothPhone = {
    question: "What technology has been used to develop the app?",
    questionTitle: "Please select a technology which your current app is build.",
    options: [
        {

            imageURL: "https://www.intelivita.co.uk/_next/static/media/android.4c1c0a2f.svg",
            label: "Android",
            children: [
                OldBothPhoneJava
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/ios.be3e626d.svg",
            label: "Ios",
            children: [
                OldBothPhoneIos
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/both.95605028.svg ",
            label: "Both",
            children: [
                OldBothPhoneBoth
            ]
        },

    ]

}