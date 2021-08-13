<template>
  <b-modal id="productModal" v-model="show" hide-footer>
    <template #modal-title>
      {{ header }}
    </template>
    <div>
      <b-img :src="image" :alt="alt"></b-img>
      <div v-html="content" class="mt-4"></div>
    </div>
  </b-modal>
</template>

<script type="text/javascript">
export default {
  props: {
    type: {
      type: String | null,
      required: true,
    },

    value: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    show: {
      get: function () {
        return this.value
      },

      set: function (value) {
        this.$emit('update:value', value)
      },
    },
    alt() {
      if (this.type == 'wedding') {
        return '3Arts Wedding Category Popup Image'
      }
      if (this.type == 'child') {
        return '3Arts Young Ones Popup Image'
      }
      if (this.type == 'portrait') {
        return '3Arts Individual Portrait Popup Image'
      } else {
        return '3Arts Corportate Branding Category Popup Image'
      }
    },
    header() {
      if (this.type == 'wedding') {
        return 'Wedding'
      }
      if (this.type == 'child') {
        return 'Young Ones'
      }
      if (this.type == 'portrait') {
        return 'Individual Portrait'
      } else {
        return 'Corporate Branding'
      }
    },
    image() {
      if (this.type == 'wedding') {
        return '/img/two-thumbs.jpg'
      }
      if (this.type == 'child') {
        return '/img/child.jpg'
      }
      if (this.type == 'portrait') {
        return '/img/graduant.jpg'
      } else {
        return '/img/man-woman.jpg'
      }
    },
    content() {
      if (this.type == 'wedding') {
        return '<p> Walking down the aisle hand in hand is blissful, embarking this new chapter in life is challenging, taking the leap of faith takes courage!<br><br> Keep all of these memories together in just one tailor-made showcase meant for just the both of you to reminisce as the years go by!</p>'
      }
      if (this.type == 'child') {
        return '<p>Children, the innocence and happiness in them goes by much quicker than what we perceive. They are your one and only in the world, capture that one impression of them and it stays.<br><br>Photographs show just a picture; a showcase creates the sense of belonging for your family!</p>'
      }
      if (this.type == 'portrait') {
        return '<p>“You Only Live Once!” Time to take a step back, it’s time to credit yourself.<br><br>Life’s a quick journey, only if you mark your own checkpoints and celebrate them!<br><br>Achievements not to be forgotten, recognition not to be neglected and significant moments accounted for brings value to you!</p>'
      } else {
        return '<p>Branding with an identity marks its position with an indirect edge over competitors for all corporate and businesses.<br><br> Create the uptrend symbolic icon of your products/services for greater values enhanced onto your business.</p>'
      }
    },
  },
}
</script>
