import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type meals, type Response, type ResponseArray, type ResponseIngredients } from '../types/mealsType';
import axios from 'axios';

export const useMealStore = defineStore('Meal', () => {
  const randomMeals = ref<meals[]>([]);
  const byNameMeals = ref<meals[]>([]);
  const byLetterMeals = ref<meals[]>([]);
  const Ingredients = ref<string[]>([]);
  const MealsByIngredient = ref<meals[]>([]);
  const meal = ref<meals>({});
  const name = ref<string>('');
  const ingredient = ref<string>('');
  const loading = ref<boolean>(false);

  async function getRandomMeals() {
    randomMeals.value = [];
    loading.value = true;
    for (let i = 1; i < 10; i++) {
      const response : Response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      randomMeals.value.push(response.data.meals[0]);
    };
    loading.value = false;
  }

  async function getMeal(id: string) {
    loading.value = true;
    const baseURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
    const response : Response = await axios.get(baseURL+id);
    meal.value = response.data.meals[0];
    loading.value = false;
  }

  async function getNameMeals(data: string) {
    byNameMeals.value = [];
    loading.value = true;
    if (data) {
      const baseURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const response : ResponseArray = await axios.get(baseURL+data);
      byNameMeals.value = response.data.meals;
    } else {
      byNameMeals.value = [];
    };
    loading.value = false;
  }

  async function getLetterMeals(data: string) {
    byLetterMeals.value = [];
    loading.value = true;
    if (data) {
      const baseURL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
      const response : ResponseArray = await axios.get(baseURL+data);
      byLetterMeals.value = response.data.meals;
    } else {
      byLetterMeals.value = [];
    };
    loading.value = false;
  }

  async function getIngredients() {
    loading.value = true;
    const response : ResponseIngredients = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    Ingredients.value = response.data.meals.map(el => el.strIngredient);
    loading.value = false;
  }

  const computedIngredients = computed<string[]>(() => {
    return Ingredients.value.filter(el => el.toLowerCase().includes(ingredient.value.toLowerCase()));
  });

  async function getMealsByIngredient(data : string) {
    loading.value = true;
    const baseURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
    const response : ResponseArray = await axios.get(baseURL+data)
    MealsByIngredient.value = response.data.meals;
    loading.value = false;
  }

  return { randomMeals, meal, loading, byNameMeals, name, byLetterMeals, Ingredients, ingredient, computedIngredients, MealsByIngredient, getRandomMeals, getMeal, getNameMeals, getLetterMeals, getIngredients, getMealsByIngredient }
})
