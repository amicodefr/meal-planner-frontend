import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Получить все блюда
const getAllMeals = (setMeal) => {
  axios.get(`${API_URL}/`)
    .then(({ data }) => {
      console.log("All meals:", data);
      setMeal(Array.isArray(data) ? data : []); // безопасно
    })
    .catch(err => console.error(err));
}

// Добавить блюдо
const addMeal = (title, setTitle, setMeal) => {
  axios.post(`${API_URL}/saveMeals` , { title })
    .then(({ data }) => {
      console.log("Meal added:", data);
      setTitle(""); // очистка инпута
      getAllMeals(setMeal);
    })
    .catch(err => console.error(err));
}

// Редактировать блюдо
const editMeal = (mealId, title, setTitle, setMeal, setEditing) => {
  axios.put(`${API_URL}/${mealId}`, { title })
    .then(({ data }) => {
      console.log("Meal updated:", data);
      setTitle("");       // очистка инпута
      setEditing(false);  // выключаем режим редактирования
      getAllMeals(setMeal);
    })
    .catch(err => console.error(err));
}


// Удалить блюдо
const deleteMeal = (mealId, setMeal) => {
  axios.delete(`${API_URL}/${mealId}`)
    .then(({ data }) => {
      console.log("Meal deleted:", data);
      getAllMeals(setMeal);
    })
    .catch(err => console.error(err));
}

export { getAllMeals, addMeal, editMeal,deleteMeal };
