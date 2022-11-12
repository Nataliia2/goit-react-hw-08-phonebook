import { useSelector, useDispatch } from 'react-redux';
import { setContactFilter } from '../../redux/FilterSlice';
import { getStatusFilter } from '../../redux/selector';
import { Wrapper } from './ContactFilter.styles';
import { Label, Input } from 'components/Form/Form.style';

export const FilterContact = () => {
  const value = useSelector(getStatusFilter);
  const dispatch = useDispatch();
  
  const onChange = ev => {
    dispatch(setContactFilter(ev.currentTarget.value));

  };

  return (
    <Wrapper>
      <Label>Find contacts by name</Label>
      <Input
        autoComplete="off"
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </Wrapper>
  );
}
