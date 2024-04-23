import { DynamicMain } from "./Dynamic/DynamicMain.js";
import { eCommerceSolution } from "./New/eCommerceSolution.js";
import { OldOldCodeIgniter } from "./Old/OldCodeIgniter.js";
import { OldIdontKnow } from "./Old/OldIdon'tKnow.js";
import { OldLaravel } from "./Old/OldLaravel.js";
import { OldOther } from "./Old/OldOther.js";
import { OldPHP } from "./Old/OldPHP.js";
import { OldOldWordpress } from "./Old/OldWordpress.js";

export const WebHome =

{
    question: "How would you like to start?",
    questionTitle: "Please specify if your app needs to be built from scratch or do we need to modify an existing build?", options: [
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/new.53637ee2.svg",
            label: 'New',
            children: [
                {
                    question: "What type of web solution do you need?",
                    questionTitle: "Please select a category that describes your web application development.",
                    options: [
                        {
                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Dynamic.e9273ee5.svg",
                            label: "Dynamic",
                            children: [
                                eCommerceSolution
                            ]
                        },
                        {
                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Static.0eaa91c2.svg",
                            label: "Static",
                            children: [
                                {
                                    question: "Which technology would you like to use?",
                                    questionTitle: "Please specify the platform you would like to choose for your web development solutions.",

                                    options: [
                                        {
                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/php.0a67efef.svg",
                                            label: "PHP",
                                            children: [
                                                {
                                                    question: 'Design Options?',
                                                    questionTitle: "Would you prefer a ready-made template or do you need a fully customised website completely designed from scratch?",
                                                    options: [
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/ReadyTheme.3e36c85f.svg",
                                                            label: "Ready Theme"
                                                        },
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/CustomUI.2fae7eab.svg",
                                                            label: "Custom Ui"
                                                        },
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Laravel.14f0d8d3.svg",
                                            label: "Laravel",
                                            children: [
                                                {
                                                    question: 'Design Options?',
                                                    questionTitle: "Would you prefer a ready-made template or do you need a fully customised website completely designed from scratch?",
                                                    options: [
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/ReadyTheme.3e36c85f.svg",
                                                            label: "Ready Theme"
                                                        },
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/CustomUI.2fae7eab.svg",
                                                            label: "Custom Ui"
                                                        },
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Codeigniter.9fdff3af.svg",
                                            label: "CodeIgniter",
                                            children: [
                                                {
                                                    question: 'Design Options?',
                                                    questionTitle: "Would you prefer a ready-made template or do you need a fully customised website completely designed from scratch?",
                                                    options: [
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/ReadyTheme.3e36c85f.svg",
                                                            label: "Ready Theme"
                                                        },
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/CustomUI.2fae7eab.svg",
                                                            label: "Custom Ui"
                                                        },
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/wordpress.f3aac4cf.svg",
                                            label: "Wordpress",
                                            children: [
                                                {
                                                    question: 'Design Options?',
                                                    questionTitle: "Would you prefer a ready-made template or do you need a fully customised website completely designed from scratch?",
                                                    options: [
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/ReadyTheme.3e36c85f.svg",
                                                            label: "Ready Theme"
                                                        },
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/CustomUI.2fae7eab.svg",
                                                            label: "Custom Ui"
                                                        },
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/I-dont-know.f857c8c8.svg",
                                            label: "I don't know",
                                            children: [
                                                {
                                                    question: 'Design Options?',
                                                    questionTitle: "Would you prefer a ready-made template or do you need a fully customised website completely designed from scratch?",
                                                    options: [
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/ReadyTheme.3e36c85f.svg",
                                                            label: "Ready Theme"
                                                        },
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/CustomUI.2fae7eab.svg",
                                                            label: "Custom Ui"
                                                        },
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Others.80984a87.svg",
                                            label: "Other",
                                            children: [
                                                {
                                                    question: 'Design Options?',
                                                    questionTitle: "Would you prefer a ready-made template or do you need a fully customised website completely designed from scratch?",
                                                    options: [
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/ReadyTheme.3e36c85f.svg",
                                                            label: "Ready Theme"
                                                        },
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/CustomUI.2fae7eab.svg",
                                                            label: "Custom Ui"
                                                        },
                                                    ]
                                                }
                                            ]
                                        },
                                    ]

                                }
                            ]

                        },
                        {
                            imageURL: "https://www.intelivita.co.uk/_next/static/media/I-dont-know.f857c8c8.svg",
                            label: "I don't know",
                            children: [
                                eCommerceSolution
                            ]
                        },
                    ]

                }
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/old.c23041cd.svg",
            label: 'Old',
            children: [
                {
                    question: "What type of web solution do you need?",
                    questionTitle: "Please select a category that describes your web application development.",
                    options: [
                        {
                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Dynamic.e9273ee5.svg",
                            label: "Dynamic",
                            children: [
                                DynamicMain
                            ]

                        },
                        {
                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Static.0eaa91c2.svg",
                            label: "Static",
                            children: [
                                {
                                    question: "In which technology was your website originally built?",
                                    questionTitle: "Please specify which technology is used to build your existing website",
                                    options: [
                                        OldPHP,
                                        OldLaravel,
                                        OldOldCodeIgniter,
                                        OldOldWordpress,
                                        OldOther,
                                        OldIdontKnow
                                    ]
                                }
                            ]
                        },
                    ]

                }
            ]
        }

    ]

}

