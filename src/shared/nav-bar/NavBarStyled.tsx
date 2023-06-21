import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarContainer = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  background: var(--bg-navbar);
  border-bottom: 2px solid #f5f7f9;
  @media (min-width: 1024px) {
    height: 56px;
  }
`;

export const NavBarLogoDesktop = styled.img`
  padding-left: 4.5rem;
  width: 160px;
  @media (min-width: 1024px) {
    display: block;
    width: 180px;
  }
`;

export const NavBarLink = styled(Link)`
  width: 100%;
`;
