import { OldAndroidJava } from "./OldAndroid/OldAndroidJava.js";
import { OldAndroidKotlin } from "./OldAndroid/OldAndroidKotlin.js";
import { Flutter } from "./OldChildren/Flutter.js";
import { Idontknow } from "./OldChildren/Idontknow.js";
import { Ionic } from "./OldChildren/Ionic.js";
import { OldOther } from "./OldChildren/OldOther.js";
import { PhoneGap } from "./OldChildren/PhoneGap.js";
import { ReactNative } from "./OldChildren/React Native.js";
import { Xamarin } from "./OldChildren/Xamarin.js";

export const OldAndroid =
{
    question: "On which device is the app used on?",
    options: [
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/phone.c9b394ba.svg",
            label: "Phone",
            children: [
                {
                    question: "What technology has been used to develop the app?",
                    questionTitle: "Please select a technology which your current app is build.",
                    options: [
                        OldAndroidJava,
                        OldAndroidKotlin,
                        Xamarin,
                        Ionic,
                        PhoneGap,
                        Flutter,
                        ReactNative,
                        Idontknow,
                        OldOther,

                    ]
                }
            ]

        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/tablet.884cc382.svg",
            label: "Tablet",
            children: [
                {
                    question: "What technology has been used to develop the app?",
                    questionTitle: "Please select a technology which your current app is build.",
                    options: [
                        OldAndroidJava,
                        OldAndroidKotlin,
                        Xamarin,
                        Ionic,
                        PhoneGap,
                        Flutter,
                        ReactNative,
                        Idontknow,
                        OldOther,

                    ]
                }
            ]

        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/phone-tablet.cf3963b4.svg",
            label: "Both",
            children: [
                {
                    question: "What technology has been used to develop the app?",
                    questionTitle: "Please select a technology which your current app is build.",
                    options: [
                        OldAndroidJava,
                        OldAndroidKotlin,
                        Xamarin,
                        Ionic,
                        PhoneGap,
                        Flutter,
                        ReactNative,
                        Idontknow,
                        OldOther,

                    ]
                }
            ]

        },


    ]
}