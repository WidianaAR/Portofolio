import './SkillBadge.css';

function SkillBadge({ skill }) {
    return (
        <div className="badge skill-badge rounded-pill">
            {skill}
        </div>
    )
}

export default SkillBadge;