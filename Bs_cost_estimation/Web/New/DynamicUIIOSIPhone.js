import { DynamicUIIOSIPhoneChatting } from "./DynamicUIIOSIPhoneChatting.js";
import { DynamicUIIOSIPhoneEcommerce } from "./DynamicUIIOSIPhoneEcommerce.js";
import { DynamicUIIOSIPhoneEducation } from "./DynamicUIIOSIPhoneEducation.js";
import { DynamicUIIOSIPhoneFood } from "./DynamicUIIOSIPhoneFood.js";
import { DynamicUIIOSIPhoneHealth } from "./DynamicUIIOSIPhoneHealth.js";
import { DynamicUIIOSIPhoneTravel } from "./DynamicUIIOSIPhoneTravel.js";

export const DynamicUIIOSIPhone = {
    imageURL: "https://www.intelivita.co.uk/_next/static/media/iphone.08dca49c.svg",
    label: "iPhone",
    children: [
        {
            question: "What kind of app do you want to develop ?",
            options: [
                DynamicUIIOSIPhoneEcommerce,
                DynamicUIIOSIPhoneTravel,
                DynamicUIIOSIPhoneChatting,
                DynamicUIIOSIPhoneEducation,
                DynamicUIIOSIPhoneFood,
                DynamicUIIOSIPhoneHealth,
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/live-streaming.99a32703.svg",
                    label: "Live Streaming",
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
    ]

}