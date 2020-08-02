import React, {useState, useEffect} from 'react';
import './projects.css'

function Projetcs(props) {
    const [work,setWork]=useState([]);
    useEffect(() => {
        fetch('/api/notes/').then(response => response.json().then(data =>{
            let wrk = data;
            setWork(wrk.data);
            console.log(wrk);
            
        }))
    },[])
    return (
        <div className="proj-con">
            <div className='proj-h'>
                <h2>My works are</h2>
            </div>
            <ul>
                {work.map(wrk => {
                return(
                    <li key={wrk.key}>
                        <div className="h-card">
                            {wrk.name}
                        </div>
                        <div className="h-body">
                            using {wrk.tech}
                        </div>
                        <img src={wrk.img} alt=""/>
                    </li>
                )
                })}
            </ul>
        </div>
    );
}

export default Projetcs;