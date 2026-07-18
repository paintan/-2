<script setup>
import CalendarPanel from './CalendarPanel.vue'
import InvitesList from './InvitesList.vue'

defineEmits(['error'])
</script>

<template>
  <aside class="sidebar" aria-label="Календарь и приглашения">
    <CalendarPanel />
    <InvitesList @error="$emit('error')" />
  </aside>
</template>
