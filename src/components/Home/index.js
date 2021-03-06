import { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-b.png'
import {Link} from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['r', 'i', 't','n','e','y'];
    const jobArray = ['S', 'o', 'f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r','.'];

    useEffect(() => {
         setTimeout(() => {
            setLetterClass('text-animate-hover');
        
        }, 4000)
    }, []);

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span> 
                    <span className={`${letterClass} _12`}>i,</span> 
                    <br />
                    <span className={`${letterClass} _13`}>I</span> 
                    <span className={`${letterClass} _14`}>'m</span> 
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15} />
                    
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22} />
                     </h1>
                     <h2>Full Stack Developer / Blogger</h2>
                     <Link to="/portfolio/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home 