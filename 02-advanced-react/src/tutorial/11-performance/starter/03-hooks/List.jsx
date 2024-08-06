import Item from './Person';
import { memo } from 'react';
const List = ({ people, removePeople }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} removePeople={removePeople} />;
      })}
    </div>
  );
};
export default memo(List);
