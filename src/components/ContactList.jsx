
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selector';
import { deleteContact } from '../redux/contacts/contactsOpetations';
import { List, Item, Button } from './ContactList.styles';

export const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(getFilter);

    const itemList = items.map(({ id, name, number }) => {
      return (
        <Item key={id}>
          {name}: {number}
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </Item>
      );
    });
  
    return <List>{itemList}</List>;
  };
