import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1rem;
  margin: 1rem;
  background: #d5f2e3;

  .title {
    margin-top: 0;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .body {
    margin-bottom: 0;
    font-size: 0.9rem;
    font-weight: 400;
  }
`;

const Post = ({ title, body }: PostProps): JSX.Element => {
  return (
    <>
      <Wrapper>
        <h2 className="title">{title}</h2>
        <p className="body">{body}</p>
      </Wrapper>
    </>
  );
};

export default Post;
