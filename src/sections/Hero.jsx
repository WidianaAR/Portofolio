import { useTranslation } from "react-i18next";
import { useTheme } from '@mui/material/styles';
import Sidebar from "../components/Sidebar/Sidebar";
import Contact from "../components/Contact/Contact";
import TextType from "../components/TextType/TextType";
import LanguageToggle from "../components/LanguageToggle/LanguageToggle";

function Hero() {
    const { t } = useTranslation();
    const theme = useTheme();

    return (
        <div id="hero-container">
            <LanguageToggle />
            <div className="mt-md-0 mt-4">
                <h2>{t("greeting")}&nbsp;
                    <span>
                        <TextType
                            text={["Widiana Anggreani Rahwal", "Software Developer", "Widiana Anggreani Rahwal"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            loop={false}
                        />
                    </span>
                </h2>
                <p className="w-md-75" id="hero-subtitle" style={{ color: theme.palette.text.secondaryL }}>{t("subtitle")}</p>
            </div>

            <Sidebar />
            <Contact />
        </div>
    );
}

export default Hero;
