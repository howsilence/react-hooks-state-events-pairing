import Comment from "./Comment"

function CommentContainer({comments}){

    const commentList = comments.map(commentObj => 
        <Comment comment={commentObj.comment}></Comment>)

    return(
       <div>
           <h3> {comments.length}Comments</h3>
           {commentList}
       </div>
    )
}

export default CommentContainer