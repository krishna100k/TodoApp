const headerstyle = { color: "#5F5C5C" };
const div = {
  backgroundColor: "white",
  height: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const Header = () => {
  return (
    <div style={div}>
      <h1 style={headerstyle}>Todo-List</h1>
    </div>
  );
};

export default Header;
