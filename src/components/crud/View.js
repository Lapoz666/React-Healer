import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import checkAuth from "../auth/checkAuth";

function ViewPost() {
    var user = useSelector(store=>store.auth.user);
    var {postId} = useParams()
    var [post,setPost] = useState({name:'',company:'',expiry_date:''})
    useEffect(()=>{
        axios.get('https://medicalstore.mashupstack.com/api/medicine/'+postId,
            {
                headers:{'Authorization':"Bearer "+ user.token}
        }).then(response=>{
            setPost(response.data)
        });
    },[postId,user]);
    return <div>
        <Navbar/>
        <div className="container">
        <div className='background-image'></div>
        <div className='man'>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header"><h3>{post.name}</h3></div>
                        <div className="card-body">{post.company}</div>
                        <div className="card-text">{post.expiry_date}</div>
                    </div>
                </div>
            </div>
        </div></div>
    </div>
}

export default checkAuth(ViewPost);