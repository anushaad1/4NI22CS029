export interface Comment {
    id: number;
    postid: number;
    content: string;
  }
  
  export interface Post {
    id: number;
    userid: number;
    title: string;
  }
  
  export interface User {
    id: number;
    name: string;
  }