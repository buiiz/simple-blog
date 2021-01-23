import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Header from '../../components/header';
import { createPost } from '../../store/actions/creatorsApi';

const Wrapper = styled.div`
  .post {
    margin: 1rem auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .title {
    font-size: 1rem;
  }

  .body {
    resize: none;
    font-size: 1rem;
  }

  .btn-post {
    align-self: center;
    font-size: 1rem;
  }
`;

const NewPost = (): JSX.Element => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const newPost = () => {
    if (title !== '' || body !== '') {
      dispatch(createPost(title, body));
      router.push('/');
    }
  };

  return (
    <>
      <Header />
      <Wrapper>
        <div className="post">
          <label>Title</label>
          <input
            className="title"
            type="text"
            value={title}
            placeholder="write title"
            onChange={e => setTitle(e.target.value)}
          />

          <label>Body</label>
          <textarea
            className="body"
            rows={30}
            value={body}
            placeholder="write some text"
            onChange={e => setBody(e.target.value)}
          />

          <button className="btn-post" type="button" onClick={newPost}>
            Create new post
          </button>
        </div>
      </Wrapper>
    </>
  );
};

export default NewPost;
