import { Link } from 'react-router-dom';

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

const Navbar = () => {
  return (
    <div>
      <ul>
        {LINKS.map(item => 
        <Link to={item.to} key={item.to}>
          <li key={item.to}>{item.text}</li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
