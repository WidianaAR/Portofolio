import About from "./About.jsx";
import Certificate from "./Certificate.jsx";
import Experience from "./Experience.jsx";
import Project from "./Project.jsx";

function RightContent() {
    return (
        <div id="right-content-body">
            <About />
            <Experience isWork={true} />
            <Experience isWork={false} />
            <Project />
            <Certificate />
        </div>
    )
}

export default RightContent;