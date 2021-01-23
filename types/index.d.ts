interface HeaderPropsType {
  children: React.ReactNode;
}

interface PostType {
  id: number | string;
  title: string;
  body: string;
}

interface PostsState {
  posts: PostType[];
  loading: boolean;
}

type PostProps = {
  title: string;
  body: string;
};
