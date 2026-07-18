<script setup>
defineEmits(['home'])
</script>

<template>
  <div class="not-found">
    <div class="not-found__content">
      <p>404</p>
      <h1>Страница не найдена</h1>
      <span>Этот раздел пока не подключен к сервису бронирования.</span>
      <button class="button button--primary" type="button" @click="$emit('home')">Вернуться к пространствам</button>
    </div>
  </div>
</template>
