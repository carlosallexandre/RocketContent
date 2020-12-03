import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Container,
  BreadCrumb,
  Stats,
  LinkButton,
  RepoIcon,
  StarIcon,
  ForkIcon,
  GithubIcon,
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <BreadCrumb>
        <RepoIcon />
        
        <Link className={'username'} to={'/carlosallexandre'}>
          carlosallexandre
        </Link>
        
        <span>/</span>

        <Link className={'reponame'} to={'/carlosallexandre/ui-clone-github'}>
          ui-clone-github
        </Link>
      </BreadCrumb>

      <p>Contains all UiClones...</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/carlosallexandre'}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;