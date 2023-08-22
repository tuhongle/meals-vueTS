<script setup lang="ts">
import { onUnmounted } from 'vue';
import { useMealStore } from '../stores/meals';
const mealStore = useMealStore();

onUnmounted(() => {
  mealStore.byLetterMeals = [];
});
</script>

<template>
  <main>
    <section class="meals">
      <div class="container-lg py-5">
        <h1 class="display-3 fw-bold mb-4 text-danger">Meals by Letter</h1>
        <div class="letters d-flex justify-content-center mb-4 flex-wrap">
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('A')">
            <span class="display-6">A</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('B')">
            <span class="display-6">B</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('C')">
            <span class="display-6">C</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('D')">
            <span class="display-6">D</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('E')">
            <span class="display-6">E</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('F')">
            <span class="display-6">F</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('G')">
            <span class="display-6">G</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('H')">
            <span class="display-6">H</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('I')">
            <span class="display-6">I</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('J')">
            <span class="display-6">J</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('K')">
            <span class="display-6">K</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('L')">
            <span class="display-6">L</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('M')">
            <span class="display-6">M</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('N')">
            <span class="display-6">N</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('O')">
            <span class="display-6">O</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('P')">
            <span class="display-6">P</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('Q')">
            <span class="display-6">Q</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('R')">
            <span class="display-6">R</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('S')">
            <span class="display-6">S</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('T')">
            <span class="display-6">T</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('U')">
            <span class="display-6">U</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('V')">
            <span class="display-6">V</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('W')">
            <span class="display-6">W</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('X')">
            <span class="display-6">X</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('Y')">
            <span class="display-6">Y</span>
          </button>
          <button class="btn btn-transparent" @click="mealStore.getLetterMeals('Z')">
            <span class="display-6">Z</span>
          </button>

        </div>
        <div v-if="!mealStore.byLetterMeals.length">
          <p class="display-6">There are no meals</p>
        </div>
        <div v-else>
          <div v-if="mealStore.loading" class="row">
            <div class="d-flex align-items-center">
              <strong role="status">Loading...</strong>
              <div class="spinner-border ms-auto" aria-hidden="true"></div>
            </div>
          </div>
          <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div class="col mb-4" v-for="meal in mealStore.byLetterMeals" :key="meal.idMeal">
              <RouterLink :to="{name: 'mealDetail', params: { id: meal.idMeal}}" class="text-decoration-none">
                <div class="card rounded-4 overflow-hidden shadow">
                  <div class="card-top overflow-hidden">
                    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="card-img-top img-fluid">
                  </div>
                  <div class="card-body p-4">
                    <h3 class="card-title">
                      <span>{{ meal.strMeal.substring(0, 20) }}</span>
                      <span v-if="meal.strMeal.length > 20">...</span>
                    </h3>
                    <p class="card-text">{{ meal.strInstructions.substring(0, 100) }}...</p>
                    <button class="btn btn-danger">
                      <a :href="meal.strYoutube" class="text-light text-decoration-none" target="_blank">Youtube</a>
                    </button>
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
