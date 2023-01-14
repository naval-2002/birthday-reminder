function Page(props) {
  const { image, name, age, id } = props.data;

  return (
    <div className="page">
      <img src={image} className="image"></img>
      <div className="info">
        <h5>{name}</h5>
        <p>{age} years</p>
      </div>
      <button
        className="single-button"
        type="button"
        onClick={() => {
          props.clear(id);
        }}
      >
        clear
      </button>
    </div>
  );
}
export default Page;
