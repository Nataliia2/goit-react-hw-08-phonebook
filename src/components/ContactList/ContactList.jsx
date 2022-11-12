import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFilter, getError, getIsLoading } from '../../redux/selector';
import { deleteContact, fetchContact } from '../../redux/contacts/contactsOpetations';
import { List, Item, Button } from './ContactList.styles';
import Loader from '../Loder';

export const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(getFilter);
  const error = useSelector(getError);
  const loading = useSelector(getIsLoading);

  useEffect(() => { dispatch(fetchContact()) }, [dispatch]);
    
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
  
    return <>
    {error && <p>{error.message}</p>}
    {loading && <Loader>Загружаем</Loader>}
    <List>{itemList}</List>;
    </>
  };
