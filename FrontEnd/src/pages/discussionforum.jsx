import React, { useEffect, useState } from 'react'
import NavBar from '../components/Navbar/Navbar'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import discussion from "../images/discussion.png"
import { useNavigate } from 'react-router-dom';
const DiscussionForum = () => {
    const [comments, setComments] = useState([])
    const navigate = useNavigate()
    const [query, setQuery] = useState("")
    useEffect(() => {
        const getAllDiscussion = async () => {
            const data = await fetch(`https://marinefarms-production.up.railway.app/getcomments`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const discussionDetails = await data.json()
            setComments(discussionDetails)
        }
        getAllDiscussion()
    }, [])

    const handleAddComment = async () => {
        try {
            const data = await fetch(`https://marinefarms-production.up.railway.app/addcomment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    comment: query,
                    date: new Date()
                })
            })
            console.log(data)
            const discussionDetails = await data.json()
            alert("Comment Added Successfully")
            setTimeout(() => {
                navigate('/discussionforum')
            }, 3000)

        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="onb-container">
            <NavBar />
            <div className="firstPara"></div>
            <div className="links">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                    }}
                >
                    <img src={
                        discussion
                    }
                        width={30}
                        height={40}
                    />
                    <h2
                        style={{
                            marginTop: "5px",
                            marginBottom: "5px",
                            fontWeight: "bold",
                            fontSize: "1.5rem",
                            marginLeft: '10px'
                        }}
                    >DISCUSSION FORUM</h2>
                </div>

            </div>
            <TextField
                id="outlined-multiline-static"
                label="Type your queries here"
                rows={10}
                style={
                    {
                        width: "60%",
                        marginTop: "5px",
                    }
                }
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Button
                style={{
                    backgroundColor: "#41B3FF", color: "white",
                    marginLeft: "-50rem",

                }}
                onClick={() => { handleAddComment() }}
                size="medium" variant="contained">
                Post
            </Button>
            {
                comments.map((comment) => {
                    return (
                        <div
                            className="comment">
                            <div

                                className="commenter">
                                {/* <img src={comment.profilePic} width={50} height={50} /> */}
                                <h4 style={{ marginLeft: "-460px" }}>{
                                    Date(comment.date).toString().slice(0, 15)
                                }</h4>
                                <p style={{ marginLeft: "-460px" }}>{comment.comment}</p>
                            </div>
                            {/* <div className="commentText">
                                {comment.da}
                            </div> */}
                        </div>
                    )
                }
                )
            }

        </div>
    )
}

export default DiscussionForum