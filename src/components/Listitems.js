import "./Listitem.css";
import { AiOutlineCheck } from "react-icons/ai";
import { ImBin } from "react-icons/im";

const ListItem = ({ text, deleteTodo, isChecked, toggleChecked }) => {
  return (
    <div className="todo">
      <div
        className={`${isChecked ? "todo__radio" : "todo__radio--unchecked"}`}
        onClick={toggleChecked}
      >
        {isChecked && <AiOutlineCheck />}
      </div>
      <div className={`${isChecked ? "todo__text-checked" : "todo__text"}`}>
        {text}
      </div>

      <div className="todo__delete" onClick={deleteTodo}>
        <ImBin />
      </div>
    </div>
  );
};

export default ListItem;
