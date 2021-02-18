const DataSheet = ({ comic }) => {
  //Datos del comic
  const { title, img } = comic;
  return (
    <div>
      <h2>{title}</h2>
      <img className="center" src={img} />
    </div>
  );
};

export default DataSheet;
