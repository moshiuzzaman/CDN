export const HowWillYouMakeMoneyFromYourWebsite = {
    question: "How will you make money from your website ?",
    questionTitle: "Select The Last One",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
            label: "Sell Products",
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
    ],
};

export const DoYouNeedAChatingFeature = {
    question: "Do you need a chatting feature?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
            label: "Yes",
            children: [HowWillYouMakeMoneyFromYourWebsite],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
            label: "No",
            children: [HowWillYouMakeMoneyFromYourWebsite],
        },
    ],
};

export const IsGpsTrackingRequired = {
    question: "Is GPS integration required?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
            label: "Yes",
            children: [DoYouNeedAChatingFeature],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
            label: "No",
            children: [DoYouNeedAChatingFeature],
        },
    ],
};

export const DoYouNeedToDesignTheApp = {
    question: "Do you need us to design the app?",
    questionTitle:
        "Designing the app requires producing UI designs on Photoshop, Sketch or Figma. If you already have designs you can share with the team.",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
            label: "Yes",
            children: [IsGpsTrackingRequired],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
            label: "No",
            children: [IsGpsTrackingRequired],
        },
    ],
};

export const WhatKindOfAppDoYouWantToDevelop = {
    question: "What kind of app do you want to develop ?  ",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/eCommerce.efec4ead.svg",
            label: "eCommerce",
            children: [DoYouNeedToDesignTheApp],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/travel.7f23b252.svg",
            label: "Travel",
            children: [DoYouNeedToDesignTheApp],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/chatting.87815ad5.svg",
            label: "Chatting",
            children: [DoYouNeedToDesignTheApp],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/education.2e6e57aa.svg",
            label: "Education",
            children: [DoYouNeedToDesignTheApp],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/food-delivery.1efe2f85.svg",
            label: "Food Delivery",
            children: [DoYouNeedToDesignTheApp],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/health.6c486ef4.svg",
            label: "Health & Fitness",
            children: [DoYouNeedToDesignTheApp],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/live-streaming.99a32703.svg",
            label: "Live Streaming",
            children: [DoYouNeedToDesignTheApp],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/social-media.e26534f1.svg",
            label: "Social Media",
            children: [DoYouNeedToDesignTheApp],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/taxi-booking.3270554f.svg",
            label: "Taxi Booking",
            children: [DoYouNeedToDesignTheApp],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Others.80984a87.svg",
            label: "Others",
            children: [DoYouNeedToDesignTheApp],
        },
    ],
};

export const OnWhichDeviceIsTheAppUsedOnAndroidBoth = {
    question: "On which device is the app used on?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/iphone.08dca49c.svg",
            label: "Phone",
            children: [WhatKindOfAppDoYouWantToDevelop],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/ipad.ce5b36ef.svg",
            label: "Tablet",
            children: [WhatKindOfAppDoYouWantToDevelop],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/iphone-ipad.884e9f24.svg",
            label: "Both",
            children: [WhatKindOfAppDoYouWantToDevelop],
        },
    ],
};

export const OnWhichDeviceIsTheAppUsedOnIphone = {
    question: "On which device is the app used on?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/iphone.08dca49c.svg",
            label: "iPhone",
            children: [WhatKindOfAppDoYouWantToDevelop],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/ipad.ce5b36ef.svg",
            label: "iPad",
            children: [WhatKindOfAppDoYouWantToDevelop],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/iphone-ipad.884e9f24.svg",
            label: "Both",
            children: [WhatKindOfAppDoYouWantToDevelop],
        },
    ],
};

export const ForWhichPlatformIsYourAppDeveloped = {
    question: "For which platform is your app developed?",

    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/ios.be3e626d.svg",
            label: "iOS",
            children: [OnWhichDeviceIsTheAppUsedOnIphone],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/android.4c1c0a2f.svg",
            label: "Android",
            children: [OnWhichDeviceIsTheAppUsedOnAndroidBoth],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/both.95605028.svg",
            label: "Both",
            children: [OnWhichDeviceIsTheAppUsedOnAndroidBoth],
        },
    ],
};

