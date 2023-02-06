    import React from "react";
    import Tommyimage from "../Asset/tommyimage.jpg";
    import "../Style/About.css";
    import Progress2 from "./Progress2";
    import Typewriter from "typewriter-effect";


    const About = () => {
    return (
        <div className="about_cont">
        <div className="about_cont2">
            <h1 className="animate__animated animate__rubberBand ">ABOUT ME</h1>

            <div className="Tommyimg">
            <img
                className="animate__animated animate__shakeX"
                src={Tommyimage}
                alt=""
            />
            </div>
            <div className="About_text">
            <div className="flex left_align">
                <span className="alt-text-yellow">
                <Typewriter
                    options={{
                    strings: [" <h2 > I'm Oduba Ayotomiwa</h2>"],
                    autoStart: true,
                    loop: true,
                    cursor: "✍️",
                    pauseFor: 5000,
                    }}
                />
                </span>
            </div>
            </div>
            <div className="About_text1">
            <p>
                I'm a motivated Fullstack Developer{" "}
                <span className="frontend"> (FRONTEND HEAVY)</span> and a Computer
                Engineering Student with a
                keen interest in web development. competent in JavaScript,Python ,
                HTML, CSS, React and Django Frameworks. knowledgeable about Git and
                other version control systems, as well as agile development
                practices. strong problem-solving abilities and a willingness to
                learn and grow consistently.
            </p>{" "}
            </div>
            <h1 className="My_skill">My Skills</h1>
        </div>
        <Progress2 />
    
        </div>
    );
    };

    export default About;
