import React from 'react';
import './about.css'

function About(props) {
    return (
        <div className="about">
            <div className='ab-title'>
                <div>
                    <img src={require("./NN-2300 copy.jpg")} alt=""/>
                    <h2>
                        Arjun S K <br/>
                        MCA Student <br/>
                        Living in Kerala,Perinthalmanna <br/>
                        Born in 06 March 1998 <br/>
                        School: Electronics at Technical HSS, Perinthalmanna <br/>
                        Degree: BCA at St' Marys, Perintahalmanna <br/>
                        Master: MCA at MESCE, Kutippuram. <br/>
                    </h2>

                </div>
            </div>
            <div className='ab-me'>
            
            </div>
        </div>

    );
}

export default About;