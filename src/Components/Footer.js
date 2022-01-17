import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";



const Footer = () => {
    return (
        <footer>
            <div className="col">
            
            <h1>
              <li>06-18550487</li>
              <li>ralf.v.eck@gmail.com</li>
            </h1>
            <h4>Gemaakt door Ralf van Eck &copy;</h4>
          </div>
          <div className="socials">
          <a className="link" href="https://www.linkedin.com/in/ralf-van-eck/" target="_blank" rel="noreferrer">
                <FaLinkedin 
                    style ={{
                        fill: "#5b5b5b",
                        background: "white"
                    }}/>
            </a>
            <a className="git" href="https://github.com/Simbagiiiooo" target="_blank" rel="noreferrer">
                <FaGithub
                    style ={{
                        fill: "black",
                        background: "white"
                    }} />
            </a>
            </div>
        </footer>
    )
}

export default Footer
