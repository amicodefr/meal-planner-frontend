import { useEffect, useState } from 'react';
import './App.css';
import MyMeals from './MyMeals';
import { getAllMeals, addMeal, editMeal,deleteMeal } from './FetchMeals';

function App() {
  const [myMeal, setMeal] = useState([]);       // массив блюд
  const [title, setTitle] = useState("");       // текст инпута
  const [editing, setEditing] = useState(false);// редактирование
  const [mealId, setMealId] = useState("");     // id текущего блюда

  // Получаем все блюда при монтировании
  useEffect(() => {
    getAllMeals(setMeal);
  }, []);

  // Когда кликаем "редактировать" — вставляем блюдо в инпут
  const updatingInInput = (_id, mealTitle) => {
    setEditing(true);
    setTitle(typeof mealTitle === "string" ? mealTitle : ""); // безопасно
    setMealId(_id);
  }

  return (
    <div className="App">
      <h1>Meal Plan</h1>

      <input
        type="text"
        placeholder="Add a meal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        onClick={() => {
          if (!title.trim()) return; // пустой текст не отправляем
          if (editing) {
            editMeal(mealId, title, setTitle, setMeal, setEditing);
          } else {
            addMeal(title, setTitle, setMeal);
          }
        }}
      >
        {editing ? "Edit" : "Add"}
      </button>

      {/* Рендерим только если myMeal — массив */}
      {Array.isArray(myMeal) && myMeal.map((meal) => (
        <MyMeals
          text={meal.title}
          key={meal._id}
          updatingInInput={() => updatingInInput(meal._id, meal.title)}
          deleteMyMeal={() => deleteMeal(meal._id, setMeal)} // можно добавить удаление позже
        />
      ))}
    </div>
  );
}

export default App;
