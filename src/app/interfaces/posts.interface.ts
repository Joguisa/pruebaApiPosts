export interface Post {
  userId?: number;
  id?: number;
  title: string;
  body: string;
  postId: number;
  name: string;
  email: string;
}

export interface Comentario {
  postId?: number;
  id?: number;
  name: string;
  email: string;
  body: string;
}
