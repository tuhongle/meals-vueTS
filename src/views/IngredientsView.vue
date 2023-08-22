<script setup lang="ts">
import { useMealStore } from '../stores/meals';
const mealStore = useMealStore();

mealStore.getIngredients();
</script>

<template>
  <main>
    <section class="ingredients">
      <div class="container-lg py-5">
        <h1 class="display-3 fw-bold mb-4 text-danger">Ingredients</h1>
        <input type="text" class="form-control py-3 ps-3 fs-3 mb-4 shadow-sm" placeholder="Search for Ingredients" v-model="mealStore.ingredient" @keydown.enter="mealStore.getNameMeals(mealStore.name)">
        <div v-if="mealStore.loading" class="row">
          <div class="d-flex align-items-center">
            <strong role="status">Loading...</strong>
            <div class="spinner-border ms-auto" aria-hidden="true"></div>
          </div>
        </div>
        <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div class="col mb-4" v-for="ingredient in mealStore.computedIngredients" :key="ingredient">
            <RouterLink :to="{name: 'ingredient', params: { id: ingredient}}" class="text-decoration-none">
              <div class="card rounded-4 overflow-hidden shadow">
                <div class="card-body p-4">
                  <h3 class="card-text">{{ ingredient }}</h3>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
