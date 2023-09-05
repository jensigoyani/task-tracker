import Button from "../common/Button";

const Header = ({ onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button name={showAdd ? "Close" : "Add"} onClick={onAdd} />
    </header>
  );
};

export default Header;
