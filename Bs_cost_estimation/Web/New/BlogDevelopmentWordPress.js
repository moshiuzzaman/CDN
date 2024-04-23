import { BlogDevelopmentWordPressCustomUi } from "./BlogDevelopmentWordPressCustomUi.js";
import { BlogDevelopmentWordPressReadyTheme } from "./BlogDevelopmentWordPressReadyTheme.js";

export const BlogDevelopmentWordPress = {
    imageURL: "https://www.intelivita.co.uk/_next/static/media/wordpress.f3aac4cf.svg",
    label: "Wordpress",
    children: [
        {
            question: "Design Options?",
            questionTitle: "Would you prefer a ready-made template or do you need a fully customised website completely designed from scratch?",
            options: [
                BlogDevelopmentWordPressReadyTheme,
                BlogDevelopmentWordPressCustomUi

            ]
        }
    ]
}