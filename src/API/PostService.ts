import axios from "axios";

const PostSerive = class PostService{
    static async getHeadlines(){
        const response = axios.get('http://localhost:3000/news/headlines')
        return response
    }
}

export default PostSerive;