<template>
  <div>
    <Menu @currencyChanged="getValue" />
    <section data-pgc-field="pagebody">
      <div data-pg-name="Style-Script" />
      <section class="bg-light pb-5 pt-5" data-pg-name="Titolo 1- Cloud managed">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1 class="display-1  text-capitalize" data-pgc-edit="Titolo pagina">
                {{ $t('Cloud_managed_header') }}
              </h1>
              <h2 class="display-2  mb-4" data-pgc-edit="sottotitolo pagina">
                {{ $t('Cloud_managed_text') }}
              </h2>
              <p class="fs-5 mb-0">
                {{ $t('Cloud_managed_title') }}
              </p>
              <div class="d-flex justify-content-start ">
                <div class="align-items-center d-inline-flex pe-3">
                  <div>
                    <img src="/img/png/MicroICONA-tecnologie%202.png" width="50px">
                  </div>
                  <p class="mb-0">
                    <b>2</b> Apps
                  </p>
                </div>
                <div class="align-items-center d-inline-flex pe-3">
                  <div>
                    <img src="/img/png/MicroICONA-tecnologie%206.png" width="50px">
                  </div>
                  <p class="mb-0">
                    <b>20</b> Users
                  </p>
                </div>
                <div class="align-items-center d-inline-flex pe-3">
                  <div>
                    <img src="/img/png/MicroICONA-tecnologie%203.png" width="50px">
                  </div>
                  <p class="mb-0">
                    <b>2</b> Domain
                  </p>
                </div>
              </div>
              <p class="fw-lighter" style="font-size: 0.8rem;">
                {{ $t('Cloud_managed_explain') }}.
              </p>
            </div>
            <div class="col-md-6 d-flex justify-content-center justify-content-md-end mt-3 mt-md-0">
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

      <section style="position: relative;">
        <Toggle v-on:periodChange="dataChange" />
        <Dynamic v-bind:onselectCurrency= "chooseCurrency" v-bind:onselectPeriod= "choosePeriod" :family="'shared'" />
        <div class="container d-flex justify-content-center pe-0 ps-0 w-75">
          <div class="bg-white border border-primary justify-content-center mt-4 rounded row">
            <div class="align-items-center col-md-11 col-sm-12 col-xl-10 d-flex flex-column justify-content-center p-2 text-center">
              <h3 data-pgc-edit="testo" class="">
                {{ $t('Second_Modal_title') }}
              </h3>
              <p data-pgc-edit="sotto testo " class="">
                {{ $t('Second_Modal_text') }}
              </p>
              <div class=" row text-left">
                <div class="col-md-4">
                  <div
                    ext-orgval-1="
        "
                    ext-orgval-3="
        "
                    ext-orgval-5="
        "
                    ext-orgval-7="
    "
                    localized=""
                  >
                    <img src="/img/png/MicroICONA-tecnologie%206.png" width="50" localized="">
                    <h5 class="">
                      {{ $t('Second_modal_tag_title1') }}
                    </h5>
                    <p class="">
                      {{ $t('Second_modal_tag_text1') }}
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div ext-orgval-1=" " ext-orgval-3=" " ext-orgval-5=" " ext-orgval-7=" " localized="">
                    <img src="/img/png/MicroICONA-tecnologie%204.png" width="50" localized="">
                    <h5 class="">
                      {{ $t('Second_modal_tag_title2') }}
                    </h5>
                    <p class="">
                      {{ $t('Second_modal_tag_text2') }}
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div ext-orgval-1=" " ext-orgval-3=" " ext-orgval-5=" " ext-orgval-7=" " localized="">
                    <img src="/img/png/MicroICONA-tecnologie%206.png" width="50" localized="">
                    <h5 class="">
                      {{ $t('Second_modal_tag_title3') }}
                    </h5>
                    <p class="">
                      {{ $t('Second_modal_tag_text3') }}
                    </p>
                  </div>
                </div>
              </div>
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
      <section data-pg-name="Titolo 3 - WordPress Gestito Super Veloce" class="bg-light pb-5 pt-5">
        <div class="container mt-4">
          <div class="row">
            <div class="col-md-6">
              <div>
                <h5 data-pgc-edit="titolo">
                  <span class="badge badge-primary float-right ps-0 text-primary" style="font-size: 0.8rem;">Open Beta</span><b class="">{{ $t('MH_TH_txt_title1') }}</b>
                </h5>
                <p data-pgc-edit="testo" class="">
                  {{ $t('MH_TH_txt_text1') }}
                </p>
              </div>
              <div>
                <h5 data-pgc-edit="titolo">
                  <span class="badge badge-primary float-right ps-0 text-primary" style="font-size: 0.8rem;">Open Beta</span><b class="">{{ $t('MH_TH_txt_title2') }}</b>
                </h5>
                <p data-pgc-edit="testo" class="">
                  {{ $t('MH_TH_txt_text2') }}&nbsp;
                </p>
              </div>
              <div>
                <h5 data-pgc-edit="titolo">
                  <b class="">{{ $t('MH_TH_txt_title3') }}</b>
                </h5>
                <p data-pgc-edit="testo" class="">
                  {{ $t('MH_TH_txt_text3') }}
                </p>
              </div>
              <div style="text-align: left;">
                <h5 data-pgc-edit="titolo">
                  <span class="badge badge-info float-right ps-0 text-primary" style="font-size: 0.8rem;">Closed Beta</span><b class="">{{ $t('MH_TH_txt_title4') }}</b>
                </h5>
                <p data-pgc-edit="testo" class="">
                  {{ $t('MH_TH_txt_text4') }}
                </p>
              </div>
            </div>
            <div class="align-items-end col-md-6 flex-column justify-content-center order-first order-md-last text-left text-md-right">
              <img src="/img/condiviso%20gestito.svg" class="img-fluid w-50" data-pgc-edit="immagine">
              <h3 class="display-1  mt-3" data-pgc-edit="titolo">
                {{ $t('MH_TH_txt_header') }}
              </h3>
              <p class="display-4  pt-3" data-pgc-edit="sotto titolo">
                {{ $t('MH_TH_txt_explain') }}
              </p>
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
      <section data-pg-name="Titolo 2 -Caratteristiche del Hosting Cloud" class="bg-white mt-4  pt-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img src="/img/Banner%20Condiviso%20dedicato%201.png" class="img-fluid w-50">
              <h3 class="display-1  mt-3" data-pgc-edit="titolo">
                {{ $t('MH_FH_txt_header') }}
              </h3>
              <p class="display-4  pt-3" data-pgc-edit="sotto titolo">
                {{ $t('MH_FH_txt_explain') }}
              </p>
            </div>
            <div class="col-md-6">
              <div>
                <h5><b data-pgc-edit="titolo" class="">{{ $t('MH_FH_txt_title1') }}</b></h5>
                <p data-pgc-edit="testo">
                  {{ $t('MH_FH_txt_text1') }}&nbsp;
                </p>
              </div>
              <div>
                <h5><b data-pgc-edit="titolo" class="">{{ $t('MH_FH_txt_title2') }}</b></h5>
                <p data-pgc-edit="testo" class="">
                  {{ $t('MH_FH_txt_text2') }}
                </p>
              </div>
              <div>
                <h5><b data-pgc-edit="titolo" class="">{{ $t('MH_FH_txt_title3') }}</b></h5>
                <p data-pgc-edit="testo" class="">
                  {{ $t('MH_FH_txt_text3') }}&nbsp;
                </p>
              </div>
              <div>
                <h5><b data-pgc-edit="titolo" class="">{{ $t('MH_FH_txt_title4') }}</b></h5>
                <p class=" mb-2" data-pgc-edit="testo">
                  {{ $t('MH_FH_txt_text4') }}
                </p>
                <a class="btn btn-link  ml-0 mt-0 pl-0 pt-0" href="/apps/" data-pgc-edit="bottone"> {{ $t('MH_FH_btn_text') }}</a>
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
          class="bg-light d-block text-white"
          width="100%"
          height="160"
          style="margin-bottom: -160px;"
        >
          <path d="M 0 0 H 1440 V 60 C 854 276 596 -66 0 60 V 0 Z" />
        </svg>
      </div>
      <section data-pg-name="Titolo 4 - Perché un Hosting Gestito" class="bg-light mt-5  pb-5 pt-5">
        <div class="container mb-5">
          <div class="row">
            <div class="col-md-6">
              <div>
                <h5 data-pgc-edit="titolo">
                  <b class="">{{ $t('MH_FF_txt_title1') }}</b>
                </h5>
                <p data-pgc-edit="testo" class="">
                  {{ $t('MH_FF_txt_text1') }}
                </p>
              </div>
              <div>
                <h5 data-pgc-edit="titolo">
                  <b class="">{{ $t('MH_FF_txt_title2') }}</b>
                </h5>
                <p data-pgc-edit="testo" class="">
                  {{ $t('MH_FF_txt_text2') }}
                </p>
              </div>
              <div>
                <h5 data-pgc-edit="titolo">
                  <b class="">{{ $t('MH_FF_txt_title3') }}</b>
                </h5>
                <p data-pgc-edit="" class="">
                  {{ $t('MH_FF_txt_text3') }}
                </p>
              </div>
              <div>
                <h5 data-pgc-edit="titolo">
                  <b class="">{{ $t('MH_FF_txt_title4') }}i</b>
                </h5>
                <p class="">
                  {{ $t('MH_FF_txt_text4') }}
                </p>
              </div>R
            </div>
            <div class="col-md-6 order-first order-md-last">
              <img src="/img/Banner-Home.svg" class="img-fluid w-50" data-pgc-edit="immagine">
              <h3 class="display-1  mt-3" data-pgc-edit="titolo">
                {{ $t('MH_FF_txt_header1') }} <br>{{ $t('MH_FF_txt_header2') }}
              </h3>
              <p class="display-4  pt-3" data-pgc-edit="sotto titolo">
                {{ $t('MH_FF_txt_explain') }}
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
          style="margin-top: -140px;"
        >
          <path d="M0 134h1440v-74c-586 216-844-126-1440 0v74z" />
        </svg>
      </div>
      <TechExplain />
      <section data-pg-name="Piano Personalizato" class="mb-5 mt-4">
        <div class="container pl-4 pr-4">
          <div class="border border-primary justify-content-center rounded row">
            <div class="col-md-10 col-sm-11 col-xl-8 p-2 text-center">
              <h3 />
              <h3 data-pgc-edit="testo" class="">
                {{ $t('MH_XH_modal_header') }}
              </h3>
              <p data-pgc-edit="sotto testo " class="">
                {{ $t('MH_SH_modal_explain') }}
              </p>
              <div class="row text-left">
                <div class="col-md-4">
                  <div class="pb-2">
                    <h6 class="font-weight-bold " data-pgc-edit="etichetta">
                      {{ $t('MH_XH_modal_text1') }}
                    </h6>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width:90%"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        data-pgc-edit="progress"
                      />
                    </div>
                  </div>
                  <div class="pb-2">
                    <h6 class="font-weight-bold " data-pgc-edit="testo">
                      {{ $t('MH_XH_modal_text2') }}
                    </h6>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width:100%"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        data-pgc-edit="progress"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="pb-2">
                    <h6 class="font-weight-bold " data-pgc-edit="testo">
                      {{ $t('MH_XH_modal_text3') }}
                    </h6>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width:80%"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        data-pgc-edit="progress"
                      />
                    </div>
                  </div>
                  <div class="pb-2">
                    <h6 class="font-weight-bold " data-pgc-edit="testo">
                      {{ $t('MH_XH_modal_text4') }}&nbsp;
                    </h6>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width:100%"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        data-pgc-edit="progress"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="pb-2">
                    <h6 class="font-weight-bold " data-pgc-edit="testo">
                      {{ $t('MH_XH_modal_text5') }}
                    </h6>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width:82%"
                        aria-valuenow="82"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        data-pgc-edit="progress"
                      />
                    </div>
                  </div>
                  <div class="pb-2">
                    <h6 class="font-weight-bold " data-pgc-edit="testo">
                      {{ $t('MH_XH_modal_text6') }}
                    </h6>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width:100%"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        data-pgc-edit="progress"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div data-pg-name="Scripts">
        <script src="https://unpkg.com/swiper/swiper-bundle.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/swipe/2.0.0/swipe.min.js" integrity="sha512-xC1fS6NWgwCMJd/b5MT0Ci1DttjZ2qTxmXHQnUIyWDJddui/jiC5QwAokElrYYT9SOlK/bKMz0UBYJYi1JxdDw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" />
        <script src="js/popper.min.js" />
        <script type="text/babel" src="../static/dynamic/app.js" />
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
