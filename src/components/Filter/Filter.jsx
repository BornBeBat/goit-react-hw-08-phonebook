import { useDispatch, useSelector } from 'react-redux';

import { updateFilter } from 'myRedux';

import { Input, Label } from './Filter.styled';

export const Filter = ({ onChange }) => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="name"
        value={filter}
        onChange={event => dispatch(updateFilter(event.target.value))}
      />
    </Label>
  );
};
