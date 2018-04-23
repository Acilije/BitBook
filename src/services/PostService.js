import TextPost from "../entities/TextPost";
import VideoPost from "../entities/VideoPost";
import ImagePost from "../entities/ImagePost";
import { authService } from './AuthenticationService';
import { SERVER_KEY } from '../shared/constants';


class PostService {
  fetchPost() {
    return fetch("http://bitbookapi.azurewebsites.net/api/Posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Key": SERVER_KEY,
        "SessionId": authService.getSessionId()
       
      }
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        return result.map(post => {
          if (post.type === "text") {
            return new TextPost(post);
          } else if (post.type === "image") {
            return new ImagePost(post);
          } else if (post.type === "video") {
            return new VideoPost(post);
          }
          
        })
      });
  }

  newTextPost(text) {
    return fetch("http://bitbookapi.azurewebsites.net/api/TextPosts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Key": SERVER_KEY,
        "SessionId": authService.getSessionId()
       
      },
      body: JSON.stringify({
        "text": text
      })
    }).then(response => response.json());
    
  }

  newImagePost(imageUrl) {
    return fetch("http://bitbookapi.azurewebsites.net/api/ImagePosts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Key": SERVER_KEY,
        "SessionId": authService.getSessionId()
      },
      body: JSON.stringify({
        "imageUrl": imageUrl
      })
    }).then(response => response.json());
    
  }


  newVideoPost(videoUrl) {
    return fetch("http://bitbookapi.azurewebsites.net/api/VideoPosts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Key": SERVER_KEY,
        "SessionId": authService.getSessionId()
        
      },
      body: JSON.stringify({
        "videoUrl": videoUrl
      })
    }).then(response => response.json());
    
  }

  singlePost(id, type){
    return fetch(`http://bitbookapi.azurewebsites.net/api/${type}/${id}`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Key": SERVER_KEY,
          "SessionId": authService.getSessionId()
      }
      
  })
      .then((response) => response.json())
      .then((postItem) => {
        if (postItem.type === "text") {
          return new TextPost(postItem);
        } else if (postItem.type === "image") {
          return new ImagePost(postItem);
        } else if (postItem.type === "video") {
          return new VideoPost(postItem);
        }
      }
    )
  }

  deletePost(id){
    return fetch(`http://bitbookapi.azurewebsites.net/api/Posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Key": SERVER_KEY,
        "SessionId": authService.getSessionId()
        
    }
  
   }
   )
  }

}


export const postService = new PostService();
