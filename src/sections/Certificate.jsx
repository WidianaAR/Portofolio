import { useTranslation } from "react-i18next";
import EmblaCarousel from "../components/EmblaCarousel/EmblaCarousel";
import CertificateDataEn from "../locales/en/certificate_data";
import CertificateDataId from "../locales/id/certificate_data";

function Certificate() {
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const titles = t("titles", { returnObjects: true });
    const OPTIONS = { dragFree: true, loop: true }
    const SLIDES = i18n.language === "id" ? CertificateDataId : CertificateDataEn;

    return (
        <div id="certificate" className="custom-container-y project-cards mb-0">
            <div className="section-header px-0">
                <h2>{titles[4]}</h2>
            </div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    );
}

export default Certificate;
