import { useContext } from 'react';
import { Routes, Route} from 'react-router-dom';
import { Context } from '../index';
import { authRoutes, publicRoutes } from '../routes';
// import { SHOP_ROUTE } from '../utils/consts';


const AppRouter = () => {
  const {user} = useContext(Context);
  return (
    <Routes>
      {user.isAuth && authRoutes.map(({path, Component}) => 
      <Route key={path} path={path} element={<Component/>} exact/>
      )}
      {publicRoutes.map(({path, Component}) => 
      <Route key={path} path={path} element={<Component/>} exact/>
      )}
    </Routes>
  )
}

export default AppRouter;