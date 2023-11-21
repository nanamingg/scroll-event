const Header = ({ isHidden }) => {
  return (
    <div
      className={`bg-yellow-100 h-24 flex justify-center items-center text-2xl sticky top-0 ${
        isHidden && "bg-red-500"
      }`}
    >
      Header
    </div>
  );
};

export default Header;
