<script>

</script>
<template>
  <nav>
    <div class="header">
      <div class="header__nav_box">
        <button class="header__nav_button">
          <NavLink to="/" class="header_link">
            <span class="header__nav_button_text">Конструктор</span>
          </NavLink>
        </button>
        <button class="header__nav_button">
          <NavLink to="/" class="header_link">
            <span class="header__nav_button_text">Orders</span>
          </NavLink>
        </button>
        <div class="logo">
          BurgersLogo
        </div>
        <NavLink to="/" class="header_link">
          <span class="header__nav_button_text">Profile</span>
        </NavLink>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding-top: 26px;
  padding-bottom: 26px;
  background: #1C1C21;
  box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
}

.header__nav_box {
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  align-items: flex-end;
}

.header__nav_button {
  text-align: center;
  display: flex;
  flex-direction: row;
}

.header__nav_button_text {
  cursor: pointer;
  margin-right: 28px;
  font-family: JetBrains Mono, sans-serif;
  margin-left: 11px;
}

.header_link {
  grid-area: 1 / 6 / 2 / 8;
  display: flex;
  flex-direction: row;
  margin: 0;
  align-items: flex-end;
  justify-content: center;
  text-decoration: none;
  color: #8585AD;
}

.logo {
  grid-area: 1 / 3 / 2 / 6;
  display: flex;
  justify-content: center;
}

</style>