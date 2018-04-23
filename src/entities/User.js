class User {
    constructor(user){
        this.aboutShort = user.aboutShort;
        this.avatarUrl = user.avatarUrl;
        this.id = user.id;
        this.name = user.name;

        this.email = user.email;
        this.about = user.about;
        this.userId =user.userId;
        this.postsCount = user.postsCount;
        this.commentsCount = user.commentsCount;  
        this.lastPostDate = user.lastPostDate;
    }
}

export default User;