const InputForm = {
    question: "Please provide a brief description of the changes required",
    options: [
        {
            label: "INPUT FORM",
        },
    ],
};

export const WhatWillTheAppBeUsedFor = {
    question: "What will the app be used for?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/eCommerce.efec4ead.svg",
            label: "eCommerce",
            children: [InputForm],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/travel.7f23b252.svg",
            label: "Travel",
            children: [InputForm],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/chatting.87815ad5.svg",
            label: "Chatting",
            children: [InputForm],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/education.2e6e57aa.svg",
            label: "Education",
            children: [InputForm],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/food-delivery.1efe2f85.svg",
            label: "Food Delivery",
            children: [InputForm],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/health.6c486ef4.svg",
            label: "Health & Fitness",
            children: [InputForm],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/live-streaming.99a32703.svg",
            label: "Live Streaming",
            children: [InputForm],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/social-media.e26534f1.svg",
            label: "Social Media",
            children: [InputForm],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/taxi-booking.3270554f.svg",
            label: "Taxi Booking",
            children: [InputForm],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/other.a0a5b0cf.svg",
            label: "Other",
            children: [InputForm],
        },
    ],
};

export const WhichAndroidTechnologyJavaKotlin = {
    question: "Which Android technology has been used ?",
    questionTitle:
        "Please select a technology which your current app is build.",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/java.bd259c9e.svg",
            label: "Java",
            children: [WhatWillTheAppBeUsedFor],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Kotlin.eddfbe53.svg",
            label: "Kotlin",
            children: [WhatWillTheAppBeUsedFor],
        },
    ],
};

export const WhichAndroidTechnologySwiftObjectiveC = {
    question: "Which Android technology has been used ?",
    questionTitle:
        "Please select a technology which your current app is build.",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Swift.8d42904e.svg",
            label: "Swift",
            children: [WhatWillTheAppBeUsedFor],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/ObjectiveC.e945da86.svg",
            label: "Objective C",
            children: [WhatWillTheAppBeUsedFor],
        },
    ],
};

export const WhichAndroidTechnologyAll = {
    question: "Which Android technology has been used ?",
    questionTitle:
        "Please select a technology which your current app is build.",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Xamarin.8d7a6ef4.svg",
            label: "Xamarin",
            children: [WhatWillTheAppBeUsedFor],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Ionic.b24a3252.svg",
            label: "Ionic",
            children: [WhatWillTheAppBeUsedFor],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/PhoneGap.33debaa6.svg",
            label: "PhoneGap",
            children: [WhatWillTheAppBeUsedFor],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Flutter.3fe5fc7e.svg",
            label: "Flutter",
            children: [WhatWillTheAppBeUsedFor],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/React-Native.17424b09.svg",
            label: "React Native",
            children: [WhatWillTheAppBeUsedFor],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/I-dont-know.f857c8c8.svg",
            label: "I don't know",
            children: [WhatWillTheAppBeUsedFor],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/other.a0a5b0cf.svg",
            label: "Other",
            children: [WhatWillTheAppBeUsedFor],
        },
    ],
};

export const WhatTechnologyHasBeenUsedToDevelopTheAppInBoth = {
    question: "What technology has been used to develop the app?",
    questionTitle:
        "Please select a technology which your current app is build.",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/android.4c1c0a2f.svg",
            label: "Android",
            children: [WhichAndroidTechnologyJavaKotlin],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/ios.be3e626d.svg",
            label: "Ios",
            children: [WhichAndroidTechnologySwiftObjectiveC],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/both.95605028.svg ",
            label: "Both",
            children: [WhichAndroidTechnologyAll],
        },
    ],
};

export const WhatTechnologyHasBeenUsedToDevelopTheAppInAndroidAndIos = {
    question: "What technology has been used to develop the app?",
    questionTitle:
        "Please select a technology which your current app is build.",
    options: [
        ...WhichAndroidTechnologyJavaKotlin.options,

        ...WhichAndroidTechnologyAll.options,
    ],
};

export const OnWhichDeviceIsTheAppUsedOnAndroidIos = {
    question: "On which device is the app used on?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/phone.c9b394ba.svg",
            label: "Phone",
            children: [WhatTechnologyHasBeenUsedToDevelopTheAppInAndroidAndIos],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/tablet.884cc382.svg",
            label: "Tablet",
            children: [WhatTechnologyHasBeenUsedToDevelopTheAppInAndroidAndIos],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/phone-tablet.cf3963b4.svg",
            label: "Both",
            children: [WhatTechnologyHasBeenUsedToDevelopTheAppInAndroidAndIos],
        },
    ],
};

export const OnWhichDeviceIsTheAppUsedOnBoth = {
    question: "On which device is the app used on?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/phone.c9b394ba.svg",
            label: "Phone",
            children: [WhatTechnologyHasBeenUsedToDevelopTheAppInBoth],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/tablet.884cc382.svg",
            label: "Tablet",
            children: [WhatTechnologyHasBeenUsedToDevelopTheAppInBoth],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/both.95605028.svg ",
            label: "Both",
            children: [WhatTechnologyHasBeenUsedToDevelopTheAppInBoth],
        },
    ],
};
