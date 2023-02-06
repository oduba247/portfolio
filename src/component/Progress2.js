    import React from "react";
    import "../Style/Progress2.css";
    import { TiHtml5 } from "react-icons/ti";
    import { IoLogoCss3 } from "react-icons/io";
    import { SiBootstrap } from "react-icons/si";
    import { FaReact } from "react-icons/fa";
    import { TbBrandJavascript } from "react-icons/tb";
    import { SiPython } from "react-icons/si";
    import { GiAutoRepair } from "react-icons/gi";
    import { DiDjango } from "react-icons/di";

    import { Container } from "react-bootstrap";

    const Progress2 = () => {
    return (
        <div >
        <Container>
            <h2 className="skill">FRONTEND</h2>
            <div className="card_cont">
            <div className="card">
                <h3>
                {" "}
                HTML <TiHtml5 />
                </h3>
            
            </div>
            <div className="card">
                <h3>
                {" "}
                CSS <IoLogoCss3 />
                </h3>
            
            </div>
            <div className="card">
                <h3>
                {" "}
                JAVASCRIPT <TbBrandJavascript />
                </h3>
            
            </div>
            <div className="card">
                <h3>
                {" "}
                REACT JS <FaReact />
                </h3>
            
            </div>
            <div className="card">
                <h3>
                {" "}
                BOOTSTRAP <SiBootstrap />
                </h3>
            
            </div>
            </div>
        </Container>
        <Container>
            <h2 className="skill">BACKEND</h2>
            <div className="card_cont">
            <div className="card">
                <h3>
                {" "}
                PYTHON <SiPython />
                </h3>
                
            </div>
            <div className="card">
                <h3>
                {" "}
                DJANGO <DiDjango />
                </h3>
            </div>
            </div>
        </Container>
        <Container>
            <h2 className="skill">HARDWARE</h2>
            <div className="card_cont">
            <div className="card">
                <h3>
                {" "}
                COMPUTER REPAIR <GiAutoRepair />
                </h3>
                
            </div>
            
            </div>
        </Container>
        </div>
    );
    };

    export default Progress2;
