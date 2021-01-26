import Head from 'next/head';
import Link from 'next/link';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Header from '../components/header';
import Loader from '../components/loader';
import Post from '../components/post';
import wrapper from '../store';
import { getPosts } from '../store/actions/creators';
import { StoreType } from '../store/reducers';

const Wrapper = styled.div`
  .posts {
    margin: 0 auto;
    padding: 1rem;
    max-width: 1200px;
  }
`;

const Home = (): JSX.Element => {
  const { posts, loading } = useSelector((state: StoreType) => state.posts);

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

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  await store.dispatch(getPosts());
});
