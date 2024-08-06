const Person = ({ name, removePeople, id }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button className="btn" onClick={() => removePeople(id)}>
        remove
      </button>
    </div>
  );
};
export default Person;
