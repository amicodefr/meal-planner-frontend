
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const MyMeals = ({ text, updatingInInput, deleteMyMeal }) => {
  return (
    <div className="meal-card">
      <p className="meal-text">{text}</p>
      <div>
        <FaEdit
          className="icon-button"
          onClick={updatingInInput}
          title="Edit this meal"
          style={{ color: "#024d3d" }}
        />
        <MdDeleteForever
          className="icon-button"
          onClick={deleteMyMeal}
          title="Delete this meal"
          style={{ color: "red" }}
        />
      </div>
    </div>
  );
};

export default MyMeals;



