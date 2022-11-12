import { useSelector } from 'react-redux';
import { Navigate, Outlet} from 'react-router-dom';
import { getIsLoggedIn } from '../redux/selector';



export default function PrivateRoute() {
    const isLogged = useSelector(getIsLoggedIn);
  
    if (!isLogged) {
        return <Navigate to='/login'/>
    }
    return <Outlet />
}