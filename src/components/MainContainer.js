function MainContainer({title, createdAt, upvotes, downvotes, views, handleToggleComments, toggleComments, addUpVote, addDownVote}){


    return(
        <div>
            <h1>{title}</h1>
            <h2>{views} Views | Uploaded {createdAt}</h2>
            <button onClick={addUpVote}>{upvotes}👍</button>
            <button onClick={addDownVote}>{downvotes}👎</button>
            <button onClick={handleToggleComments}>{toggleComments ? "Hide Comments" : "Show Comments"}</button>
        </div>
    )
}

export default MainContainer