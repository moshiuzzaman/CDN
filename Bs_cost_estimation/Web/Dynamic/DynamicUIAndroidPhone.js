import { DynamicUIAndroidPhoneeChating } from "./DynamicUIAndroidPhoneeChating.js";
import { DynamicUIAndroidPhoneeCommerce } from "./DynamicUIAndroidPhoneeCommerce.js";
import { DynamicUIAndroidPhoneeEducation } from "./DynamicUIAndroidPhoneeEducation.js";
import { DynamicUIAndroidPhoneeFoodDelivery } from "./DynamicUIAndroidPhoneeFoodDelivery.js";
import { DynamicUIAndroidPhoneeHealth } from "./DynamicUIAndroidPhoneeHealth.js";
import { DynamicUIAndroidPhoneeLiveStreaming } from "./DynamicUIAndroidPhoneeLiveStreaming.js";
import { DynamicUIAndroidPhoneeSocialMedia } from "./DynamicUIAndroidPhoneeSocialMedia.js";
import { DynamicUIAndroidPhoneeTaxiBooking } from "./DynamicUIAndroidPhoneeTaxiBooking.js";
import { DynamicUIAndroidPhoneeTravel } from "./DynamicUIAndroidPhoneeTravel.js";
export const DynamicUIAndroidPhone = {
    question: "What kind of app do you want to develop ?",
    options: [
        DynamicUIAndroidPhoneeCommerce,
        DynamicUIAndroidPhoneeTravel,
        DynamicUIAndroidPhoneeChating,
        DynamicUIAndroidPhoneeEducation,
        DynamicUIAndroidPhoneeFoodDelivery,
        DynamicUIAndroidPhoneeHealth,
        DynamicUIAndroidPhoneeLiveStreaming,
        DynamicUIAndroidPhoneeSocialMedia,
        DynamicUIAndroidPhoneeTaxiBooking,
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/Others.80984a87.svg",
            label: "Other",
            children: [
                {
                    question: "Do you need us to design the app?",
                    questionTitle: "Designing the app requires producing UI designs on Photoshop, Sketch or Figma. If you already have designs you can share with the team.",
                    options: [
                        {
                            imageURL: 'https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg',
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
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Product"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Advertise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        }
                                                                    ]
                                                                }
                                                            ]

                                                        },
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no-chatting.8444c2f0.svg",
                                                            label: "NO",
                                                            children: [
                                                                {
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Product"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Advertise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
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
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Product"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Advertise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        }
                                                                    ]
                                                                }
                                                            ]

                                                        },
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no-chatting.8444c2f0.svg",
                                                            label: "NO",
                                                            children: [
                                                                {
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Product"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Advertise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },


                                    ]
                                }
                            ]
                        },
                        {
                            imageURL: 'https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg',
                            label: "NO",
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
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Product"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Advertise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        }
                                                                    ]
                                                                }
                                                            ]

                                                        },
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no-chatting.8444c2f0.svg",
                                                            label: "NO",
                                                            children: [
                                                                {
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Product"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Advertise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
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
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Product"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Advertise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        }
                                                                    ]
                                                                }
                                                            ]

                                                        },
                                                        {
                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no-chatting.8444c2f0.svg",
                                                            label: "NO",
                                                            children: [
                                                                {
                                                                    options: [
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sell-Products.996f3c7f.svg",
                                                                            label: "Sell Product"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Advertise.c2dac70a.svg",
                                                                            label: "Advertise"
                                                                        },
                                                                        {
                                                                            imageURL: "https://www.intelivita.co.uk/_next/static/media/Subscription.910d6284.svg",
                                                                            label: "Subscription"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
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
        }
    ]
}