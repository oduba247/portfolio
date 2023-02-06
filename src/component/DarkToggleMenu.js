        import React from 'react'
        import { useEffect } from 'react'
        import '../Style/DarkToggleMenu.css'
        
        const DarkModeToggle = () => {
        useEffect(() => {
            if (localStorage.getItem("dark")) {
            document.body.classList.add("dark");
            }
        }, []);
        
        return (
            <div className='toggle'>
            <label>
                <input className='inputting' type="checkbox" onClick={handleToggled} />
                <span className="switch"> <span className="handle" /> </span>
            </label>
            </div>
        )
        }
        const handleToggled = () => {
        document.body.classList.toggle("dark");
        localStorage.setItem("dark", document.body.className);
        };
        
        
        export default DarkModeToggle