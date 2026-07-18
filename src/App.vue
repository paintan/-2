<script setup>
import { ref } from 'vue'
import AppNav from './components/AppNav.vue'
import BookingModal from './components/BookingModal.vue'
import ErrorModal from './components/ErrorModal.vue'
import EventModal from './components/EventModal.vue'
import HeroSection from './components/HeroSection.vue'
import { pages } from './data/mock'
import NotFoundPage from './pages/NotFoundPage.vue'
import PeoplePage from './pages/PeoplePage.vue'
import SpacePage from './pages/SpacePage.vue'

const currentPage = ref('space')
const isProfileOpen = ref(false)
const isErrorOpen = ref(false)
const activeModal = ref(null)

function setPage(page) {
  currentPage.value = page
  isProfileOpen.value = false
}

function showError() {
  isProfileOpen.value = false
  activeModal.value = null
  isErrorOpen.value = true
}

function openModal(modal) {
  isProfileOpen.value = false
  activeModal.value = modal
}
</script>

<template>
  <main class="landing">
    <HeroSection @error="showError" />

    <section id="app" class="app-page" :aria-label="currentPage === 'people' ? 'Люди' : 'Пространство'">
      <AppNav
        :current-page="currentPage"
        :is-profile-open="isProfileOpen"
        :pages="pages"
        @error="showError"
        @navigate="setPage"
        @toggle-profile="isProfileOpen = !isProfileOpen"
      />

      <PeoplePage v-if="currentPage === 'people'" @error="showError" @event="openModal('event')" />
      <SpacePage v-else-if="currentPage === 'space'" @booking="openModal('booking')" @error="showError" />
      <NotFoundPage v-else @home="setPage('space')" />
    </section>

    <BookingModal
      v-if="activeModal === 'booking'"
      @close="activeModal = null"
      @submit="showError"
    />
    <EventModal
      v-if="activeModal === 'event'"
      @close="activeModal = null"
      @submit="showError"
    />
    <ErrorModal v-if="isErrorOpen" @accept="isErrorOpen = false" />
  </main>
</template>
