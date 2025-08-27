// src/types/newsapi.d.ts
declare module "newsapi" {
  export interface Article {
    source: { id: string | null; name: string };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
  }

  export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
  }

  export interface TopHeadlinesResponse {
    status: "ok" | "error";
    totalResults?: number;
    articles?: Article[];
    code?: string;
    message?: string;
  }

  export interface EverythingResponse {
    status: "ok" | "error";
    totalResults?: number;
    articles?: Article[];
    code?: string;
    message?: string;
  }

  export interface SourcesResponse {
    status: "ok" | "error";
    sources?: Source[];
    code?: string;
    message?: string;
  }

  export default class NewsAPI {
    constructor(apiKey: string);

    v2: {
      topHeadlines(params: {
        country?: string;
        category?: string;
        sources?: string;
        q?: string;
        pageSize?: number;
        page?: number;
      }): Promise<TopHeadlinesResponse>;

      everything(params: {
        q?: string;
        qInTitle?: string;
        sources?: string;
        domains?: string;
        excludeDomains?: string;
        from?: string;
        to?: string;
        language?: string;
        sortBy?: "relevancy" | "popularity" | "publishedAt";
        pageSize?: number;
        page?: number;
      }): Promise<EverythingResponse>;

      sources(params?: {
        category?: string;
        language?: string;
        country?: string;
      }): Promise<SourcesResponse>;
    };
  }
}
