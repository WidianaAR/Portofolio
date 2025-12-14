import './DetailCard.css';
import { useTheme } from '@mui/material/styles';
import SkillBadge from "../SkillBadge/SkillBadge";

function DetailCard({ app, link, client, desc, skills }) {
    const theme = useTheme();

    return (
        <div className='det-container'>
            <div className='det-title-container'>
                <a href={link} className="det-title" target='_blank'>
                    {app}
                    {link ?
                        <svg className="url-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                        </svg> : ""
                    }
                </a>
            </div>
            <p className="mb-2" style={{ color: theme.palette.text.secondaryL }}>{client}</p>
            <ul className='ps-3 mb-2' style={{ color: theme.palette.text.secondaryD }}>
                {desc.map((p) => (
                    <li>{p}</li>
                ))}
            </ul>
            <div className='mb-4'>
                {skills.map((s, i) => (
                    <SkillBadge skill={s} />
                ))}
            </div>
        </div>
    );
}

export default DetailCard;
