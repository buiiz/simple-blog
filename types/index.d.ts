interface CommentType {
  id: number;
  body: string;
  postId: number;
}

interface PostType {
  id: string;
  title: string;
  body: string;
  comments: CommentType[];
}

interface PostsState {
  posts: PostType[];
  loading: boolean;
}

interface PostState extends PostType {
  loading: boolean;
}

type PostProps = {
  title: string;
  body: string;
};
