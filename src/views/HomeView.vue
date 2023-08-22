<script setup lang="ts">
import { useMealStore } from '../stores/meals';

const mealStore = useMealStore();
mealStore.getRandomMeals();

</script>

<template>
  <main>
    <section class="meals">
      <div class="container-lg py-5">
        <h1 class="display-4 fw-bold mb-4 text-danger">Random Meals</h1>
        <div v-if="mealStore.loading" class="row">
          <div class="d-flex align-items-center">
            <strong role="status">Loading...</strong>
            <div class="spinner-border ms-auto" aria-hidden="true"></div>
          </div>
        </div>
        <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div class="col mb-4" v-for="meal in mealStore.randomMeals" :key="meal.idMeal">
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
    </section>
  </main>
</template>
