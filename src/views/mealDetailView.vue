<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useMealStore } from '../stores/meals'

const Route = useRoute();
const mealStore = useMealStore();

const id : any = Route.params.id;
mealStore.getMeal(id);
</script>

<template>
    <main>
        <section class="meal-detail">
            <div class="container-lg py-5">
                <div class="row">
                    <div v-if="mealStore.loading" class="row">
                        <div class="d-flex align-items-center">
                            <strong role="status">Loading...</strong>
                            <div class="spinner-border ms-auto" aria-hidden="true"></div>
                        </div>
                    </div>
                    <div v-else class="col-12 col-md-10 col-lg-8 mx-auto">
                        <h1 class="fw-bold text-danger mb-4">{{ mealStore.meal.strMeal }}</h1>
                        <img :src="mealStore.meal.strMealThumb" :alt="mealStore.meal.strMeal" class="card-img-top">
                        <div class="row my-4">
                            <div class="col-4 lead"><span class="fw-bold fs-4 me-2">Category:</span> {{ mealStore.meal.strCategory }}</div>
                            <div class="col-4 lead"><span class="fw-bold fs-4 me-2">Area:</span> {{ mealStore.meal.strArea }}</div>
                            <div class="col-4 lead"><span class="fw-bold fs-4 me-2">Tags:</span> {{ mealStore.meal.strTags }}</div>
                        </div>
                        <p class="lead lh-lg" style="white-space: pre-line">{{ mealStore.meal.strInstructions }}</p>
                        <div class="row my-4">
                            <div class="col-6">
                                <h3 class="display-6 fw-bold mb-4">Ingredients</h3>
                                <p class="fs-4" v-for="n in 20" :key="n">
                                    <span v-if="mealStore.meal['strIngredient'+n]"><span class="fw-bold fst-italic opacity-50">{{ n }}.</span> {{ mealStore.meal['strIngredient'+n] }}</span>
                                </p>
                            </div>
                            <div class="col-6">
                                <h3 class="display-6 fw-bold mb-4">Measures</h3>
                                <p class="fs-4" v-for="n in 20" :key="n">
                                    <span v-if="mealStore.meal['strMeasure'+n] !== '' && mealStore.meal['strMeasure'+n] !== ' ' && mealStore.meal['strMeasure'+n] !== null"><span class="fw-bold fst-italic opacity-50">{{ n }}.</span> {{ mealStore.meal['strMeasure'+n] }}</span>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col d-flex align-items-center">
                                <button class="btn btn-lg btn-danger me-5">
                                    <a :href="mealStore.meal.strYoutube" class="text-light text-decoration-none" target="_blank">Youtube</a>
                                </button>
                                <a :href="mealStore.meal.strSource" class="text-decoration-none fs-3" target="_blank">View Originial Source</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

