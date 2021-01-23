import Head from 'next/head';
import Link from 'next/link';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Header from '../components/header';
import Loader from '../components/loader';
import Post from '../components/post';
import { getPosts } from '../store/actions/creatorsApi';

const Wrapper = styled.div`
  .posts {
    margin: 0 auto;
    padding: 1rem;
    max-width: 1200px;
  }
`;

const Home: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state: PostsState) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Simple Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Wrapper>
        <div className="posts">
          {
            // prettier-ignore
            loading ? (
              <Loader />
            ) : (
                posts.map(post => {
                  const { id, title, body } = post;
                  return (
                    <Link href={`/posts/${id}`} key={id}>
                      <a href={`/posts/${id}`}>
                        <Post title={title} body={body} />
                      </a>
                    </Link>
                  );
                })
              )
          }
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
