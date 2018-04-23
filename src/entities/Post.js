class Post {
    constructor(post) {
        this.postComments = post.commentsNum;
        this.postUserId = post.userId;
        this.postUserName = post.userDisplayName;
        this.postId = post.id;
        this.type= post.type;
    }
}

export default Post;