<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg py-0 navbar-light align-items-center shadow">
    <div class="container-lg">
      <RouterLink :to="{name: 'home'}" class="navbar-brand py-4">
        <span class="display-5 fw-bold text-info">Meals Hunter</span>
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar-menu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item py-4 px-2 text-center">
            <RouterLink :to="{name: 'byName'}" class="nav-link"><span class="fs-4 fw-medium">Search Meals</span></RouterLink>
          </li>
          <li class="nav-item py-4 px-2 text-center">
            <RouterLink :to="{name: 'byLetter'}" class="nav-link"><span class="fs-4 fw-medium">Meals by Letter</span></RouterLink>
          </li>
          <li class="nav-item py-4 px-2 text-center">
            <RouterLink :to="{name: 'ingredients'}" class="nav-link"><span class="fs-4 fw-medium">Meals by Ingredients</span></RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView class="bg-secondary-subtle" />
</template>
