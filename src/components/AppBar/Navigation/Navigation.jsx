import { useLocation } from 'react-router-dom';
import { Nav, NavList, ListItem } from "./Navigation.styled";
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    const location = useLocation();
    const backHrefLink = location.state?.from ?? '/';
    return(        
            
        <Nav>
            <NavList>
                
                <ListItem>
                    <NavLink to={backHrefLink}>
                        Home
                    </NavLink>
                </ListItem>

                <ListItem>
                    <NavLink to="/contacts">
                        Contacts
                    </NavLink>
                </ListItem> 
            
            </NavList>
        </Nav>
    )
};