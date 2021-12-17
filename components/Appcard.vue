<template>
  <div class="col">
    <div class="border-secondary card d-flex p-1 text-center" style="height: 280px">
      <img class="m-1 mx-auto" :src="data.iconUrl" style="height: 75px">
      <div class="card-body">
        <h4> {{ data.title }}</h4>
        <p>{{ data.tagline }}</p>
      </div>
      <button class="btn btn-link app-button stretched-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop" :data="data" @click="getStatus(data)">
        Find out
      </button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    getStatus (data) {
      const url = `https://obj.tools.moocloud.ch/items/apps_store_manifests/${this.data.apps_store_manifests}`
      axios
        .get(url)
        .then((response) => {
          this.$emit('getData', response.data.data, data)
        })
    }
  }
}
</script>
