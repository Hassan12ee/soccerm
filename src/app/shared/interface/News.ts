export interface News {
  status:       string;
  totalResults: number;
  articles:     Article[];
}

export interface Article {
  source:      Source;
  author:      null | string;
  title:       string;
  description: null | string;
  url:         string;
  urlToImage:  string;
  publishedAt: Date;
  content:     string;
}

export interface Source {
  id:   null | string;
  name: string;
}
