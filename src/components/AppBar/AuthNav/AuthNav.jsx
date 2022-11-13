import { List, ListItem, DivContainer } from "./AutNav.styles";
import { NavLink } from 'react-router-dom';
    
export default function AuthNav() {
  
    return(
        <DivContainer>
            <List>
                <ListItem>
                    <NavLink to="/login">
                        Login
                    </NavLink>
                </ListItem>
          
                <ListItem>
                    <NavLink to="/register">
                        Register
                    </NavLink> 
                </ListItem>
            </List>
        </DivContainer>
    )
};