<script setup lang="ts">
import { useMealStore } from '../stores/meals';
import { useRoute } from 'vue-router';

const Route = useRoute();
const id : any = Route.params.id;
const data = id.toLowerCase().replace(' ', '_');

const mealStore = useMealStore();
mealStore.getMealsByIngredient(data);

</script>

<template>
  <main>
    <section class="meals">
      <div class="container-lg py-5">
        <h1 class="display-4 fw-bold mb-4 text-danger">Meals for {{ $route.params.id }}</h1>
        <div v-if="mealStore.loading" class="row">
          <div class="d-flex align-items-center">
            <strong role="status">Loading...</strong>
            <div class="spinner-border ms-auto" aria-hidden="true"></div>
          </div>
        </div>
        <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div class="col mb-4" v-for="meal in mealStore.MealsByIngredient" :key="meal.idMeal">
            <RouterLink :to="{name: 'mealDetail', params: { id: meal.idMeal}}" class="text-decoration-none">
              <div class="card rounded-4 overflow-hidden shadow">
                <div class="card-top overflow-hidden">
                  <img :src="meal.strMealThumb" :alt="meal.strMeal" class="card-img-top img-fluid">
                </div>
                <div class="card-body p-4">
                  <p class="h3 card-title lh-base">{{ meal.strMeal }}</p>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
