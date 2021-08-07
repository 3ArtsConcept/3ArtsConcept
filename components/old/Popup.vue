<template>
  <!-- <div :id="id" class="modal fade" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">
            &times;
          </button>
          <h4 class="modal-title">{{ header }}</h4>
        </div>
        <div class="modal-body">
          <img :src="image" class="cat_img" :alt="alt" />
          {{content}}
        </div>
      </div>
    </div>
  </div> -->

  <b-modal id="modal-1" :title="header">
    <b-img :src="image" :alt="alt" rounded="circle"></b-img>
    <p class="my-4">{{ content }}</p>
  </b-modal>
</template>

<script>
export default {
  props: {
    category: {
      type: Function,
      require: true,
    },
  },
  ready() {},
  data() {
    return {}
  },
  computed: {
    id() {
      return this.type + 'Modal'
    },
    alt() {
      if (this.type == 'wedding') return '3Arts Wedding Category Popup Image'
      else if (this.type == 'child') return '3Arts Young Ones Popup Image'
      else if (this.type == 'portrait')
        return '3Arts Individual Portrait Popup Image'
      return '3Arts Corportate Branding Category Popup Image'
    },
    header() {
      if (this.type == 'wedding') return 'Wedding'
      else if (this.type == 'child') return 'Young Ones'
      else if (this.type == 'portrait') return 'Individual Portrait'
      return 'Corporate Branding'
    },
    image() {
      if (this.type == 'wedding') return '/img/two-thumbs.jpg'
      else if (this.type == 'child') return '/img/child.jpg'
      else if (this.type == 'portrait') return '/img/graduant.jpg'
      return '/img/man-woman.jpg'
    },
    content() {
      if (this.type == 'wedding') {
        return '<p> Walking down the aisle hand in hand is blissful, embarking this new chapter in life is challenging, taking the leap of faith takes courage!<br><br> Keep all of these memories together in just one tailor-made showcase meant for just the both of you to reminisce as the years go by!</p>'
      } else if (this.type == 'child') {
        return '<p>Children, the innocence and happiness in them goes by much quicker than what we perceive. They are your one and only in the world, capture that one impression of them and it stays.<br><br>Photographs show just a picture; a showcase creates the sense of belonging for your family!</p>'
      } else if (this.type == 'portrait') {
        return '<p>“You Only Live Once!” Time to take a step back, it’s time to credit yourself.<br><br>Life’s a quick journey, only if you mark your own checkpoints and celebrate them!<br><br>Achievements not to be forgotten, recognition not to be neglected and significant moments accounted for brings value to you!</p>'
      } else {
        return '<p>Branding with an identity marks its position with an indirect edge over competitors for all corporate and businesses.<br><br> Create the uptrend symbolic icon of your products/services for greater values enhanced onto your business.</p>'
      }
    },
  },
}
</script>
