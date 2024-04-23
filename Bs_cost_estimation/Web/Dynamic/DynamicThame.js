import { DynamicUIIOS } from "../New/DynamicUIIOS.js";
import { DynamicUIAndroid } from "./DynamicUIAndroid.js";
import { DynamicUIBoth } from "./DynamicUIBoth.js";

export const DynamicThame =
{
    imageURL: "https://www.intelivita.co.uk/_next/static/media/yes.4a3d12a6.svg",
    label: "Yes",
    children: [
        {
            question: "Do you need design changes?",
            options: [
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/yes-mobile-app.ca57c1d1.svg",
                    label: "Yes",
                    children: [
                        {
                            question: "Do you need a mobile app too?",
                            questionTitle: "Complement your web-solution with a mobile app to reach a wider audience.",
                            options: [
                                DynamicUIIOS,
                                DynamicUIAndroid,
                                DynamicUIBoth

                            ]
                        }
                    ]
                },

                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/no-mobile-app.cc06883c.svg",
                    label: "No",
                }

            ]
        }
    ]
}
export const DynamicThameNo =
{
    imageURL: "https://www.intelivita.co.uk/_next/static/media/no.760d1e91.svg",
    label: "No",
    children: [
        {
            question: "Do you need a mobile app too?",
            questionTitle: "Complement your web-solution with a mobile app to reach a wider audience.",
            options: [
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/yes-mobile-app.ca57c1d1.svg",
                    label: "Yes",
                    children: [
                        {
                            question: "Do you need a mobile app too?",
                            questionTitle: "Complement your web-solution with a mobile app to reach a wider audience.",
                            options: [
                                DynamicUIIOS,
                                DynamicUIAndroid,
                                DynamicUIBoth

                            ]
                        }
                    ]
                },
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/no-mobile-app.cc06883c.svg",
                    label: "No",
                    children: [

                    ]
                },

            ]
        }
    ]
}