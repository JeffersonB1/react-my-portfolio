import React from 'react';
import classes from './Contact.module.css';
import { FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";

const handleURL = (url) => {
  return () => window.open(url, "_blank")
}

const Contact = () => {
    return (
        <div className={classes.Contact} id="contact">
            <div className={classes.ContactIcons}>

            <FaInstagramSquare color= 'white' size='30px' style={{padding: '1%'}}
            onClick = {handleURL("https://www.instagram.com/")}/>
            <FaGithub color= 'white' size='30px' style={{padding: '1%'}}
            onClick= {handleURL("https://github.com/JeffersonB1?tab=repositories")}/>
            <FaLinkedin color= 'white' size='30px' style={{padding: '1%'}}
            onClick={handleURL("https://www.linkedin.com/feed/")}/>
          </div>
        </div>
      );
}
 
export default Contact;