interface PropTypes {
  image: string;
  title: string;
  desc: string;
}

const CategoriesCard = (props: PropTypes) => {
  const { image, title, desc } = props;
  return (
    <div className="w-full h-36 rounded-lg flex">
      <img
        src={image}
        alt="furniture-1"
        className="object-cover h-36 w-40 rounded-l-lg"
      />
      <div
        className="w-full h-36 rounded-r-lg flex flex-col justify-center gap-2 p-2"
        style={{ backgroundColor: "#09334c" }}
      >
        <h1 className="text-white font-bold">{title}</h1>
        <p className="text-sm text-white font-light">{desc}</p>
      </div>
    </div>
  );
};

export default CategoriesCard;
