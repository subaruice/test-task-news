import axios from "axios";

const PostService = class PostService {
    static async getHeadlines(category?: string, query?: string, pageSize?: number) {
        const response = await axios.get("http://localhost:3000/news/headlines", {
            params: {
                category: category,
                q: query,
                pageSize: pageSize,
            },
        });
        return response;
    }
    static async getHeadlinesByCategory(category?: string, query?: string, pageSize?: number) {
        const response = await axios.get(`http://localhost:3000/news${category}`, {
            params: {
                q: query,
                pageSize: pageSize,
            },
        });
        return response;
    }
    static async getSideItems() {
        const response = await axios.get(`http://localhost:3000/news/sideItems`);
        return response;
    }
    static async getArticleByQuery(query?: string, pageSize?: number) {
        const response = await axios.get(`http://localhost:3000/news/search`, {
            params: {
                q: query,
                pageSize: pageSize,
            },
        });
        return response;
    }
};

export default PostService;
