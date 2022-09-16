import { useContext } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import { Context } from '../index';
import { authRoutes, publicRoutes } from '../routes';
// import { SHOP_ROUTE } from '../utils/consts';


const AppRouter = () => {
  const {user} = useContext(Context);
  console.log(user);
  return (
    <Routes>
      {/* <Route  path='' element={<h1>qwert</h1>} /> */}
      {user.isAuth && authRoutes.map(({path, Component}) => 
      <Route key={path} path={path} element={<Component/>} exact/>
      )}
      {publicRoutes.map(({path, Component}) => 
      <Route key={path} path={path} element={<Component/>} exact/>
      )}
      {/* {<Navigate to={SHOP_ROUTE} replace={true} />} */}
    </Routes>
  )
}

export default AppRouter;