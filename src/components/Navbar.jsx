import { NavLink,Link } from 'react-router-dom';
import styled, { css }  from 'styled-components';

// lets create an array of links for our navigation bar
const LINKS = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Starred',
    to: '/starred',
  },
];

// below is the styled 'ul' component

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
  li {
    margin: 0 10px;
  }
`;

const LinkStyled = styled(NavLink)`
  display: block;
  padding: 3px 15px;
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.mainColors.gray};
  &.active {
    color: ${({ theme }) => theme.mainColors.blue};
    &:after {
      content: '';
      position: absolute;
      display: block;
      height: 2px;
      left: 0%;
      bottom: 0;
      background-color: ${({ theme }) => theme.mainColors.blue};
      animation: slide-in 0.3s ease-in forwards;
      @keyframes slide-in {
        from {
          left: 50%;
          width: 0;
        }
        to {
          left: 0%;
          width: 100%;
        }
      }
    }
  }
`;
const Navbar = () => {
  return (
    <div>
      <NavList>
        {LINKS.map(item => (
          <LinkStyled to={item.to} key={item.to}>
            <li key={item.to}>{item.text}</li>
          </LinkStyled>
        ))}
      </NavList>
    </div>
  );
};

export default Navbar;
