import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Sidebar.css";

export default function Sidebar() {
    const { t } = useTranslation();
    const sections = ["about", "work", "education", "project", "certificate"];
    const titles = t("titles", { returnObjects: true });
    const [active, setActive] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            let current = "";

            sections.forEach((id) => {
                const element = document.getElementById(id);
                if (!element) return;

                const rect = element.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
                    current = id;
                }
            });

            if (current) {
                setActive(current);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Panggil sekali di awal

        const observers = [];

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActive(id);
                        }
                    });
                },
                {
                    threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
                    rootMargin: "-20% 0px -60% 0px"
                }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observers.forEach((obs) => obs.disconnect());
        };
    }, []);

    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="space-y-2 sidebar">
            {sections.map((id, i) => (
                <a
                    key={sections[i]}
                    href={`#${sections[i]}`}
                    onClick={(e) => handleClick(e, sections[i])}
                    className={`group flex items-center ${active === sections[i] ? "active" : ""}`}
                >
                    <div className="nav-indicator"></div>
                    <span className="nav-text">
                        {titles[i]}
                    </span>
                </a>
            ))
            }
        </nav >
    );
}