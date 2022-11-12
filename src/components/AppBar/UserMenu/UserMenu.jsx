import { useDispatch, useSelector } from "react-redux";
import { DivBox, Button, Name, Mail } from "./UserMenu.style";
import { getUserName, getUserEmail } from '../../../redux/selector';
import { logout } from "../../../redux/contacts/auth-operetion";


export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const email = useSelector(getUserEmail);



    return(
      <DivBox>
        <Name>{name}</Name>
        <Mail>{email}</Mail>
        <Button type="button" onClick={() => dispatch(logout())}>Logout</Button>
      </DivBox>
    )
};