<template>
  <div>
    <Menu />
    <section data-pg-name="Page-Content" data-pgc-field="pagebody">
      <section class="header-gradient" data-pg-name="Header" style="padding-bottom: 10rem;">
        <div class="container-sm pb-3 pt-5">
          <div class="pb-4 pt-4 row text-white">
            <div class="col-md-8 col-xl-6 d-flex flex-column justify-content-center">
              <h1 class="display-1 i18n">
                {{ $t('main_title_tag1') }}<br>{{ $t('main_title_tag2') }}<br>
              </h1>
              <p class="i18n w-75">
                {{ $t('main_text_tag1') }} <strong>{{ $t('main_text_tag2') }}</strong>
              </p>
            </div>
            <div class="col-md-4 col-xl-6 d-flex justify-content-center">
              <object type="image/svg+xml" data="/img/home%20hero%20V3.svg" class="mw-100" />
            </div>
          </div>
        </div>
      </section>
      <div>
        <svg
          viewBox="0 0 1440 185"
          preserveAspectRatio="none"
          fill="currentColor"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          class="d-block text-white"
          width="100%"
          height="160"
          style="margin-top: -160px;"
        >
          <path d="M0 185 H 1440 V 60 C 1114 355 700 35 516 35 C 333 35 246 199 0 60 V 185 Z" />
        </svg>
      </div>
      <section id="moo.mainbox" data-pg-name="Main Box Section">
        <div class="container mb-5 mt-n4">
          <div class="bg-light border border-primary g-sm-3 home-apps-title p-3 p-md-4 pb-lg-3 pe-lg-5 ps-lg-5 pt-lg-3 rounded" style="margin-top: -5rem; position: relative;">
            <h2 class="display-2 i18n mb-0 mt-3 text-center">
              {{ $t('Modal_header_tag') }}
            </h2>
            <h3 class="fw-light mb-4 text-center">
              {{ $t('Modal_header_text') }}
            </h3>
            <div class="justify-content-center row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 text-center text-lg-start text-md-center">
              <div class="col col-lg-4">
                <h5 class="display-6 home-apps-title">
                  {{ $t('Modal_title1') }}
                </h5>
                <div class="d-inline-flex home-apps-box p-2 pb-2 pe-1 ps-1 pt-2">
                  <div>
                    <img src="/img/apps/wordpress.png" class="home-app-icon">
                  </div>
                  <!-- <div>
                      <img src="/img/apps/MatomoLogo.png"/>
                  </div>-->
                  <div>
                    <img src="/img/png/WooCommerce.png" class="home-app-icon">
                  </div>
                  <div>
                    <img src="/img/apps/grav.icon.png" class="home-app-icon">
                  </div>
                  <div>
                    <img src="/img/apps/ghost2.png" class="home-app-icon">
                  </div>
                </div>
                <p>{{ $t('Modal_text1') }}</p>
              </div>
              <div class="col col-lg-4">
                <h2 class="display-6 home-apps-title">
                  {{ $t('Modal_title2') }}
                </h2>
                <div class="d-inline-flex home-apps-box p-2 pb-2 pe-1 ps-1 pt-2">
                  <div>
                    <img src="/img/apps/NextcloudMailLogo.png" class="home-app-icon">
                  </div>
                  <div>
                    <img src="/img/apps/OnlyOfficeLogo.png" class="home-app-icon">
                  </div>
                  <div>
                    <img src="/img/apps/CollaboraLogo.png" class="home-app-icon">
                  </div>
                </div>
                <p>{{ $t('Modal_text2') }}</p>
              </div>
              <div class="col col-lg-4">
                <h2 class="display-6 home-apps-title">
                  {{ $t('Modal_title3') }}
                </h2>
                <div class="d-inline-flex home-apps-box pb-2 pe-1 ps-1 pt-2">
                  <div>
                    <img src="/img/apps/RoundCubeLogo.png" class="home-app-icon">
                  </div>
                  <div>
                    <img src="/img/apps/RainloopLogo.png" class="home-app-icon">
                  </div>
                  <div>
                    <img src="/img/apps/FreescoutLogo.png" class="home-app-icon">
                  </div>
                  <div>
                    <img src="/img/apps/SogoLogo.png" class="home-app-icon">
                  </div>
                </div>
                <p>{{ $t('Modal_text3') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-white mt-5" data-pg-name="Titolo 2 - il massimo della tech">
        <div class="container">
          <div class="row">
            <div class="align-items-center d-flex flex-column mb-5 mt-5">
              <h2 class="display-2 i18n text-center">
                {{ $t('Second_header_title') }}
              </h2>
              <p class="display-4 i18n text-center w-75">
                {{ $t('Second_header_text') }}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section data-pg-name="Card Servizi" class="mb-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 mt-5">
              <div class="bg-primary card h-100 text-white">
                <div class="card-body">
                  <object width="75" class="mt-n5  position-absolute" style="right:0; top:0" data="/img/condiviso gestito.svg" type="image/svg+xml" />
                  <h4 class="card-title i18n mt-3">
                    {{ $t('Second_tag_modal1_title') }}
                  </h4>
                  <p class="card-text">
                    {{ $t('Second_tag_modal1_text') }}
                  </p>
                  <a class="btn font-weight-bold i18n pl-0 position-sticky ps-0 stretched-link text-light top-100" href="/Managed_Hosting">{{ $t('Find more') }} &gt;</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mt-5">
              <div class="bg-primary card h-100 text-white">
                <div class="card-body">
                  <object width="75" class="mt-n5  position-absolute" style="right:0; top:0" data="/img/dedicato.svg" type="image/svg+xml" />
                  <h4 class="card-title i18n mt-3">
                    {{ $t('Second_tag_modal2_title') }}
                  </h4>
                  <p class="card-text i18n">
                    {{ $t('Second_tag_modal2_text') }}
                  </p>
                  <a class="btn font-weight-bold i18n pl-0 position-sticky ps-0 stretched-link text-light top-100" href="/cloud-dedicato">{{ $t('Find more') }} &gt;</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mt-5">
              <div class="bg-primary card h-100 text-white">
                <div class="card-body">
                  <object width="75" class="mt-n5  position-absolute" style="right:0; top:0" data="/img/condiviso gestito.svg" type="image/svg+xml" />
                  <h4 class="card-title i18n mt-3">
                    {{ $t('Second_tag_modal3_title') }}
                  </h4>
                  <p class="card-text i18n">
                    {{ $t('Second_tag_modal3_text') }}
                  </p>
                  <a class="btn font-weight-bold i18n pl-0 position-sticky ps-0 stretched-link text-light top-100" href="/Managed_Hosting">{{ $t('Find more') }} &gt;</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mt-5">
              <div class="bg-primary card h-100 text-white">
                <div class="card-body">
                  <object width="75" class="mt-n5  position-absolute" style="right:0; top:0" data="/img/app.svg" type="image/svg+xml" />
                  <h4 class="card-title i18n mt-3">
                    {{ $t('Second_tag_modal4_title') }}
                  </h4>
                  <p class="card-text i18n">
                    {{ $t('Second_tag_modal4_text') }}
                  </p>
                  <a class="btn font-weight-bold i18n pl-0 position-sticky ps-0 stretched-link text-light top-100" href="/Managed_Hosting">{{ $t('Find more') }} &gt;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <svg
          viewBox="0 0 1440 134"
          preserveAspectRatio="none"
          fill="currentColor"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          class="bg-light d-block  text-white"
          width="100%"
          height="160"
          style="margin-top: -160px;"
        >
          <path d="M 0 0 H 1440 V 60 C 854 276 596 -66 0 60 V 0 Z" />
        </svg>
      </div>
      <section data-pg-name="Titolo 3 - Piattaforma Hosting" class="bg-light bot-footer-image pt-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img src="/img/Banner-Home.svg" class="w-50" style="max-width: 14rem;">
              <h3 class="fs-1 fw-bolder i18n mt-3">
                {{ $t('Third_header_title') }}
              </h3>
              <p class="display-4 i18n pt-3">
                {{ $t('Third_header_text') }}
              </p>
            </div>
            <div class="col-md-6">
              <div>
                <h5><b class="i18n">{{ $t('Third_tag_title1') }}</b></h5>
                <p class="i18n">
                  {{ $t('Third_tag_text1') }}
                </p>
              </div>
              <div>
                <h5><b class="i18n">{{ $t('Third_tag_title2') }}</b></h5>
                <p class="i18n">
                  {{ $t('Third_tag_text2') }}
                </p>
              </div>
              <div>
                <h5><b class="i18n">{{ $t('Third_tag_title3') }}</b></h5>
                <p class="i18n">
                  {{ $t('Third_tag_text3') }}
                </p>
              </div>
              <div>
                <h5><b class="i18n">{{ $t('Third_tag_title4') }}</b></h5>
                <p class="i18n">
                  {{ $t('Third_tag_text4') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style="margin-bottom: -160px;">
        <svg
          viewBox="0 0 1440 185"
          preserveAspectRatio="none"
          fill="currentColor"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          class="bg-light d-block text-white"
          width="100%"
          height="160"
        >
          <path d="M0 185 H 1440 V 60 C 1114 355 700 35 516 35 C 333 35 246 199 0 60 V 185 Z" />
        </svg>
      </div>
      <section data-pg-name="Titolo 3 - WordPress Gestito Super Veloce" class="pb-5 pt-5">
        <div class="container mt-4">
          <div class="row">
            <div class="col-md-6">
              <div>
                <h5 data-pgc-edit="titolo">
                  <b class="i18n">{{ $t('Fourth_tag_title1') }}</b>
                </h5>
                <p data-pgc-edit="testo" class="i18n">
                  {{ $t('Fourth_tag_text1') }}
                </p>
              </div>
              <div>
                <h5 data-pgc-edit="titolo">
                  <span class="badge float-right ps-0 text-primary" style="font-size: 0.8rem;">Closed Beta</span><b class="i18n">{{ $t('Fourth_tag_title2') }}</b>
                </h5>
                <p data-pgc-edit="testo" class="i18n">
                  {{ $t('Fourth_tag_text2') }}
                </p>
              </div>
              <div style="text-align: left;">
                <h5 data-pgc-edit="titolo">
                  <b class="i18n">{{ $t('Fourth_tag_title3') }}</b>
                </h5>
                <p data-pgc-edit="testo" class="i18n">
                  {{ $t('Fourth_tag_text3') }}
                </p>
              </div>
              <div style="text-align: left;">
                <h5 data-pgc-edit="titolo">
                  <b class="i18n">∞ {{ $t('Fourth_tag_title4') }}</b>
                </h5>
                <p data-pgc-edit="testo" class="i18n">
                  {{ $t('Fourth_tag_text4') }}
                </p>
              </div>
            </div>
            <div class="align-items-end col-md-6 flex-column justify-content-center order-first order-md-last text-left text-md-right">
              <img src="/img/png/Banner%20Mail%203.png" class="img-fluid w-50" data-pgc-edit="immagine">
              <h3 class="display-1 i18n mt-3" data-pgc-edit="titolo">
                {{ $t('Fourth_header_title') }}
              </h3>
              <p class="display-4 i18n pt-3" data-pgc-edit="sotto titolo">
                {{ $t('Fourth_header_text') }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
    <Footer />
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectedValue: ''
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales
    }
  },
  created () {
    this.selectedValue = this.$i18n.locale
  },
  methods: {
    onChange (event) {
      this.$router.replace(this.switchLocalePath(event))
    }
  }
}
</script>
