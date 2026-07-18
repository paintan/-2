<script setup>
defineProps({
  currentPage: {
    type: String,
    required: true,
  },
  isProfileOpen: {
    type: Boolean,
    required: true,
  },
  pages: {
    type: Array,
    required: true,
  },
})

defineEmits(['navigate', 'toggle-profile', 'error'])
</script>

<template>
  <nav class="booking-nav" aria-label="Главное меню">
    <button class="booking-nav__logo" type="button" aria-label="Главная" @click="$emit('navigate', 'space')">
      <img src="../assets/353430-checkbox-edit-pen-pencil_107516 2.png" alt="" />
    </button>

    <div class="booking-nav__links">
      <button
        v-for="page in pages"
        :key="page.id"
        type="button"
        :class="{ 'is-active': currentPage === page.id }"
        @click="$emit('navigate', page.id)"
      >
        {{ page.label }}
      </button>
    </div>

    <div class="profile-menu">
      <button
        class="profile-menu__trigger"
        type="button"
        aria-label="Открыть меню профиля"
        :aria-expanded="isProfileOpen"
        @click="$emit('toggle-profile')"
      >
        <img
          class="booking-nav__avatar"
          src="../assets/3c3d65c74e500a0479ba179c5a276651291f5be8.png"
          alt=""
        />
      </button>

      <div v-if="isProfileOpen" class="profile-menu__dropdown" role="menu" aria-label="Меню профиля">
        <div class="profile-menu__head">
          <strong>Иван Иванов</strong>
          <button type="button" aria-label="Настройки">⚙</button>
        </div>
        <p>example@yandex.ru</p>
        <button class="button button--primary" type="button" @click="$emit('error')">Выход</button>
      </div>
    </div>
  </nav>
</template>
