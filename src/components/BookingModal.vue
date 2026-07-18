<script setup>
import { eventOptions, reservedSlots, responsiblePeople, slots } from '../data/mock'

defineEmits(['close', 'submit'])
</script>

<template>
  <div class="form-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title">
    <form class="form-modal__card" @submit.prevent="$emit('submit')">
      <h2 id="booking-title">Бронирование</h2>

      <label class="form-field">
        <span>Мероприятие</span>
        <select>
          <option value="">Выберите мероприятие</option>
          <option v-for="event in eventOptions" :key="event">{{ event }}</option>
        </select>
      </label>

      <fieldset class="form-slots">
        <legend>Выберите время мероприятия</legend>
        <button
          v-for="slot in slots"
          :key="slot"
          type="button"
          :class="{ 'is-selected': reservedSlots.includes(slot) }"
        >
          {{ slot }}
        </button>
      </fieldset>

      <fieldset class="responsible-list">
        <legend>Ответственные лица</legend>
        <span v-for="person in responsiblePeople" :key="person">{{ person }}</span>
        <button type="button" aria-label="Добавить ответственного">+</button>
      </fieldset>

      <label class="form-field">
        <span>Дополнительная информация</span>
        <textarea rows="1" placeholder="Добавить комментарий"></textarea>
      </label>

      <div class="form-modal__actions">
        <button class="button button--primary" type="submit">Забронировать</button>
        <button class="button button--light" type="button" @click="$emit('close')">Отмена</button>
      </div>
    </form>
  </div>
</template>
