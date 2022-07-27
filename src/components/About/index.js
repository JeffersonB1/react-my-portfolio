import React from 'react';
import classes from './About.module.css'
import PageHeader from './../PageHeader/index';
import me from './../../assets/img/me.PNG'

function About() {
  return (
    <div className={classes.AboutMe} id="about">
      <PageHeader title={'About Me'}/>
      <div className={classes.Container}>
        <div className={classes.Text}>
          <h2>Hello! I'm Jefferson</h2>
          <p>
            I am a software developer graduated from UCF.I am a software developer graduated from UCF.
            I am a software developer graduated from UCF.I am a software developer graduated from UCF.
            I am a software developer graduated from UCF.I am a software developer graduated from UCF.
            I am a software developer graduated from UCF.I am a software developer graduated from UCF.
            I am a software developer graduated from UCF.I am a software developer graduated from UCF.
            I am a software developer graduated from UCF.I am a software developer graduated from UCF.
          </p>
        </div>
        <div className={classes.Photo}>
          <img className={classes.Me} src={me} alt= "me"></img>

        </div>
      </div>
    </div>
    
  );
}

export default About;