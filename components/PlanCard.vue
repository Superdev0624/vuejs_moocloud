<template>
  <a :href="upval" style="color:#000000;">
    <div class="card border-dark" @click="cardLink(data.prices)" >
      <div class="card-body border-bottom border-dark rounded-top" data-pg-collapsed>
        <img
          src="/img/MINIICONA-dedicato.svg"
          class="float-end mt-n5"
          width="75"
        >
        <h4 class="card-title display-3 mt-4">
          {{ data.short_name }}
        </h4>
        <div class="card-subtitle mb-2">
          <Price
            v-for="(item) in data.prices.filter((price) =>{
              return (price.currency === transCurrency.toLowerCase() && price.interval.toUpperCase() === transPeriod)
            })"
            :key="item.index"
            :currency="item.currency"
            :price="item.unit_amount"
            :interval="item.interval"
          />
        </div>
      </div>
      <div class="card-body">
        <Progress
          v-for="(item) in data.progress_info"
          :key="item.index"
          :label="item.label"
          :value="item.value"
        />
      </div>
    </div>
  </a>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    transCurrency: {
      type: String,
      required: true
    },
    transPeriod: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      val: '',
      upval: ''
    }
  },
  methods: {
    cardLink (links) {
      for (let i = 0; i < links.length; i++) {
        const link = links[i]
        if (link.currency === this.transCurrency.toLowerCase() && link.interval === this.transPeriod.toLowerCase()) {
          this.val = link.link
          break
        }
      }
      this.upval = ('https://buy.stripe.com/' + this.val)
      console.log(this.upval)
    }
  }
}
</script>
