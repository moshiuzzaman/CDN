export const HowWillYouEarnFromYourApp = {
    question: "How will you earn from the app?",
    questionTitle: "Select at least one.",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/in-app-purchase.abe576a7.svg",
            label: "IN-App Purchase",
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
            label: "Sell Product",
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
            label: "Advertise",
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
            label: "Subscription",
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Paid-App.ac716577.svg",
            label: "Paid App",
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/None-Earn.8002ba98.svg",
            label: "None",
        },
    ],
};

const IsGpsRequired = {
    question: "Is GPS integration required?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
            label: "Yes",
            children: [HowWillYouEarnFromYourApp],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
            label: "NO",
            children: [HowWillYouEarnFromYourApp],
        },
    ],
};

const DoYouRequireAnAdminPanelForManagingTheApp = {
    question: "Do you require an admin panel for managing the app?",
    questionTitle:
        "Will your app need to access data from a website, or use content management systems to manage data from the backend.",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
            label: "Yes",
            children: [IsGpsRequired],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
            label: "NO",
            children: [IsGpsRequired],
        },
    ],
};

export const HowWillUserLogin = {
    question: "What type of login is needed?",
    questionTitle: "How will the users be accessing your mobile application.",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/email.898ac945.svg",
            label: "Email",
            children: [DoYouRequireAnAdminPanelForManagingTheApp],
        },

        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/social-media.e26534f1.svg",
            label: "Social Media",
            children: [DoYouRequireAnAdminPanelForManagingTheApp],
        },

        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/email-social.f07ca974.svg",
            label: "Both",
            children: [DoYouRequireAnAdminPanelForManagingTheApp],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/None-Earn.8002ba98.svg",
            label: "None",
            children: [DoYouRequireAnAdminPanelForManagingTheApp],
        },
    ],
};

const WhatWillTheAppBeUsedFor = {
    question: "What will the app be used for?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/eCommerce.efec4ead.svg",
            label: "eCommerce",
            price:200,
            children: [HowWillUserLogin],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/travel.7f23b252.svg",
            label: "Travel",
            price:200,

            children: [HowWillUserLogin],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/chatting.87815ad5.svg",
            label: "Chatting",
            price:350,

            children: [HowWillUserLogin],
        },
        
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/food-delivery.1efe2f85.svg",
            label: "Food Delivery",
            price:400,

            children: [HowWillUserLogin],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/health.6c486ef4.svg",
            label: "Health & Fitness",
            price:250,
            children: [HowWillUserLogin],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/live-streaming.99a32703.svg",
            label: "Live Streaming",
            price:350,
            children: [HowWillUserLogin],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/social-media.e26534f1.svg",
            label: "Social Media",
            price:400,
            children: [HowWillUserLogin],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/taxi-booking.3270554f.svg",
            label: "Taxi Booking",
            price:450,
            children: [HowWillUserLogin],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/other.a0a5b0cf.svg",
            label: "Other",
            price:450,
            children: [HowWillUserLogin],
        },
    ],
};

const DoYouNeedUsToDesignTheApp = {
    question: "Do you need us to design the app?",
    questionTitle:
        "Designing the app requires producing UI designs on Photoshop, Sketch or Figma. If you already have designs you can share with the team.",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
            label: "Yes",
            price:450,
            children: [WhatWillTheAppBeUsedFor],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
            label: "No",
            children: [WhatWillTheAppBeUsedFor],
        },
    ],
};

export const WhatDeviceWillTheAppBeUsedOn = {
    question: "What device will the app be used on?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/iphone.08dca49c.svg",
            label: "Phone",
            children: [DoYouNeedUsToDesignTheApp],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/ipad.ce5b36ef.svg",
            label: "Tablet",
            children: [DoYouNeedUsToDesignTheApp],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/iphone-ipad.884e9f24.svg",
            label: "Both",
            children: [DoYouNeedUsToDesignTheApp],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/not-sure.43f510ea.svg",
            label: "Not Sure",
            children: [DoYouNeedUsToDesignTheApp],
        },
    ],
};
