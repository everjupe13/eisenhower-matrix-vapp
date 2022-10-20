<template>
  <header class="header">
    <div class="header__container">
      <div class="header__wrapper">
        <div class="logo">
          <router-link to="/" class="logo__link">MatrixApp</router-link>
        </div>
      </div>
    </div>
  </header>
</template>
<script>

export default {
    name: "header-element",
};
</script>

<style lang="scss">
.header {
  height: 50px;
  border-bottom: 1px solid #dfdede;

  background-color: var(--accent-color);

  &__container {
    height: 100%;
    padding: 0 40px;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100%;
  }
}

.logo {
  &__link {
    font-size: 24px;
    font-weight: 500;

    text-decoration: none;
    color: #fff
  }
}
</style>