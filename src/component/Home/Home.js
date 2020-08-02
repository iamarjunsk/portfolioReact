import React from 'react';
import './style.css'
import {Link} from 'react-router-dom'
function Home(props) {
    return (
        <div>
            <div className="main">
                <div className="title-cont">
                    <h1>Hi, I'm <br/> Arjun <br/>A Full stack Freelance<br/> Web Develper <br/> <Link className='home-profile-link' to="/about">Profile</Link></h1>
                        
                </div>
            </div>
        </div>
    );
}

export default Home;