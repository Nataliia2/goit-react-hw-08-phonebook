import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../redux/contacts/auth-operetion';
import { getErrorAuth } from "../../redux/selector";
import { Form, Input, Button, Label, Div, Title, ErrorText } from "./Login.style";


export default function LoginForm() {
    const dispatch = useDispatch();
    const isError = useSelector(getErrorAuth)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        
        switch(name) {
          case "email":
            return setEmail(value); 
          case "password":
            return setPassword(value); 
          default:
          return;
        }
      };

 

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({email, password}));
        setEmail('');
        setPassword('');
    };



    return(

        <Div>
             <Title>Please log in </Title>
            {isError && <ErrorText>Oops, something went wrong, try again!</ErrorText>}
            <Form onSubmit={handleSubmit}>
                <Label>
                    <Input
                      type="email"
                      name="email"
                      title="For example user@mail.com"
                      required
                      onChange={handleInputChange}
                      value={email}    
                      id={email}   
                      placeholder="user@mail.com"
                    /> 
                </Label>
          
                <Label>
                    <Input
                      type="password"
                      name="password"
                      required
                      onChange={handleInputChange}
                      value={password}  
                      id={password}  
                            
                    />  
                </Label>
              <Button type="submit">Login</Button>
            </Form>
        </Div>

    )
}