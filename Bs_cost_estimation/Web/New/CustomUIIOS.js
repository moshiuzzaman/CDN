import { CustomUIIOSBoth } from "./CustomUIIOSBoth.js";
import { CustomUIIOSIPad } from "./CustomUIIOSIPad.js";
import { CustomUIIOSIPhone } from "./CustomUIIOSIPhone.js";

export const CustomUIIOS =
{
    imageURL: "https://www.intelivita.co.uk/_next/static/media/ios.be3e626d.svg",
    label: "IOS",
    children: [
        {
            question: "On which device is the app used on?",
            options: [
                CustomUIIOSIPhone,
                CustomUIIOSIPad,
                CustomUIIOSBoth
            ]
        }
    ]
}