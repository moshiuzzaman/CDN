import { OldIosIBoth } from "./OldIosIBoth.js";
import { OldIosIPad } from "./OldIosIPad.js";
import { OldIosIPhone } from "./OldIosIPhone.js";

export const OldIos = {
    imageURL: "https://www.intelivita.co.uk/_next/static/media/ios.be3e626d.svg",
    label: 'iOS',
    children: [
        {
            question: "On which device is the app used on?",
            options: [
                OldIosIPhone,
                OldIosIPad,
                OldIosIBoth
            ]
        }
    ]
}