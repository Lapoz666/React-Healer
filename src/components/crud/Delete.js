import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import checkAuth from "../auth/checkAuth";

function DeleteItem(props) {
    var user = useSelector(store => store.auth.user);
    function deletePost() {
        
        axios.delete('https://medicalstore.mashupstack.com/api/medicine/'+props.post.id,{
            headers:{"Authorization":"Bearer "+ user.token}
    }).then((response)=>{
            alert(response.data.message)
            props.refresh();
        })
    }
    return <div className="card">
    <div className="card-body">
        {props.post.name}
        <button type="button" className="btn btn-danger float-right" onClick={deletePost}>Delete</button>
        <Link to={"/crud/posts/"+props.post.id+"/edit"} className="btn btn-info float-right">Edit</Link>
        <Link to={"/crud/posts/"+props.post.id} className="btn btn-primary float-right">View</Link>
   

</div>
</div>
}
export default checkAuth(DeleteItem);