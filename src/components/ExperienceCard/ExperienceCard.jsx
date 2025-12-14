import SkillBadge from "../SkillBadge/SkillBadge";
import './ExperienceCard.css';
import { useTheme } from '@mui/material/styles';

function ExperienceCard({ id, duration, company, role, desc, skills, isWork }) {
    const theme = useTheme();

    if (isWork) {
        return (
            <div className="row m-0 excard py-md-3 p-0 px-md-2 rounded">
                <div className="col-12 col-md-3 px-0 px-md-2" style={{ paddingTop: "2px" }}>
                    <p className="mb-md-2 mb-0" style={{ color: theme.palette.text.secondaryD, fontSize: ".75rem" }}>{duration}</p>
                </div>
                <div className="col-12 col-md-9 px-0 px-md-2">
                    <div style={{ position: 'relative', width: 'fit-content' }}>
                        <span className="extitle">
                            {company}
                            <svg className="url-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                            </svg>
                        </span>
                    </div>
                    <p className="mb-2" style={{ color: theme.palette.text.secondaryL }}>{role}</p>
                    <p style={{ color: theme.palette.text.secondaryL }}>{desc}</p>
                    <div>
                        {skills.map((s, i) => (
                            <SkillBadge skill={s} />
                        ))}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="row m-0 excard py-md-3 p-0 px-md-2 rounded">
                <div className="col-12 col-md-3 px-0 px-md-2" style={{ paddingTop: "2px" }}>
                    <p className="mb-md-2 mb-0" style={{ color: theme.palette.text.secondaryD, fontSize: ".85rem" }}>{duration}</p>
                </div>
                <div className="col-12 col-md-9 px-0 px-md-2">
                    <p className="extitle">{company}</p>
                    <p className="mb-2" style={{ color: theme.palette.text.secondaryL }}>{role}</p>
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
}

export default ExperienceCard;