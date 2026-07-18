<script setup>
defineEmits(['accept'])
</script>

<template>
  <div class="error-modal" role="dialog" aria-modal="true" aria-labelledby="error-title">
    <div class="error-modal__card">
      <h2 id="error-title">Ошибка</h2>
      <p>Неверный запрос. Обратитесь в техподдержку</p>
      <button class="error-modal__button" type="button" @click="$emit('accept')">Принять</button>
    </div>
  </div>
</template>
