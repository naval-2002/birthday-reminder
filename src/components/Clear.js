function Bottom({ handlechange }) {
  return (
    <div>
      <div>
        <button
          className="clearAll"
          onClick={() => {
            handlechange();
          }}
        >
          {" "}
          clear All
        </button>
      </div>
    </div>
  );
}
export default Bottom;
