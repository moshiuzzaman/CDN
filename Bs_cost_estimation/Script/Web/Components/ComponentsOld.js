import { DoYouNeedAMobileAppToo } from "./ComponentsDynamic.js";

const SkipFormAndThenMobileApp = {
    question: "Please provide a brief description of the changes required ",
    options: [
        {
            label: "Skip",
            children: [DoYouNeedAMobileAppToo],
        },
    ],
};

const DoYouNeedDesignChanges = {
    question: "Do you need design changes?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
            label: "Yes",
            children: [SkipFormAndThenMobileApp],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
            label: "No",
            children: [SkipFormAndThenMobileApp],
        },
    ],
};

export const InWhichTechnologyWasYourWebsiteDeveloped = {
    question: "In which technology was your website originally built?",
    questionTitle:
        "Please specify which technology is used to build your existing website",
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

export const DesignChangeStatic = {
    question: "Design Options?",
    questionTitle:
        "Would you prefer a ready-made template or do you need a fully customised website completely designed from scratch?",
    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/ReadyTheme.3e36c85f.svg",
            label: "Ready Theme",
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/CustomUI.2fae7eab.svg",
            label: "Custom Ui",
        },
    ],
};


export const WhichTechnologyWouldYouLikeToUseStatic={
    question:
        "Which technology would you like to use?",
    questionTitle:
        "Please specify the platform you would like to choose for your web development solutions.",

    options: [
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/php.0a67efef.svg",
            label: "PHP",
            children: [
                DesignChangeStatic
            ],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Laravel.14f0d8d3.svg",
            label: "Laravel",
            children: [
                DesignChangeStatic
            ],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Codeigniter.9fdff3af.svg",
            label: "CodeIgniter",
            children: [
                DesignChangeStatic
            ],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/wordpress.f3aac4cf.svg",
            label: "Wordpress",
            children: [
                DesignChangeStatic
            ],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/I-dont-know.f857c8c8.svg",
            label: "I don't know",
            children: [
                DesignChangeStatic
            ],
        },
        {
            imageURL:
                "https://www.intelivita.co.uk/_next/static/media/Others.80984a87.svg",
            label: "Other",
            children: [
                DesignChangeStatic
            ],
        },
    ],
}