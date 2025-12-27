import { useTranslation } from "react-i18next";
import { useTheme } from '@mui/material/styles';
import { LazyLoadImage } from "react-lazy-load-image-component";
import TiltedCard from "../components/TiltedCard/TiltedCard";

function About() {
    const { t } = useTranslation();
    const theme = useTheme();
    const titles = t("titles", { returnObjects: true });

    return (
        <div id="about" style={{ marginBottom: '3rem' }}>
            <div className="section-header">
                <h2>{titles[0]}</h2>
            </div>
            <div className="custom-container-y my-0" style={{ color: theme.palette.text.secondaryL, lineHeight: '1.625' }}>
                <div id="profile-img-container" className="mb-3 d-flex" style={{ gap: '0px' }}>
                    <TiltedCard
                        imageSrc="/images/profile-bg.svg"
                        altText="Widiana Anggreani Rahwal"
                        captionText="Widiana Anggreani Rahwal"
                        containerHeight="150px"
                        containerWidth="150px"
                        imageHeight="150px"
                        imageWidth="150px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                        overlayContent={
                            <LazyLoadImage id="profile-img" src="/images/profile.svg" effect="blur" threshold={100} visibleByDefault={false} wrapperClassName="lazy-wrapper" />
                        }
                    />
                    <div className="d-flex flex-column justify-content-around">
                        <div className="row m-0 align-items-end">
                            <div className="col-auto pb-1">
                                <img style={{ width: '120px' }} src="/images/line2.svg" alt="" />
                            </div>
                            <div className="col p-0" style={{ whiteSpace: 'nowrap' }}>
                                <p style={{ color: 'rgba(229, 224, 255, 0.)', fontSize: '.8rem', letterSpacing: '1px', margin: '0' }}>Hover me!</p>
                            </div>
                        </div>
                        <div className="row m-0 align-items-end">
                            <div className="col-auto pb-1">
                                <img style={{ width: '100px' }} src="/images/line1.svg" alt="" />
                            </div>
                            <div className="col p-0" style={{ whiteSpace: 'nowrap' }}>
                                <p style={{ color: 'rgba(229, 224, 255, 0.)', fontSize: '.8rem', letterSpacing: '1px', margin: '0' }}>Software developer | Informatics</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p
                    className="mb-4"
                    dangerouslySetInnerHTML={{ __html: t("about") }}
                />
                <p
                    className="mb-4"
                    dangerouslySetInnerHTML={{ __html: t("about2") }}
                />
            </div>
        </div>
    )
}

export default About;