import React, { useState, useEffect} from 'react'
import {addDoc, collection} from "firebase/firestore" 
import {db, auth} from "../firebase_config"
import {useNavigate} from "react-router-dom"

function CreatePost({isAuth}) {

    let navigate = useNavigate(); 

    // login first
    useEffect(() => {
    if(!isAuth){ 
        navigate("/login");}
    }, [])


    //title and post text variables
    const [title, setTitle] = useState(""); 
    const [post, setPost] = useState("");
   

    //firebase interaction
    const postCollectionRef = collection(db, "posts");
    const createPost = async()=>{
        console.log(title); 
        console.log(post);
        await addDoc(postCollectionRef, {
            title, post, 
            author: { 
                name: auth.currentUser.displayName, 
                id: auth.currentUser.uid
            }
        }); 
        navigate("/");

    }; 



    return (
        <div className = "createPostPage">
            <div className = "cpContainer"> 
            <h1>Create Your Post</h1>
            <div className="inputGp">
                <label> Title: </label>
                <input placeholder = "Title..." 
                onChange  = {(event) =>{ 
                    setTitle(event.target.value); 
                }}/>

           
            </div>
            <div className="inputGp">
                <label> Post: </label>
                <textarea placeholder = "Post..."
                  onChange  = {(event) =>{ 
                    setPost(event.target.value); 
                }}/>
                    
            
            </div>
            <button onClick = {createPost}> Submit</button>
            </div>
        </div>
    )
}

export default CreatePost