export const DoYouNeedAMobileAppToo = {
    question: "Do you need a mobile app too?",
    questionTitle:
        "Complement your web-solution with a mobile app to reach a wider audience.",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/yes-mobile-app.ca57c1d1.svg",
            label: "Yes",
            children: [ForWhichPlatformIsYourAppDeveloped],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/no-mobile-app.cc06883c.svg",
            label: "No",
        },
    ],
};

export const DoYouNeedDesignChanges = {
    question: "Do you need design changes? ",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
            label: "Yes",
            children: [DoYouNeedAMobileAppToo],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
            label: "No",
            children: [DoYouNeedAMobileAppToo],
        },
    ],
};

export const WhatCategoryBestDescribesYourWebApplicationECommerce = {
    question:
        "What category best describes your web application?                    ",
    questionTitle:
        "Please specify the platform you would like to choose for your web development solutions.",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/WooCommerce.4df5528b.svg",
            label: "WooCommerce",
            children: [DoYouNeedDesignChanges],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Magento.75c1e03b.svg",
            label: "Magento",
            children: [DoYouNeedDesignChanges],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Shopify.f8dc1c23.svg",
            label: "Shopify",
            children: [DoYouNeedDesignChanges],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/php.0a67efef.svg",
            label: "PHP",
            children: [DoYouNeedDesignChanges],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Laravel.14f0d8d3.svg",
            label: "Laravel",
            children: [DoYouNeedDesignChanges],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Codeigniter.9fdff3af.svg",
            label: "CodeIgniter",
            children: [DoYouNeedDesignChanges],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Wordpress.f3aac4cf.svg",
            label: "Wordpress",
            children: [DoYouNeedDesignChanges],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Others.80984a87.svg",
            label: "Other",
            children: [DoYouNeedDesignChanges],
        },
    ],
};

export const WhatCategoryBestDescribesYourWebApplicationAll = {
    question:
        "What category best describes your web application?                    ",
    questionTitle:
        "Please specify the platform you would like to choose for your web development solutions.",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/php.0a67efef.svg",
            label: "PHP",
            children: [DoYouNeedDesignChanges],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Laravel.14f0d8d3.svg",
            label: "Laravel",
            children: [DoYouNeedDesignChanges],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Codeigniter.9fdff3af.svg",
            label: "Codeigniter",
            children: [DoYouNeedDesignChanges],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/wordpress.f3aac4cf.svg",
            label: "Wordpress",
            children: [DoYouNeedDesignChanges],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Others.80984a87.svg",
            label: "Others",
            children: [DoYouNeedDesignChanges],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Others.80984a87.svg",
            label: "I don't Know",
            children: [DoYouNeedDesignChanges],
        },
    ],
};

export const WhatCategoryBestDescribesYourWebApplication = {
    question: "What category best describes your web application?",
    questionTitle:
        "Please specify the platform you would like to choose for your web development solutions.",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/eCommerce.efec4ead.svg",
            label: "eCommerce",
            children: [WhatCategoryBestDescribesYourWebApplicationECommerce],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Laravel.14f0d8d3.svg",
            label: "CMS Application",
            children: [WhatCategoryBestDescribesYourWebApplicationAll],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/CustomWeb.82711330.svg",
            label: "Custom Web Solution",
            children: [WhatCategoryBestDescribesYourWebApplicationAll],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/PortalDevelopment.9df1b275.svg",
            label: "Online Portal",
            children: [WhatCategoryBestDescribesYourWebApplicationAll],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/BlogDevelopment.c01fe7aa.svg",
            label: "Blog",
            children: [WhatCategoryBestDescribesYourWebApplicationAll],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/education.2e6e57aa.svg",
            label: "Educational Application",
            children: [WhatCategoryBestDescribesYourWebApplicationAll],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/social-web.675a69ec.svg",
            label: "Social Media",
            children: [WhatCategoryBestDescribesYourWebApplicationAll],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Others.80984a87.svg",
            label: "Other",
            children: [WhatCategoryBestDescribesYourWebApplicationAll],
        },
    ],
};
