import { DynamicWooCommercePhoneBoth } from "./DynamicWooCommercePhoneBoth.js";
import { DynamicWooCommercePhoneIPad } from "./DynamicWooCommercePhoneIPad.js";
import { DynamicWooCommercePhoneIphone } from "./DynamicWooCommercePhoneIphone.js";

export const DynamicWooCommerceIPhone =
{
    imageURL: "https://www.intelivita.co.uk/_next/static/media/ios.be3e626d.svg",
    label: "iOS",
    children: [
        {
            question: "On which device is the app used on?",
            options: [
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/iphone.08dca49c.svg",
                    label: "iPhone",
                    children: [
                        DynamicWooCommercePhoneIphone
                    ]
                },
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/ipad.ce5b36ef.svg",
                    label: "iPad",
                    children: [
                        DynamicWooCommercePhoneIPad
                    ]
                },
                {
                    imageURL: "https://www.intelivita.co.uk/_next/static/media/iphone-ipad.884e9f24.svg",
                    label: "Both",
                    children: [
                        DynamicWooCommercePhoneBoth
                    ]
                },

            ]
        }
    ]
}