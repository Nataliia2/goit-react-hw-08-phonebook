import { useSelector } from 'react-redux';
import { Navigate, Outlet} from 'react-router-dom';
import { getIsLoggedIn } from '../redux/selector';



export default function PublicRoute() {
    const isLoged = useSelector(getIsLoggedIn);

  
    if (isLoged) {
        return <Navigate to='/contacts'/>
    }
    return <Outlet />
}