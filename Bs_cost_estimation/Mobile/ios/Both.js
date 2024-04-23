import { Chatting } from "./Childern/Chatting.js"
import { Education } from "./Childern/Education.js"
import { FoodDelivery } from "./Childern/FoodDelivery.js"
import { HealthFitness } from "./Childern/HealthFitness.js"
import { LiveStreaming } from "./Childern/LiveStreaming.js"
import { Other } from "./Childern/Other.js"
import { SocialMedia } from "./Childern/SocialMedia.js"
import { TaxiBooking } from "./Childern/TaxiBooking.js"
import { Travel } from "./Childern/Travel.js"
import { eCommerce } from "./Childern/eCommerce.js"
export const MobileBoth =
{
    question: "What device will the app be used on?",
    options: [
        {

            imageURL: "https://www.intelivita.co.uk/_next/static/media/iphone.08dca49c.svg",
            label: "Phone",
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
                                    question: "What will the app be used for?",
                                    options: [
                                        eCommerce,
                                        Travel,
                                        Chatting,
                                        Education,
                                        FoodDelivery,
                                        HealthFitness,
                                        LiveStreaming,
                                        SocialMedia,
                                        TaxiBooking,
                                        Other
                                    ]
                                }
                            ]
                        },
                        {


                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
                            label: "No",
                            children: [
                                {
                                    options: [
                                        eCommerce,
                                        Travel,
                                        Chatting,
                                        Education,
                                        FoodDelivery,
                                        HealthFitness,
                                        LiveStreaming,
                                        SocialMedia,
                                        TaxiBooking,
                                        Other
                                    ]
                                }
                            ]
                        },

                    ]
                }
            ]

        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/ipad.ce5b36ef.svg",
            label: "Tablet",
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
                                    question: "What will the app be used for?",
                                    options: [
                                        eCommerce,
                                        Travel,
                                        Chatting,
                                        Education,
                                        FoodDelivery,
                                        HealthFitness,
                                        LiveStreaming,
                                        SocialMedia,
                                        TaxiBooking,
                                        Other
                                    ]
                                }
                            ]
                        },
                        {


                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
                            label: "No",
                            children: [
                                {
                                    options: [
                                        eCommerce,
                                        Travel,
                                        Chatting,
                                        Education,
                                        FoodDelivery,
                                        HealthFitness,
                                        LiveStreaming,
                                        SocialMedia,
                                        TaxiBooking,
                                        Other
                                    ]
                                }
                            ]
                        },

                    ]
                }
            ]

        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/iphone-ipad.884e9f24.svg",
            label: "Both",
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
                                    question: "What will the app be used for?",
                                    options: [
                                        eCommerce,
                                        Travel,
                                        Chatting,
                                        Education,
                                        FoodDelivery,
                                        HealthFitness,
                                        LiveStreaming,
                                        SocialMedia,
                                        TaxiBooking,
                                        Other
                                    ]
                                }
                            ]
                        },
                        {


                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
                            label: "No",
                            children: [
                                {
                                    options: [
                                        eCommerce,
                                        Travel,
                                        Chatting,
                                        Education,
                                        FoodDelivery,
                                        HealthFitness,
                                        LiveStreaming,
                                        SocialMedia,
                                        TaxiBooking,
                                        Other
                                    ]
                                }
                            ]
                        },

                    ]
                }
            ]

        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/not-sure.43f510ea.svg",
            label: "Not Sure",
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
                                    question: "What will the app be used for?",
                                    options: [
                                        eCommerce,
                                        Travel,
                                        Chatting,
                                        Education,
                                        FoodDelivery,
                                        HealthFitness,
                                        LiveStreaming,
                                        SocialMedia,
                                        TaxiBooking,
                                        Other
                                    ]
                                }
                            ]
                        },
                        {


                            imageURL: "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
                            label: "No",
                            children: [
                                {
                                    options: [
                                        eCommerce,
                                        Travel,
                                        Chatting,
                                        Education,
                                        FoodDelivery,
                                        HealthFitness,
                                        LiveStreaming,
                                        SocialMedia,
                                        TaxiBooking,
                                        Other
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