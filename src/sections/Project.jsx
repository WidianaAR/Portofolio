import { useState } from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ImageModal from "../components/ImageModal/ImageModal";
import ProjectDataEn from "../locales/en/project_data";
import ProjectDataId from "../locales/id/project_data";

function Project() {
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const [selectedImg, setSelectedImg] = useState(null)
    const projectData = i18n.language === "id" ? ProjectDataId : ProjectDataEn;
    const titles = t("titles", { returnObjects: true });

    return (
        <div id="project">
            <div className="section-header">
                <h2>{titles[3]}</h2>
            </div>
            <div className="custom-container-y project-cards">
                {projectData.slice(0, 4).map((item, i) => (
                    <div key={item.id} onClick={() => setSelectedImg(item.url)} className={i !== 4 ? "card-container" : "mb-4"}>
                        <ProjectCard
                            id={item.id}
                            url={item.url}
                            title={item.title}
                            desc={item.desc}
                            skills={item.skills}
                            modal={item.modal}
                        />
                    </div>
                ))}

                <Link to="/project" className="link-homepage">
                    View Full Project
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                        <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
                    </svg>
                </Link>

                <ImageModal
                    img={selectedImg}
                    onClose={() => setSelectedImg(null)}
                />
            </div>
        </div>
    );
}

export default Project;
