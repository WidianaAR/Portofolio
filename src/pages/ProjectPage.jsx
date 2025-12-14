import { useState } from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SkillBadge from "../components/SkillBadge/SkillBadge";
import ImageModal from "../components/ImageModal/ImageModal";
import ProjectDataEn from "../locales/en/project_data";
import ProjectDataId from "../locales/id/project_data";

function ProjectPage() {
    const { i18n } = useTranslation();
    const [selectedImg, setSelectedImg] = useState(null)
    const projectData = i18n.language === "id" ? ProjectDataId : ProjectDataEn;

    return (
        <div className="custom-container-y m-0" id="table-container">
            <Link to="/" id="link-home">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:-translate-x-2 group-focus-visible:-translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                    <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
                </svg>
                Back to Homepage
            </Link>

            <table class="table">
                <thead>
                    <tr>
                        <th className="d-none d-md-block" scope="col">Snapshot</th>
                        <th scope="col" style={{ paddingLeft: '1.2rem', paddingRight: '1.2rem' }}>Project</th>
                        <th scope="col">Description</th>
                        <th className="d-none d-md-block" scope="col" style={{ whiteSpace: 'nowrap' }}>Built with</th>
                    </tr>
                </thead>
                <tbody>
                    {projectData.map((p) => (
                        <tr>
                            <td className="py-3 pr-0 pr-md-3 d-none d-md-table-cell">
                                <img src={p.url} alt="" width="150px" className="rounded" onClick={() => setSelectedImg(p.url)} />
                            </td>
                            <td className="py-3 pr-0 pr-md-3 d-table-cell project-name">{p.title}</td>
                            <td className="py-3 pr-0 pr-md-3 d-table-cell" style={{ maxWidth: "60vw" }}>{p.desc}</td>
                            <td className="py-3 d-none d-md-table-cell">
                                {p.skills.map((s, i) => (
                                    <SkillBadge key={i} skill={s} />
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ImageModal
                img={selectedImg}
                onClose={() => setSelectedImg(null)}
            />
        </div>
    );
}

export default ProjectPage;
