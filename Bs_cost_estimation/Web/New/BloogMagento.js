import { BloogMagentoCustomUi } from "./BloogMagentoCustomUi.js";
import { BloogMagentoReadyTheme } from "./BloogMagentoReadyTheme.js";

export const BloogMagento = {
    imageURL: "https://www.intelivita.co.uk/_next/static/media/Magento.75c1e03b.svg",
    label: "Magento",
    children: [
        {
            question: "Design Options?",
            questionTitle: "Would you prefer a ready-made template or do you need a fully customised website completely designed from scratch?",
            options: [
                BloogMagentoReadyTheme,
                BloogMagentoCustomUi,

            ]
        }
    ]
}