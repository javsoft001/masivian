import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
  return (
    <div className="spinner">
      <ClipLoader
        color={'"#20ade8"'}
        className="spinner"
        loading={true}
        size={150}
      />
    </div>
  );
};

export default Spinner;
