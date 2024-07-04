const DoYouNeedAChattingFeature = {
    question: "Do you need a chatting feature?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
            label: "Yes",
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
            label: "No",
        },
    ],
};

const IsGpsIntegrationRequired = {
    question: "Is GPS integration required?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
            label: "Yes",
            children: [DoYouNeedAChattingFeature],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
            label: "No",
            children: [DoYouNeedAChattingFeature],
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
            
            children: [IsGpsIntegrationRequired],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
            label: "No",
            children: [IsGpsIntegrationRequired],
        },
    ],
};

const OnWhichDeviceIsTheAppUsedOnAndroidBoth = {
    question: "On which device is the app used on?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/phone.c9b394ba.svg",
            label: "Phone",
            children: [DoYouNeedUsToDesignTheApp],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/tablet.884cc382.svg",
            label: "Tablet",
            children: [DoYouNeedUsToDesignTheApp],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/both.95605028.svg",
            label: "Both",
            children: [DoYouNeedUsToDesignTheApp],
        },
    ],
};

const OnWhichDeviceIsTheAppUsedOnIos = {
    question: "On which device is the app used on?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/iphone.08dca49c.svg",
            label: "iPhone",
            children: [DoYouNeedUsToDesignTheApp],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/ipad.ce5b36ef.svg",
            label: "iPad",
            children: [DoYouNeedUsToDesignTheApp],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/both.95605028.svg",
            label: "Both",
            children: [DoYouNeedUsToDesignTheApp],
        },
    ],
};

const ForWhichPlatformIsYourAppDeveloped = {
    question: "For which platform is your app developed?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/ios.be3e626d.svg",
            label: "iOS",
            price:650,
            children: [OnWhichDeviceIsTheAppUsedOnIos],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/android.4c1c0a2f.svg",
            label: "Android",
            price:200,
            children: [OnWhichDeviceIsTheAppUsedOnAndroidBoth],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/both.95605028.svg",
            label: "Both",
            price:750,
            children: [OnWhichDeviceIsTheAppUsedOnAndroidBoth],
        },
    ],
};

const DoYouNeedAMobileAppToo = {
    question: "Do you need a mobile app too?",
    questionTitle:
        "Complement your web-solution with a mobile app to reach a wider audience.",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
            label: "Yes",
            price:1650,
            children: [ForWhichPlatformIsYourAppDeveloped],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
            label: "No",
        },
    ],
};

const PaymentIntegrationRequired = {
    question: "Payment integration required?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
            label: "Yes",
            price:100,
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

const ReadyTheme = {
    imageURL:
        "https://www.intelivita.co.uk/_next/static/media/ReadyTheme.3e36c85f.svg",
    label: "Ready Theme",
    price:50,
    children: [PaymentIntegrationRequired],
};

const CustomUI = {
    imageURL:
        "https://www.intelivita.co.uk/_next/static/media/CustomUI.2fae7eab.svg",
    label: "Custom UI",
    price:350,
    children: [PaymentIntegrationRequired],
};

const DesignOptions = {
    question: "Design Options?",
    questionTitle:
        "Would you prefer a ready-made template or do you need a fully customised website completely designed from scratch?",
    options: [ReadyTheme, CustomUI],
};

export const WhichTechnologyWouldYouLikeToUseECommerceSolution = {
    question: "Which technology would you like to use?",
    questionTitle:
        "Please specify the platform you would like to choose for your web development solutions.",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/WooCommerce.4df5528b.svg",
            label: "WooCommerce",
            price:650,
            children: [DesignOptions],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Shopify.f8dc1c23.svg",
            label: "Shopify",
            price:200,
            children: [DesignOptions],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/php.0a67efef.svg",
            label: "PHP",
            price:650,
            children: [DesignOptions],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Laravel.14f0d8d3.svg",
            label: "Laravel",
            price:250,
            children: [DesignOptions],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Codeigniter.9fdff3af.svg",
            label: "CodeIgniter",
            price:400,
            children: [DesignOptions],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/I-dont-know.f857c8c8.svg",
            label: "I don't know",
            price:400,
            children: [DesignOptions],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Others.80984a87.svg",
            label: "Other",
            price:750,
            children: [DesignOptions],
        },
    ],
};

export const WhichTechnologyWouldYouLikeToUseAll = {
    question: "Which technology would you like to use?",
    questionTitle:
        "Please specify the platform you would like to choose for your web development solutions.",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/php.0a67efef.svg",
            label: "PHP",
            price:650,
            children: [DesignOptions],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Laravel.14f0d8d3.svg",
            label: "Laravel",
            price:250,
            children: [DesignOptions],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/wordpress.f3aac4cf.svg",
            label: "Wordpress",
            price:400,
            children: [DesignOptions],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Codeigniter.9fdff3af.svg",
            label: "CodeIgniter",
            price:400,
            children: [DesignOptions],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/I-dont-know.f857c8c8.svg",
            label: "I don't know",
            price:400,
            children: [DesignOptions],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Others.80984a87.svg",
            label: "Other",
            price:750,
            children: [DesignOptions],
        },
    ],
};

export const WhatCategoryBestDescribesYourWebApplicationECommerceSolution = {
    question: "What category best describes your web application?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/eCommerceSolution.5f0f5b06.svg",
            label: "eCommerce Solution",
            children: [WhichTechnologyWouldYouLikeToUseECommerceSolution],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/CustomWeb.82711330.svg",
            label: "Custom Web Development",
            price:1800,
            children: [WhichTechnologyWouldYouLikeToUseAll],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/PortalDevelopment.9df1b275.svg",
            label: "Portal Development",
            price:2200,
            children: [WhichTechnologyWouldYouLikeToUseAll],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/BlogDevelopment.c01fe7aa.svg",
            label: "Blog Development",
            price:750,
            children: [WhichTechnologyWouldYouLikeToUseAll],
        },
    ],
};
