import './WorkModal.css';
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import DetailCard from '../DetailCard/DetailCard';
import WorkExperienceEn from "../../locales/en/work_experience";
import WorkExperienceId from "../../locales/id/work_experience";

function WorkModal({ id, onClose }) {
    const { i18n } = useTranslation();
    const workExperience = i18n.language === "id" ? WorkExperienceId : WorkExperienceEn;
    const work = workExperience.find(item => item.id === Number(id));

    return (
        <Modal show={!!id} onHide={onClose} centered size="lg" animation className='work-modal'>
            <Modal.Header closeButton />   {/* tombol X */}

            <div className='p-3 p-md-4 pb-0'>
                {work ?
                    work.details.map((p, idx) => (
                        <DetailCard
                            key={idx}
                            app={p.app}
                            link={p.link}
                            client={p.client}
                            desc={p.desc}
                            skills={p.skills}
                        />
                    ))
                    : <p></p>
                }
            </div>
        </Modal>
    );
}

export default WorkModal;
