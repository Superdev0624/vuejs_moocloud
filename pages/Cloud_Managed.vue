<template>
  <div>
    <Menu @currencyChanged="getValue" />
    <section data-pgc-field="pagebody">
      <section class="bg-light pb-5 pt-5" data-pg-name="Titolo 1- Cloud managed">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1 class="display-1 i18n text-capitalize" data-pgc-edit="Titolo pagina">
                {{ $t('CD_FT_header') }}
              </h1>
              <h2 class="display-2 i18n" data-pgc-edit="sottotitolo pagina">
                {{ $t('CD_FT_explain') }}
              </h2>
              <h4 class="display-4 i18n" data-pgc-edit="sottotitolo pagina">
                {{ $t('CD_FT_header_text') }}&nbsp;
              </h4>
              <p class="fs-5 mb-0">
                {{ $t('CD_FT_title') }}
              </p>
              <div class="d-flex justify-content-start ">
                <div class="align-items-center d-inline-flex pe-3">
                  <div>
                    <img src="/img/png/MicroICONA-tecnologie%202.png" width="50px">
                  </div>
                  <p class="mb-0">
                    <b /> Apps
                  </p>
                </div>
                <div class="align-items-center d-inline-flex pe-3">
                  <div>
                    <img src="/img/png/MicroICONA-tecnologie%206.png" width="50px">
                  </div>
                  <p class="mb-0">
                    <b /> Users
                  </p>
                </div>
                <div class="align-items-center d-inline-flex pe-3">
                  <div>
                    <img src="/img/png/MicroICONA-tecnologie%203.png" width="50px">
                  </div>
                  <p class="mb-0">
                    Domain
                  </p>
                </div>
              </div>
              <p class="fw-lighter" style="font-size: 0.8rem;">
                {{ $t('CD_FT_text') }}
              </p>
            </div>
            <div class="col-md-6 d-flex justify-content-center justify-content-md-end">
              <img src="/img/dedicato-new-animata.svg" width="250" class="float-right" data-pgc-edit="immagine">
            </div>
          </div>
        </div>
      </section>
      <div style="margin-bottom: -160px;">
        <svg
          viewBox="0 0 1440 134"
          preserveAspectRatio="none"
          fill="currentColor"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          class="bg-white d-block text-light"
          width="100%"
          height="160"
        >
          <path d="M 0 0 H 1440 V 60 C 854 276 596 -66 0 60 V 0 Z" />
        </svg>
      </div>
      <section data-pg-name="Piano Personalizato" class="mb-5">
        <Toggle v-on:periodChange="dataChange" />
        <Dynamic v-bind:onselectCurrency= "chooseCurrency" v-bind:onselectPeriod= "choosePeriod" :family="'dedicated'" />
        <div class="container pl-4 pr-4">
          <div class="bg-white border border-primary justify-content-center position-relative rounded row">
            <div class="col-md-10 col-sm-11 col-xl-8 p-2 text-center">
              <h3 />
              <h3 data-pgc-edit="testo" class="i18n">
                {{ $t('CD_FT_modal_header') }} <a href="/Managed_Hosting" class="text-body text-decoration-none">Hosting Gestito</a>?
              </h3>
              <p data-pgc-edit="sotto testo " class="i18n">
                {{ $t('CD_modal_text') }}
              </p>
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
          class="bg-light d-block text-white"
          width="100%"
          height="160"
          style="margin-top: -160px;"
        >
          <path d="M 0 0 H 1440 V 60 C 1114 355 700 35 516 35 C 333 35 246 199 0 60 V 0 Z" />
        </svg>
      </div>
      <section data-pg-name="Titolo 2 -Caratteristiche del Hosting Cloud" class="bg-light  pb-5 pt-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img src="/img/condiviso%20gestito.svg" class="img-fluid w-50">
              <h3 class="display-1 i18n mt-3" data-pgc-edit="titolo">
                {{ $t('CD_second_tag_header') }}
              </h3>
              <p class="display-4 i18n pt-3" data-pgc-edit="sotto titolo">
                {{ $t('CD_second_tag_explain') }}
              </p>
            </div>
            <div class="col-md-6">
              <div>
                <h5><b data-pgc-edit="titolo" class="i18n">{{ $t('CD_second_title1') }}  </b></h5>
                <p data-pgc-edit="testo">
                  {{ $t('CD_second_text1') }}
                </p>
              </div>
              <div>
                <h5><b data-pgc-edit="titolo" class="i18n">{{ $t('CD_second_title2') }}</b></h5>
                <p data-pgc-edit="testo" class="i18n">
                  {{ $t('CD_second_text2') }}
                </p>
              </div>
              <div>
                <h5><b data-pgc-edit="titolo" class="i18n">{{ $t('CD_second_title3') }}</b></h5>
                <p data-pgc-edit="testo" class="i18n">
                  {{ $t('CD_second_text3') }}
                </p>
              </div>
              <div>
                <h5><b data-pgc-edit="titolo" class="i18n">{{ $t('CD_second_title4') }}</b></h5>
                <p class="i18n mb-2" data-pgc-edit="testo">
                  {{ $t('CD_second_text4') }}
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
          class="d-block text-light"
          width="100%"
          height="160"
        >
          <path d="M 0 0 H 1440 V 60 C 1114 355 700 35 516 35 C 333 35 246 199 0 60 V 0 Z" />
        </svg>
      </div>
      <section data-pg-name="Titolo 3 - WordPress Gestito Super Veloce" class="bg-white pb-5 pt-5">
        <div class="container position-relative">
          <div class="row">
            <div class="col-md-6">
              <div>
                <h5 data-pgc-edit="titolo">
                  <span class="badge badge-primary float-right text-primary" style="font-size: 0.8rem;">Open Beta</span><b class="i18n">{{ $t('MH_TH_txt_title1') }}</b>
                </h5>
                <p data-pgc-edit="testo" class="i18n">
                  {{ $t('MH_TH_txt_text1') }}
                </p>
              </div>
              <div>
                <h5 data-pgc-edit="titolo">
                  <span class="badge badge-primary float-right text-primary" style="font-size: 0.8rem;">Open Beta</span><b class="i18n">{{ $t('MH_TH_txt_title2') }}</b>
                </h5>
                <p data-pgc-edit="testo" class="i18n">
                  {{ $t('MH_TH_txt_text2') }}
                </p>
              </div>
              <div style="text-align: left;">
                <h5 data-pgc-edit="titolo">
                  <span class="badge badge-info float-right text-primary visually-hidden" style="font-size: 0.8rem;">Open Beta</span><b class="i18n">{{ $t('CD_TH_txt_title3') }}</b>
                </h5>
                <p data-pgc-edit="testo" class="i18n">
                  {{ $t('CD_TH_txt_text3') }}
                </p>
              </div>
              <div>
                <h5 data-pgc-edit="titolo">
                  <b class="i18n">{{ $t('MH_TH_txt_title3') }}</b>
                </h5>
                <p data-pgc-edit="testo" class="i18n">
                  {{ $t('MH_TH_txt_text3') }}
                </p>
              </div>
            </div>
            <div class="align-items-end col-md-6 flex-column justify-content-center text-left text-md-right">
              <img src="/img/Banner%20Condiviso%20dedicato%201.png" class="img-fluid w-50" data-pgc-edit="immagine">
              <h3 class="display-1 i18n mt-3" data-pgc-edit="titolo">
                {{ $t('CD_TH_header') }}
              </h3>
              <p class="display-4 i18n pt-3" data-pgc-edit="sotto titolo">
                {{ $t('CD_TH_explain') }}
              </p>
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
          class="bg-light d-block text-white"
          width="100%"
          height="160"
          style="margin-top: -160px;"
        >
          <path d="M 0 0 H 1440 V 60 C 854 276 596 -66 0 60 V 0 Z" />
        </svg>
      </div>
      <section data-pg-name="Titolo 4 - Perché un Hosting Gestito" class="bg-light pt-5">
        <div class="container">
          <div class="pb-5 row">
            <div class="col-md-6">
              <img src="/img/Banner-Home.svg" class="img-fluid w-50" data-pgc-edit="immagine">
              <h3 class="display-1 i18n mt-3" data-pgc-edit="titolo">
                {{ $t('MH_FF_txt_header1') }} <br>{{ $t('MH_FF_txt_header2') }}
              </h3>
              <p class="display-4 i18n pt-3" data-pgc-edit="sotto titolo">
                {{ $t('MH_FF_txt_explain') }}
              </p>
            </div>
            <div class="col-md-6 ">
              <div>
                <h5 data-pgc-edit="titolo">
                  <b class="i18n">{{ $t('MH_FF_txt_title1') }}</b>
                </h5>
                <p data-pgc-edit="testo" class="i18n">
                  {{ $t('MH_FF_txt_text1') }}
                </p>
              </div>
              <div>
                <h5 data-pgc-edit="titolo">
                  <b class="i18n">{{ $t('MH_FF_txt_title2') }}</b>
                </h5>
                <p data-pgc-edit="testo" class="i18n">
                  {{ $t('MH_FF_txt_text1') }}
                </p>
              </div>
              <div>
                <h5 data-pgc-edit="titolo">
                  <b class="i18n">{{ $t('MH_FF_txt_title3') }}</b>
                </h5>
                <p data-pgc-edit="" class="i18n">
                  {{ $t('MH_FF_txt_text3') }}
                </p>
              </div>
              <div>
                <h5 data-pgc-edit="titolo">
                  <b class="i18n">{{ $t('MH_FF_txt_title4') }}</b>
                </h5>
                <p class="i18n">
                  {{ $t('MH_FF_txt_text4') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="">
        <svg
          viewBox="0 0 1440 185"
          preserveAspectRatio="none"
          fill="currentColor"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          class="d-block text-light"
          width="100%"
          height="160"
          style="margin-bottom: -140px;"
        >
          <path d="M 0 0 H 1440 V 60 C 1114 355 700 35 516 35 C 333 35 246 199 0 60 V 0 Z" />
        </svg>
      </div>
      <TechExplain />
      <div data-pg-name="Scripts">
        <script src="https://unpkg.com/swiper/swiper-bundle.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/swipe/2.0.0/swipe.min.js" integrity="sha512-xC1fS6NWgwCMJd/b5MT0Ci1DttjZ2qTxmXHQnUIyWDJddui/jiC5QwAokElrYYT9SOlK/bKMz0UBYJYi1JxdDw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" />
        <script src="js/popper.min.js" />
        <script type="text/babel" src="dynamic/app.js" />
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectedValue: '',
      selectedCurrency: '',
      chooseCurrency: '',
      choosePeriod: ''
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
      console.log('sdfsdf', event)
      this.$router.replace(this.switchLocalePath(event))
    },
    getValue (selectedCurrency) {
      this.chooseCurrency = selectedCurrency
    },
    dataChange (item) {
      this.choosePeriod = item
    }
  }
}
</script>
