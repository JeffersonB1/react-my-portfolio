import React from 'react';
import classes from './Projects.module.css'
import PageHeader from '../PageHeader/index';
import FinancialTracker from '../../assets/img/financial-tracker-screenshot.png'
import fruitbook from '../../assets/img/fruitbook-screenshot.png'


// const projectsMade = (url, thumbnail, description) => {
//     return(
//         <div className={classes.ProjectContainer}>
//             <div className={classes.Thumbnail}>
                
//                <a href="" target="_blank"> <img src={thumbnail} alt= "thumbnail"></img></a>
//             </div>
//             <div className={classes.Text}>
//                 <p>{description}</p>
//             </div>
//         </div>
//     )
// }




const Projects = () => {
    return ( 
        <div className={classes.Projects} id="projects">
            <PageHeader title= {"Take a look at my projects!"}/>
            <div className={classes.ProjectsContent}>
                <div className={classes.Paragraph}>
                    <p>
                        Introduction about  Introduction about projects, 
                        Introduction about  Introduction about projects, 
                        Introduction about  Introduction about projects, 
                        Introduction about  Introduction about projects, 
                        Introduction about  Introduction about projects, 
                        Introduction about  Introduction about projects, 
                    </p>
                </div> 

                <div className={classes.ProjectsPresent}>                          
                        <a href="https://emilyreddy.github.io/fruitbook/" target="_blank"> <img src={fruitbook} alt= "thumbnail"></img></a> 
                </div>

                <div className={classes.ProjectsPresent}>
                        <a href="https://sleepy-cliffs-13403.herokuapp.com/" target="_blank"> <img src={FinancialTracker} alt= "thumbnail"></img></a>
                </div>
                

            </div>
        </div>
     );
}
 
export default Projects;