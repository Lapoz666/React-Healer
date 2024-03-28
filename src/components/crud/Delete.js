import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import checkAuth from "../auth/checkAuth";

function DeleteItem(props) {
    var user = useSelector(store => store.auth.user);
    let navigate = useNavigate();
    function deletePost() {
        
        axios.delete('https://medicalstore.mashupstack.com/api/medicine/'+props.post.id,{
            headers:{"Authorization":"Bearer "+ user.token}
    }).then((response)=>{
            alert(response.data.message)
        })
        navigate('/list');
    }
    return <div className="card">
    <div className="card-body">
        {props.post.name}
        <button type="button" className="btn btn-danger float-right" onClick={deletePost}><i class="fa-regular fa-trash-can"></i></button>
        <Link to={"/crud/posts/"+props.post.id+"/edit"} className="btn btn-info float-right"><i class="fa-solid fa-pencil"></i></Link>
        <Link to={"/crud/posts/"+props.post.id} className="btn btn-primary float-right"><i class="fa-solid fa-eye"></i></Link>
   

</div>
</div>
}
export default checkAuth(DeleteItem);