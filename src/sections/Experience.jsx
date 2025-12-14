import { useState } from 'react';
import { useTranslation } from "react-i18next";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";
import WorkModal from "../components/WorkModal/WorkModal.jsx";
import WorkExperienceEn from "../locales/en/work_experience.js";
import WorkExperienceId from "../locales/id/work_experience";
import EduExperienceEn from "../locales/en/edu_experience";
import EduExperienceId from "../locales/id/edu_experience";

function Experience({ isWork }) {
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const [selectedWork, setSelectedWork] = useState(null)
    const workExperience = i18n.language === "id" ? WorkExperienceId : WorkExperienceEn;
    const eduExperience = i18n.language === "id" ? EduExperienceId : EduExperienceEn;
    const titles = t("titles", { returnObjects: true });

    return (
        <div>
            <div className="section-header">
                {isWork ?
                    <h2>{titles[1]}</h2>
                    : <h2>{titles[2]}</h2>
                }
            </div>
            <div className="custom-container-y exp-cards">
                {isWork ?
                    <div id="work" style={{ position: 'relative' }}>
                        {workExperience.map((item, i) => (
                            <div key={item.id} onClick={() => setSelectedWork(item.id)} className={i !== workExperience.length - 1 ? "card-container" : "mb-4"}>
                                <ExperienceCard
                                    id={item.id}
                                    duration={item.duration}
                                    company={item.company}
                                    role={item.role}
                                    desc={item.desc}
                                    skills={item.skills}
                                    isWork={isWork}
                                />
                            </div>
                        ))}
                        <a href="/files/cv_widiana_anggreani_rahwal.pdf" className="link-homepage" style={{ marginTop: '0 !important' }} download="cv_widiana_anggreani_rahwal.pdf">
                            Download Full Resume
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                    :
                    <div id="education">
                        {eduExperience.map((item, i) => (
                            <div key={item.id} className={i !== eduExperience.length - 1 ? "card-container" : ""}>
                                <ExperienceCard
                                    id={item.id}
                                    duration={item.duration}
                                    company={item.company}
                                    role={item.role}
                                    desc={item.desc}
                                    skills={item.skills}
                                    isWork={isWork}
                                />
                            </div>
                        ))}
                    </div>
                }

                <WorkModal
                    id={selectedWork}
                    onClose={() => setSelectedWork(null)}
                />
            </div >
        </div>
    );
}

export default Experience;
