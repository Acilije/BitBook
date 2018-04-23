const moment = require('moment');
class Comment {
    constructor(comment){
        this.id = comment.id;
        this.dateCreated = moment.utc(comment.dateCreated).fromNow();
        this.body = comment.body;
        this.postId = comment.postId;
        this.authorName = comment.authorName;
        this.authorId = comment.authorId
    }
}

export default Comment;