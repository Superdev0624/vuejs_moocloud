<template>
  <section id="appsSection" data-pg-name="Apps" title="Apps">
    <section>
      <div class="container mt-5">
        <div class="row">
          <div class="row text-center mb-3">
            <h3>Tuttle le app</h3>
          </div>
        </div>
        <div class="g-3 row row-cols-2 row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
          <div
            v-for="(data,index) in app"
            :key="index"
          >
            <Appcard
              :data="data"
              :index="index"
              @getData="modalData"
            />
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      app: {}
    }
  },
  created () {
    axios
      .get('https://obj.tools.moocloud.ch/items/apps_store')
      .then((response) => {
        this.app = response.data.data
      })
  },
  methods: {
    modalData (modalID, data) {
      this.$emit('upData', modalID, data)
    }
  }
}
</script>
