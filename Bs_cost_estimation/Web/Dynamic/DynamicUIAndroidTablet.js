import { DynamicUIAndroidTableteChatting } from "./DynamicUIAndroidTableteChatting.js";
import { DynamicUIAndroidTableteCommerce } from "./DynamicUIAndroidTableteCommerce.js";
import { DynamicUIAndroidTableteEduction } from "./DynamicUIAndroidTableteEduction.js";
import { DynamicUIAndroidTableteFoodDelivery } from "./DynamicUIAndroidTableteFoodDelivery.js";
import { DynamicUIAndroidTableteHealth } from "./DynamicUIAndroidTableteHealth.js";
import { DynamicUIAndroidTableteLiveStreaming } from "./DynamicUIAndroidTableteLiveStreaming.js";
import { DynamicUIAndroidTableteTravel } from "./DynamicUIAndroidTableteTravel.js";

export const DynamicUIAndroidTablet = {
    question: "What kind of app do you want to develop ?",
    options: [
        DynamicUIAndroidTableteCommerce,
        DynamicUIAndroidTableteTravel,
        DynamicUIAndroidTableteChatting,
        DynamicUIAndroidTableteEduction,
        DynamicUIAndroidTableteFoodDelivery,
        DynamicUIAndroidTableteHealth,
        DynamicUIAndroidTableteLiveStreaming,
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/social-media.e26534f1.svg",
            label: "Social Media",
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
        },
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