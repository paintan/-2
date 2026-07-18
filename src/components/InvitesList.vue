<script setup>
import { invites } from '../data/mock'

defineEmits(['error'])
</script>

<template>
  <section class="invites" aria-label="Активные приглашения">
    <h2>Активные приглашения</h2>

    <article v-for="(invite, index) in invites" :key="`${invite.title}-${index}`" class="invite-card">
      <h3>{{ invite.title }}</h3>
      <div class="invite-card__meta">
        <span>{{ invite.time }}</span>
        <span>{{ invite.person }}</span>
        <span>{{ invite.role }}</span>
      </div>
      <div class="invite-card__actions">
        <button class="button button--primary" type="button" @click="$emit('error')">Подробнее</button>
        <button class="button button--light" type="button" @click="$emit('error')">Отклонить</button>
      </div>
    </article>
  </section>
</template>
