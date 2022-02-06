import video from "../data/video.js";
import React, {useState} from "react";
import MainContainer from "./MainContainer"
import CommentContainer from "./CommentContainer.js";
import VideoDisplay from "./VideoDisplay.jsx";

//1 When the app loads, display a video along with its details and a list of all the comments

//2 When a user clicks on the "👍" button, the number of upvotes for the video should increase

//3 When a user clicks on the "👎" button, the number of downvotes for the video should increase

//4 When the user clicks the "Hide Comments" button, the comments should be removed from the page, and the button text should change to "Show Comments". When the button is clicked again, it should toggle back to showing the comments.


function App() {
  const [videoObj, setVideoObj] = useState(video)
  console.log(videoObj)
  const [toggleComments, setToggleComments] = useState(true)

  function handleToggleComments(){
    setToggleComments(currentToggleState => !currentToggleState)
  }



  function addUpVote(){
      const newObj = {...videoObj} 
      newObj.upvotes = videoObj.upvotes +1
      
      
      setVideoObj(newObj)
    }

    function addDownVote(){
      const newObj = {...videoObj} 
      newObj.downvotes = videoObj.downvotes +1
      setVideoObj(newObj)
    }
  
  return (
    <div className="App">
      <VideoDisplay embedUrl={videoObj.embedUrl} />

      <MainContainer 
      title={videoObj.title}
      createdAt={videoObj.createdAt}
      views={videoObj.views}
      upvotes={videoObj.upvotes}
      downvotes={videoObj.downvotes}
      toggleComments={toggleComments}
      handleToggleComments={handleToggleComments}
      addUpVote={addUpVote}
      addDownVote={addDownVote}
      
      />
      {toggleComments ?  <CommentContainer comments={videoObj.comments}/> : null }
     
    </div>
  );
}

export default App;
