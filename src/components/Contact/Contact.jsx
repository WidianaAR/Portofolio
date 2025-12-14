import './Contact.css';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
    return (
        <div className="contact-container">
            <a target='_blank' href="https://github.com/WidianaAR"><FaGithub /></a>
            <a target='_blank' href="https://www.linkedin.com/in/widiaangrn/"><FaLinkedin /></a>
            <a target='_blank' href="https://www.instagram.com/widiarhwal"><FaInstagram /></a>
            <a target='_blank' href="mailto:widia.angrn@gmail.com"><MdEmail /></a>
            <a target='_blank' href="https://wa.me/6285171040705"><FaWhatsapp /></a>
        </div>
    );
}

export default Contact;
