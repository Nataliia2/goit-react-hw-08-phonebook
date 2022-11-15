import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from '../../redux/contacts/auth-operetion';
import { getErrorAuth } from '../../redux/selectors';
import { DivBox, TitleBox, FormBox, InputBox, Button, ErrorText } from "./Register.style";


export default function RegisterForm() {
    const dispatch = useDispatch();
    const isError = useSelector(getErrorAuth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(register({name, email, password}));
        setEmail('');
        setName('');
        setPassword('');
        };
   
    
    const handleChange = e => {
        const {name, value} = e.target;
        
        switch(name) {
          case "name":
            return setName(value);
          case "email":
            return setEmail(value); 
          case "password":
            return setPassword(value); 
          default:
          return;
        }
      };
    
    return(

        <DivBox>
            <TitleBox>Page registration </TitleBox>
            {isError && <ErrorText>Oops, something went wrong, try again!</ErrorText>}

        
            <FormBox onSubmit={handleSubmit}>
                <label>
                  <InputBox
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                    value={name}    
                    id={name}   
                    placeholder="Name"         
                /> 
                </label>
          
                <label>
                    <InputBox
                      type="email"
                      name="email"
                      required
                      onChange={handleChange}
                      value={email}    
                      id={email}  
                      placeholder="E-mail"        
                    /> 
                </label>
          
                <label>
                    <InputBox
                      type="password"
                      name="password"
                      required
                      onChange={handleChange}
                      value={password}  
                      id={password} 
                      placeholder="Password"             
                    />  
                </label>
              <Button type="submit">Ok</Button>
            </FormBox>
        </DivBox>

    )
}