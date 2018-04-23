import Post from './Post.js';

class ImagePost  extends Post {
    constructor(post) {
        super(post);
        this.imageUrl = post.imageUrl
    }
}

export default ImagePost;