import { Outlet } from 'react-router-dom';
// outlet allows us to render children components inside a layout
import Navbar from './Navbar';
import Apptitle from './Apptitle';
const MainLayout = () => {
  return (
    <div>
      <Apptitle/>
      <Navbar />

      
      <Outlet />
    </div>
  );
};
export default MainLayout;
