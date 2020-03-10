<template>
  <div>
    <a
      v-scroll-to="'#top'"
      class="to-top"
    >
      <i class="material-icons">keyboard_arrow_up</i>
    </a>
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <nav class="footer-nav">
            <h3 class="footer-nav__title">PAGES</h3>
            <nuxt-link
              to="/"
              class="footer-nav__link"
            >Top</nuxt-link>
            <nuxt-link
              to="/about"
              class="footer-nav__link"
            >About</nuxt-link>
            <span
              to=""
              class="footer-nav__link footer-nav__link--disabled"
            >Recruit</span>
            <span
              to=""
              class="footer-nav__link footer-nav__link--disabled"
            >Contact</span>
          </nav>
          <nav class="footer-nav">
            <h3 class="footer-nav__title">OTHER</h3>
            <span
              to=""
              class="footer-nav__link footer-nav__link--disabled"
            >Privacy</span>
            <span
              to=""
              class="footer-nav__link footer-nav__link--disabled"
            >Help</span>
          </nav>
          <div class="footer-company">
            <div class="footer-company__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103716.78149427827!2d139.6401769282195!3d35.67332262044678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2z5p2x5Lqs6YO9!5e0!3m2!1sja!2sjp!4v1544604493310"
                allowfullscreen />
            </div>
          </div>
          <div class="footer-bottom">
            <p class="footer-copy">&copy; Mock.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
.footer {
  text-align: center;
  font-size: 12px;
  padding: 100px 0 32px;
  border-top: 1px solid #eee;
  @media screen and (max-width: 700px) {
    padding-top: 50px;
  }
}

.footer-bottom {
  grid-column: 1 / 4;
  @media screen and (max-width: 700px) {
    grid-column: 1 / 3;
  }
}

.footer-company {
  &__map {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    height: 200px;
    width: 100%;
    display: block;
    iframe {
      border: none;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 700px) {
    grid-column: 1 / 3;
  }
}

.footer-grid {
  display: grid;
  grid-gap: 100px 24px;
  grid-template-columns: 200px 200px 1fr;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 48px 24px;
  }
}

.footer-nav {
  text-align: left;
  &__title {
    font-weight: bold;
    margin-bottom: 16px;
    font-size: 16px;
  }
  &__link {
    display: block;
    padding: 8px 0;
    &--disabled {
      opacity: 0.3;
    }
  }
}

.to-top {
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
</style>
