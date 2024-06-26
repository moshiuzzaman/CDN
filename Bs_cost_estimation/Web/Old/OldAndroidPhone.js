import { OldAndroidPhoneeChatting } from "./OldAndroidPhoneeChatting.js";
import { OldAndroidPhoneeCommerce } from "./OldAndroidPhoneeCommerce.js";
import { OldAndroidPhoneeEducation } from "./OldAndroidPhoneeEducation.js";
import { OldAndroidPhoneeFood } from "./OldAndroidPhoneeFood.js";
import { OldAndroidPhoneeHealth } from "./OldAndroidPhoneeHealth.js";
import { OldAndroidPhoneeLive } from "./OldAndroidPhoneeLive.js";
import { OldAndroidPhoneeTravel } from "./OldAndroidPhoneeTravel.js";

export const OldAndroidPhone = {
    question: "What kind of app do you want to develop ?",
    options: [
        OldAndroidPhoneeCommerce,
        OldAndroidPhoneeTravel,
        OldAndroidPhoneeChatting,
        OldAndroidPhoneeEducation,
        OldAndroidPhoneeFood,
        OldAndroidPhoneeHealth,
        OldAndroidPhoneeLive,
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/social-media.e26534f1.svg",
            label: "Social Media",
            children: [
                {
                    question: "Do you need us to design the app?",
                    questionTitle: "Designing the app requires producing UI designs on Photoshop, Sketch or Figma. If you already have designs you can share with the team.",
                    options: [
                        {
                            imageURL: "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
                            label: "Yes",
                            children: [
                                {
                                    question: "Is GPS integration required?",
                                    options: [
                                        {
                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
                                            label: "Yes",
                                            children: [
                                                {
                                                    question: "Do you need a chatting feature?",
                                                    options: [
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/chatting.87815ad5.svg",
                                                            label: "Yes",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {

                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no-chatting.8444c2f0.svg",
                                                            label: "No",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
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
                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
                                            label: "No",
                                            children: [
                                                {
                                                    question: "Do you need a chatting feature?",
                                                    options: [
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/chatting.87815ad5.svg",
                                                            label: "Yes",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {

                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no-chatting.8444c2f0.svg",
                                                            label: "No",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        },
                                                                    ]
                                                                }
                                                            ]
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
                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
                            label: "No",
                            children: [
                                {
                                    question: "Is GPS integration required?",
                                    options: [
                                        {
                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
                                            label: "Yes",
                                            children: [
                                                {
                                                    question: "Do you need a chatting feature?",
                                                    options: [
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no-chatting.8444c2f0.svg",
                                                            label: "Yes",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {

                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no-chatting.8444c2f0.svg",
                                                            label: "No",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
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
                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
                                            label: "No",
                                            children: [
                                                {
                                                    question: "Do you need a chatting feature?",
                                                    options: [
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
                                                            label: "Yes",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {

                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no-chatting.8444c2f0.svg",
                                                            label: "No",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        },

                                                    ]
                                                }
                                            ]
                                        },
                                    ]
                                }
                            ]
                        },

                    ]
                },

            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/taxi-booking.3270554f.svg",
            label: "Taxi Booking",
            children: [
                {
                    question: "Do you need us to design the app?",
                    questionTitle: "Designing the app requires producing UI designs on Photoshop, Sketch or Figma. If you already have designs you can share with the team.",
                    options: [
                        {
                            imageURL: "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
                            label: "Yes",
                            children: [
                                {
                                    question: "Is GPS integration required?",
                                    options: [
                                        {
                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
                                            label: "Yes",
                                            children: [
                                                {
                                                    question: "Do you need a chatting feature?",
                                                    options: [
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/chatting.87815ad5.svg",
                                                            label: "Yes",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {

                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no-chatting.8444c2f0.svg",
                                                            label: "No",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
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
                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
                                            label: "No",
                                            children: [
                                                {
                                                    question: "Do you need a chatting feature?",
                                                    options: [
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/chatting.87815ad5.svg",
                                                            label: "Yes",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {

                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no-chatting.8444c2f0.svg",
                                                            label: "No",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        },
                                                                    ]
                                                                }
                                                            ]
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
                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
                            label: "No",
                            children: [
                                {
                                    question: "Is GPS integration required?",
                                    options: [
                                        {
                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
                                            label: "Yes",
                                            children: [
                                                {
                                                    question: "Do you need a chatting feature?",
                                                    options: [
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no-chatting.8444c2f0.svg",
                                                            label: "Yes",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {

                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no-chatting.8444c2f0.svg",
                                                            label: "No",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
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
                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
                                            label: "No",
                                            children: [
                                                {
                                                    question: "Do you need a chatting feature?",
                                                    options: [
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
                                                            label: "Yes",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {

                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no-chatting.8444c2f0.svg",
                                                            label: "No",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        },

                                                    ]
                                                }
                                            ]
                                        },
                                    ]
                                }
                            ]
                        },

                    ]
                },

            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/Others.80984a87.svg",
            label: "Others",
            children: [
                {
                    question: "Do you need us to design the app?",
                    questionTitle: "Designing the app requires producing UI designs on Photoshop, Sketch or Figma. If you already have designs you can share with the team.",
                    options: [
                        {
                            imageURL: "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
                            label: "Yes",
                            children: [
                                {
                                    question: "Is GPS integration required?",
                                    options: [
                                        {
                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
                                            label: "Yes",
                                            children: [
                                                {
                                                    question: "Do you need a chatting feature?",
                                                    options: [
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/chatting.87815ad5.svg",
                                                            label: "Yes",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {

                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no-chatting.8444c2f0.svg",
                                                            label: "No",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
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
                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
                                            label: "No",
                                            children: [
                                                {
                                                    question: "Do you need a chatting feature?",
                                                    options: [
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/chatting.87815ad5.svg",
                                                            label: "Yes",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {

                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no-chatting.8444c2f0.svg",
                                                            label: "No",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        },
                                                                    ]
                                                                }
                                                            ]
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
                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
                            label: "No",
                            children: [
                                {
                                    question: "Is GPS integration required?",
                                    options: [
                                        {
                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
                                            label: "Yes",
                                            children: [
                                                {
                                                    question: "Do you need a chatting feature?",
                                                    options: [
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no-chatting.8444c2f0.svg",
                                                            label: "Yes",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {

                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no-chatting.8444c2f0.svg",
                                                            label: "No",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
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
                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
                                            label: "No",
                                            children: [
                                                {
                                                    question: "Do you need a chatting feature?",
                                                    options: [
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
                                                            label: "Yes",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {

                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no-chatting.8444c2f0.svg",
                                                            label: "No",
                                                            children: [
                                                                {
                                                                    question: "How will you make money from your website ?",
                                                                    questionTitle: "Select The Last One",
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Products"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Adverise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        },

                                                    ]
                                                }
                                            ]
                                        },
                                    ]
                                }
                            ]
                        },

                    ]
                },

            ]
        },

    ]
}