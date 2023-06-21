import { NavBarContainer, NavBarLink, NavBarLogoDesktop } from './NavBarStyled';

export const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        <NavBarLink to={'/'}>
          <NavBarLogoDesktop
            src={'../../assets/images/pokedex-logo.svg'}
            alt="Pokedex logo"
          />
        </NavBarLink>
      </NavBarContainer>
    </>
  );
};
