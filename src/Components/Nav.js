import React, { useEffect, useState } from 'react'
import "./Nav.css"

const Nav = () => {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", ()=> {
            if (window.scrollY > 100) {
                handleShow(true);
            }else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Netflix.png/120px-Logo_Netflix.png" 
                alt="Netflix Logo" 
                className="nav_logo"/>

<img 
                src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" 
                alt="Avatar Netflix Logo" 
                className="nav_avatar"/>
        </div>
    )
}

export default Nav
