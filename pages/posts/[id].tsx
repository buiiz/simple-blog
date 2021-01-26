import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Header from '../../components/header';
import Loader from '../../components/loader';
import wrapper from '../../store';
import { getPost } from '../../store/actions/creators';
import { StoreType } from '../../store/reducers';

const Wrapper = styled.div`
  padding: 1rem;
  margin: 1rem;

  .post {
    margin: 0 auto;
    padding: 1rem;
    max-width: 1200px;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .body {
    font-size: 1.1rem;
    font-weight: 400;
  }
`;

const Post: FC = (): JSX.Element => {
  const post = useSelector((state: StoreType) => state.posts);
  const { posts, loading } = useSelector((state: StoreType) => state.posts);

  console.log(post);

  console.log(posts, loading);

  // useEffect(() => {
  //   dispatch(getPosts());
  //   console.log('dis');
  // }, [dispatch]);

  return (
    <>
      <Header />
      <Wrapper>
        <div className="posts">
          {/* {
            // prettier-ignore
            loading ?
              (
                <Loader />
              )
              :
              // prettier-ignore

              (
                <div className="post">
                  <h2 className="title">{post.title}</h2>
                  <p className="body">{post.body}</p>
                </div>
              )
          } */}
        </div>
      </Wrapper>
    </>
  );
};

export default Post;

export const getServerSideProps = wrapper.getServerSideProps(async ({ query, store }) => {
  await store.dispatch(getPost(query.id));
});
