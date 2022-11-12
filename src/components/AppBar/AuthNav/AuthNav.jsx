import { List, ListItem, LinkStyled, DivContainer } from "./AutNav.styles";

    
export default function AuthNav() {
  
    return(
        <DivContainer>
            <List>
                <ListItem>
                    <LinkStyled to="/login">
                        Login
                    </LinkStyled>
                </ListItem>
          
                <ListItem>
                    <LinkStyled to="/register">
                        Register
                    </LinkStyled> 
                </ListItem>
            </List>
        </DivContainer>
    )
};