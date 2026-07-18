<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__shade"></div>

    <div class="hero__content">
      <div class="brand">
        <img
          class="brand__icon"
          src="../assets/353430-checkbox-edit-pen-pencil_107516 2.png"
          alt=""
          aria-hidden="true"
        />

        <div class="brand__text">
          <h1 id="hero-title">СБР</h1>
          <p>Сервис бронирования ресурсов</p>
        </div>
      </div>

      <div class="hero__actions" aria-label="Действия пользователя">
        <a class="hero__button" href="#app" @click.prevent="$emit('error')">Вход</a>
        <a class="hero__button" href="#app" @click.prevent="$emit('error')">Регистрация</a>
      </div>
    </div>

    <p class="hero__description">
      Рыбатекст используется дизайнерами, проектировщиками и фронтендерами,
      когда нужно быстро заполнить макеты или прототипы содержимым. Это
      тестовый контент, который не должен нести никакого смысла, лишь показать
      наличие самого текста или продемонстрировать типографику в деле.
    </p>
  </section>
</template>
