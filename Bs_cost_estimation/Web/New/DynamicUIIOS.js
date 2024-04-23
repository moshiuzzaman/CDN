import { DynamicUIIOSBoth } from "./DynamicUIIOSBoth.js";
import { DynamicUIIOSIPad } from "./DynamicUIIOSIPad.js";
import { DynamicUIIOSIPhone } from "./DynamicUIIOSIPhone.js";

export const DynamicUIIOS =
{
    imageURL: "https://www.intelivita.co.uk/_next/static/media/ios.be3e626d.svg",
    label: "IOS",
    children: [
        {
            question: "On which device is the app used on?",
            options: [
                DynamicUIIOSIPhone,
                DynamicUIIOSIPad,
                DynamicUIIOSBoth
            ]
        }
    ]
}