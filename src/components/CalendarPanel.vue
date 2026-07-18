<script setup>
import { computed, ref } from 'vue'

const monthNames = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]

const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
const visibleDate = ref(new Date(2023, 11, 1))
const selectedDate = ref(new Date(2023, 11, 13))

const title = computed(() => `${monthNames[visibleDate.value.getMonth()]} ${visibleDate.value.getFullYear()}`)

const weeks = computed(() => {
  const year = visibleDate.value.getFullYear()
  const month = visibleDate.value.getMonth()
  const firstDay = new Date(year, month, 1)
  const startOffset = (firstDay.getDay() + 6) % 7
  const start = new Date(year, month, 1 - startOffset)

  return Array.from({ length: 6 }, (_, weekIndex) =>
    Array.from({ length: 7 }, (_, dayIndex) => {
      const date = new Date(start)
      date.setDate(start.getDate() + weekIndex * 7 + dayIndex)

      return {
        date,
        day: date.getDate(),
        isCurrentMonth: date.getMonth() === month,
        isWeekend: dayIndex > 4,
        isSelected: date.toDateString() === selectedDate.value.toDateString(),
      }
    }),
  )
})

function changeMonth(direction) {
  visibleDate.value = new Date(
    visibleDate.value.getFullYear(),
    visibleDate.value.getMonth() + direction,
    1,
  )
}

function selectDate(date) {
  selectedDate.value = date
}
</script>

<template>
  <section class="calendar" aria-label="Календарь">
    <div class="calendar__head">
      <h2>{{ title }}</h2>
      <div class="calendar__controls">
        <button type="button" aria-label="Предыдущий месяц" @click="changeMonth(-1)">‹</button>
        <button type="button" aria-label="Следующий месяц" @click="changeMonth(1)">›</button>
      </div>
    </div>

    <div class="calendar__grid">
      <span v-for="weekday in weekdays" :key="weekday" class="calendar__weekday">{{ weekday }}</span>

      <template v-for="(week, weekIndex) in weeks" :key="weekIndex">
        <button
          v-for="day in week"
          :key="day.date.toISOString()"
          type="button"
          :class="[
            'calendar__day',
            { 'is-muted': !day.isCurrentMonth },
            { 'is-weekend': day.isWeekend },
            { 'is-selected': day.isSelected },
          ]"
          @click="selectDate(day.date)"
        >
          {{ day.day }}
        </button>
      </template>
    </div>
  </section>
</template>
