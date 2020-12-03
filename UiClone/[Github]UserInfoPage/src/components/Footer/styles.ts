import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 32px 25px;

  &::before {
    content: '';
    width: 100%;
    max-width: 1280px;
    height: 1px;
    background: var(--border);
    margin-bottom: 25px;
  }
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--border);
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;
