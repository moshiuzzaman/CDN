import { BloogShopifyCustomUi } from "./BloogShopifyCustomUi.js";
import { BloogShopifyRadyTheme } from "./BloogShopifyRadyTheme.js";

export const BloogShopify = {
    imageURL: "https://www.intelivita.co.uk/_next/static/media/Shopify.f8dc1c23.svg",
    label: "Shopify",
    children: [
        {
            question: "Design Options?",
            questionTitle: "Would you prefer a ready-made template or do you need a fully customised website completely designed from scratch?",
            options: [
                BloogShopifyRadyTheme,
                BloogShopifyCustomUi,

            ]
        }
    ]
}