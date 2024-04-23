import { BloogWooCommerceCustomUi } from "./BloogWooCommerceCustomUi.js";
import { BloogWooCommerceReadyTheme } from "./BloogWooCommerceReadyTheme.js";

export const BloogWooCommerce =
{
    imageURL: "https://www.intelivita.co.uk/_next/static/media/WooCommerce.4df5528b.svg",
    label: "WooCommerce",
    children: [
        {
            question: "Design Options?",
            questionTitle: "Would you prefer a ready-made template or do you need a fully customised website completely designed from scratch?",
            options: [
                BloogWooCommerceReadyTheme,
                BloogWooCommerceCustomUi,

            ]
        }
    ]
}