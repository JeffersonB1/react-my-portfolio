import classes from './Home.module.css'
import ballCode from './../../assets/img/proudCoder.svg'
import code from './../../assets/img/progressiveApp.svg'
const home = () => {
    return ( 
        <div className= {classes.Home} id="home">
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello</h1>
                <h1>Welcome to my website</h1>

            </div>
            <img className={classes.ballCode} src={ballCode} alt="ballCode"></img>
            <img className={classes.code} src={code} alt="code"></img>
        </div>
     );
}
 
export default home;