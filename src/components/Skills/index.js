import React from 'react';
import classes from './Skills.module.css'
import PageHeader from './../PageHeader/index'
import skillThink from '../../assets/img/skillThink.svg'
const listTitleStyle = { fontWeight: 900, color: '#9B1FE8', marginBottom: '4px'}
const backendSkills =
   <ul>
      <li style={listTitleStyle}>BACKEND</li>
      <li>1</li>
      <li>2</li>  
   </ul>

const frontendSkills =
   <ul>
      <li style={listTitleStyle}>FRONTEND</li>
      <li>1</li>
      <li>2</li>  
   </ul>   

const otherSkills =
   <ul>
      <li style={listTitleStyle}>OTHER</li>
      <li>1</li>
      <li>2</li>  
   </ul> 
const totalSkills = [backendSkills, frontendSkills, otherSkills]   
   
   
const Skills = () => {
    return (
        <div className={classes.Skills} id="skills">
            <PageHeader title={'What about the Skills?'}/>
            <p>
              I'm a life long learner and enjoy learning new stuff
              I'm a life long learner and enjoy learning new stuff
              I'm a life long learner and enjoy learning new stuff
              I'm a life long learner and enjoy learning new stuff
              I'm a life long learner and enjoy learning new stuff
            </p>
            <div className={classes.Container}>
               <img src={skillThink} alt="skillthink"/>
              {totalSkills.map(skills => {
                return (
                  <div className={classes.List}>
                    {skills}
                  </div>
                )
              })}

            </div>
        </div>
      );
}
 
export default Skills;