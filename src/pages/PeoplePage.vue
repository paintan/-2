<script setup>
import { computed, ref } from 'vue'
import SidebarPanel from '../components/SidebarPanel.vue'
import { people } from '../data/mock'

defineEmits(['error', 'event'])

const searchQuery = ref('')
const sortMode = ref('alphabet')
const roleFilter = ref('all')

const roleOptions = computed(() => {
  return [...new Set(people.map((person) => person.role))]
})

const filteredPeople = computed(() => {
  const normalizedQuery = searchQuery.value.trim().toLowerCase()

  return people
    .filter((person) => {
      const matchesRole = roleFilter.value === 'all' || person.role === roleFilter.value
      const searchableText = `${person.name} ${person.role} ${person.description}`.toLowerCase()
      const matchesSearch = normalizedQuery === '' || searchableText.includes(normalizedQuery)

      return matchesRole && matchesSearch
    })
    .slice()
    .sort((first, second) => {
      if (sortMode.value === 'role') {
        return first.role.localeCompare(second.role, 'ru') || first.name.localeCompare(second.name, 'ru')
      }

      return first.name.localeCompare(second.name, 'ru')
    })
})
</script>

<template>
  <div class="people-page__layout">
    <div class="people-content">
      <div class="people-toolbar" aria-label="Фильтры людей">
        <label class="search-field">
          <span class="sr-only">Поиск</span>
          <input v-model="searchQuery" type="search" placeholder="Поиск" />
          <span aria-hidden="true">⌕</span>
        </label>

        <label class="sort-button">
          <span aria-hidden="true">≡</span>
          <select v-model="sortMode" aria-label="Сортировка">
            <option value="alphabet">По алфавиту</option>
            <option value="role">По роли</option>
          </select>
          <span aria-hidden="true">⌄</span>
        </label>

        <label class="role-filter">
          <span class="sr-only">Роль</span>
          <select v-model="roleFilter" aria-label="Фильтр по роли">
            <option value="all">Все роли</option>
            <option v-for="role in roleOptions" :key="role" :value="role">{{ role }}</option>
          </select>
        </label>

        <button class="add-button" type="button" @click="$emit('event')">
          <span>Добавить</span>
          <span aria-hidden="true">＋</span>
        </button>
      </div>

      <div class="people-grid">
        <article v-for="(person, index) in filteredPeople" :key="`${person.name}-${index}`" class="person-card">
          <div class="person-card__photo" :style="{ backgroundImage: `url(${person.image})` }">
            <span>{{ person.role }}</span>
          </div>

          <div class="person-card__info">
            <h2>{{ person.name }}</h2>
            <p>{{ person.description }}</p>
            <div class="person-card__actions">
              <button class="button button--primary" type="button" @click="$emit('error')">Пригласить</button>
              <button class="button button--light" type="button" @click="$emit('error')">Подробнее</button>
            </div>
          </div>
        </article>
      </div>

      <div v-if="filteredPeople.length === 0" class="people-empty">
        <h2>Ничего не найдено</h2>
        <p>Попробуйте изменить запрос или выбрать другую роль.</p>
      </div>
    </div>

    <SidebarPanel @error="$emit('error')" />
  </div>
</template>
