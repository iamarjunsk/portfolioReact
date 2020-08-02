import React, {useState} from 'react';
import './admin.css'
import axios from 'axios'

function Admin(props) {
    const [name,setName]=useState("");
    const [tech,setTech]=useState("");
    const [image,setImage]=useState([]);
    const [save,setSave]=useState(1);
    const [imgname,setImgname]=useState('')
    // console.log(image.name);
    // const options={
    //     onUploadProgress:(ProgressEvent)=>{
    //         const {loaded, total} = ProgressEvent;
    //         let percent = Math.floor((loaded*100)/total)
    //         console.log(percent);
             
    //     }
    // }

    // {e => setImage(e.target.files)}
    return (
        <div className='admin'>
            <div>
                <input type="text" value={name} placeholder='Name' name="name" required onChange={e => setName(e.target.value)}/>
                <input type="text" placeholder='Tech' name="tech" required onChange={e => setTech(e.target.value)}/>
                <input type="file" name="image" onChange={e=>setImage(e.target.files)}/>
                <button onClick={async()=>{
                    console.log(image[0]);
                    
                    let data = new FormData();
                    data.append('file',image[0]);
                    axios.post('/api/addwork/img',data).then(res =>{
                        if(res.status){
                            setImgname(res.data);
                            setSave(0);
                        }
                        
                    } )
                }}>Upload image</button>
                <button disabled={save} onClick={async()=>{
                    if(name!=='' && tech !=='' && imgname!==''){
                        const work={name,tech,imgname};
                        const response = await fetch('/api/addwork',{
                            method:'POST',
                            headers:{'Content-Type':'application/json'},
                            body:JSON.stringify(work)
                        })
                        console.log(response);
                    }
                    else{
                        setName("Enter value")
                    }
                        
                    
                }
            
                }>Submit</button>
            </div>
            
            {/* <img src={image.src} alt=""/> */}
        </div>
    );
}

export default Admin;