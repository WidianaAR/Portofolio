import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useTranslation } from "react-i18next";
import "./LanguageToggle.css";

function LanguageToggle() {
  const { i18n } = useTranslation();

  const handleToggle = () => {
    const newLang = i18n.language === "en" ? "id" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <ToggleButtonGroup
      value={i18n.language}
      exclusive
      onChange={handleToggle}
      sx={{
        height: 28,
        borderRadius: 1,
      }}
    >
      <ToggleButton value="en" sx={{ width: 36 }}>
        EN
      </ToggleButton>
      <ToggleButton value="id" sx={{ width: 36 }}>
        ID
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default LanguageToggle;



