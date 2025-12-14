import SkillBadge from "../SkillBadge/SkillBadge";
import './ProjectCard.css';
import { useTheme } from '@mui/material/styles';

function ProjectCard({ id, url, title, desc, skills, modal }) {
    const theme = useTheme();

    return (
        <div className="row m-0 procard py-md-3 p-0 px-md-2 rounded">
            <div className="col-12 col-md-3 px-0 px-md-2" style={{ paddingTop: "5px" }}>
                <img src={url} alt="" className="rounded mb-2 project-image" />
            </div>
            <div className="col-12 col-md-9 px-0 px-md-2">
                <div style={{ position: 'relative', width: 'fit-content', marginBottom: '7px' }}>
                    <span className="protitle">
                        {title}
                        <svg className="url-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                        </svg>
                    </span>
                </div>
                <p style={{ color: theme.palette.text.secondaryL }}>{desc}</p>
                <div>
                    {skills.map((s, i) => (
                        <SkillBadge skill={s} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;