import Link from 'next/link';
import { FC } from 'react';
import { FaBloggerB } from 'react-icons/fa';
import styled from 'styled-components';

const Wrapper = styled.header`
  padding: 1rem;
  background: #86a397;

  .wrapper {
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: #01110a;
  }

  .logo h1 {
    margin: 0;
    font-weight: 500;
    font-size: 1.5rem;
    color: #01110a;
  }

  button {
    padding: 0.2rem 0.8rem;
    border: none;
    background: #73ba9b;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;

const Header: FC = (): JSX.Element => {
  return (
    <>
      <Wrapper>
        <div className="wrapper">
          <Link href="/">
            <a href="/" className="logo">
              <FaBloggerB color="#01110A" size={24} className="logo-icon" />
              <h1>Simple Blog</h1>
            </a>
          </Link>

          <Link href="/posts/new">
            <button type="button">new post</button>
          </Link>
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
