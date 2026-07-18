<script setup>
import SidebarPanel from '../components/SidebarPanel.vue'
import { reservedSlots, slots, spaces } from '../data/mock'

defineEmits(['booking', 'error'])
</script>

<template>
  <div class="booking__layout">
    <div class="spaces">
      <article v-for="space in spaces" :key="space.title" class="space-card">
        <div class="space-card__photo" :style="{ backgroundImage: `url(${space.image})` }">
          <div class="space-card__tabs" aria-label="Переключатель информации">
            <button type="button">Фото</button>
            <button type="button">Информация</button>
          </div>
          <h2>{{ space.title }}</h2>
        </div>

        <div class="space-card__body">
          <div class="space-card__slots">
            <button
              v-for="slot in slots"
              :key="`${space.title}-${slot}`"
              type="button"
              :class="{ 'is-reserved': reservedSlots.includes(slot) }"
            >
              {{ slot }}
            </button>
          </div>

          <div class="space-card__actions">
            <button class="button button--primary" type="button" @click="$emit('booking')">Забронировать</button>
            <button class="button button--light" type="button" @click="$emit('error')">Подробнее</button>
          </div>
        </div>
      </article>
    </div>

    <SidebarPanel @error="$emit('error')" />
  </div>
</template>
