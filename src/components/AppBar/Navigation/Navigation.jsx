import { useLocation } from 'react-router-dom';
import { Nav, NavList, ListItem, LinkStyled } from "./Navigation.styled";

export default function Navigation() {
    const location = useLocation();
    const backHrefLink = location.state?.from ?? '/';
    return(        
            
        <Nav>
            <NavList>
                
                <ListItem>
                    <LinkStyled to={backHrefLink}>
                        Home
                    </LinkStyled>
                </ListItem>

                <ListItem>
                    <LinkStyled to="/contacts">
                        Contacts
                    </LinkStyled>
                </ListItem> 
            
            </NavList>
        </Nav>
    )
};