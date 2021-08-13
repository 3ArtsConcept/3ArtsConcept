<template>
  <b-container fluid>
    <b-navbar class="ml-5 p-0 mt-0" fixed="top">
      <img src="img/logo-topleft.jpg" class="pull-left logo" />
    </b-navbar>
    <div class="nav_buttons" style="display: none">
      <ul>
        <li>
          <i id="dot_1" class="fa fa-circle nav_active" aria-hidden="true"></i>
        </li>
        <li><i id="dot_2" class="fa fa-circle" aria-hidden="true"></i></li>
        <li><i id="dot_3" class="fa fa-circle" aria-hidden="true"></i></li>
        <li><i id="dot_4" class="fa fa-circle" aria-hidden="true"></i></li>
        <li><i id="dot_5" class="fa fa-circle" aria-hidden="true"></i></li>
      </ul>
    </div>
    <div class="nav_down" style="display: none">
      <i class="fa fa-chevron-circle-down fa-3x" aria-hidden="true"></i>
    </div>
    <div>
      <b-carousel :interval="4000" id="carousel-1" controls>
        <b-carousel-slide img-src="img/carousel-img01.jpg">
          <div class="carousel-caption">
            <h1 class="header-content">A Moment Meant to Be…...</h1>
            <img src="img/divider01.png" alt="" />
            <p>
              It Just Got to Be One, <br />
              Just You & Me...
            </p>
          </div>
        </b-carousel-slide>
        <b-carousel-slide img-src="img/carousel-img002.jpg">
          <div class="carousel-caption">
            <h1 class="header-content">Looking Back in Time….</h1>
            <img src="img/divider01.png" alt="" />
            <p>All We Adore is That One Graceful Smile……</p>
          </div>
        </b-carousel-slide>
        <b-carousel-slide img-src="img/carousel-img03.jpg">
          <div class="carousel-caption">
            <h1><b>W.A.Y.O!</b> We Are Young Once!</h1>
            <img src="img/divider01.png" alt="" />
            <p>Never Ever Replaceable in Us…...</p>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div class="aboutUs wrap" id="about">
      <video autoplay loop muted id="bgvid">
        <source src="video/vid.mp4" type="video/mp4" />
        <source src="video/vid.webm" type="video/webm" />
      </video>
      <figure class="aboutUs_caption">
        <h1 class="header-content">About Us</h1>
        <img src="img/divider02.png" alt="" class="black_divider" />
        <p>
          3Arts Concept is founded with the vision to pioneer a facelift towards
          collective memories! Valuable memories belonging to every individual
          which carries a significant story behind. Our aim is to provide,
          achieving acceptance and to display collective showcases in your
          premises at affordable prices.
        </p>
        <h2>Core Directions of 3Arts Concept.</h2>

        <p>
          <b>G.R.E.A.T</b>
          <br />
          <span>
            Gratifying &#183; Reliable &#183; Exquisite &#183; Affordable &#183;
            Thankful
          </span>
        </p>

        <h2>System Collaboration:</h2>
        <img
          @click="showProductModal"
          src="img/volunex-logo.png"
          class="partner"
          data-toggle="modal"
          data-target="#partnerModal"
          alt="3Arts Partner Volunex Logo"
        />
      </figure>
    </div>
    <div class="product wrap" id="product">
      <div class="row no-gutter">
        <div class="col-lg-5 product_description">
          <h1 class="header-content">Services</h1>
          <img src="img/divider02.png" alt="" class="black_divider" />
          <h2>Individual and Family Series</h2>

          <p>
            3Arts Concept offers the option of creating 3D Showcases displaying
            lifetime memories for families or individuals who want to credit
            themselves over certain achievements of their own. We listen to what
            you need and provide a (detail to detail) illustration as our
            sophisticated handcrafted product.
          </p>

          <h2>Business and Corporate Series</h2>
          <p>
            Acknowledging that Business Branding is essential in today’s modern
            time, we allow businesses and companies to be able to further
            portray their significant industry through our Professional Business
            Showcases that enable greater customer catchment and awareness.
            Ideal for Businesses of a long family history to commemorate the
            value it represents.
          </p>

          <h2>Event Involvement</h2>
          <p>
            3Arts Concept caters rental of equipment such as our own 3D Scanner
            for events/roadshows subjecting to the relevance of the event. A
            total new experience for guests at your event. Guests are able to
            capture a 3D Scan of themselves which could be a first time
            experience and further create a more valuable purpose to the event
            respectively.
          </p>
          <p>
            We protect our client profile to assure authenticity of the showcase
            which enables client to feel what they now own is of value and
            solely theirs.
          </p>
        </div>

        <div class="col-lg-7">
          <div class="row no-gutter product_wrap_50">
            <div class="col-ms-6 product_box" @click="showModal('child')">
              <figure
                class="product_box_caption"
                data-toggle="modal"
                data-target="#childModal"
              >
                <figcaption>
                  <h1>Young Ones</h1>
                </figcaption>
              </figure>
              <img src="img/child.jpg" alt="3Arts Young Ones Category" />
            </div>
            <div class="col-ms-6 product_box" @click="showModal('wedding')">
              <figure
                class="product_box_caption"
                data-toggle="modal"
                data-target="#weddingModal"
              >
                <figcaption>
                  <h1>Wedding</h1>
                </figcaption>
              </figure>
              <img src="img/two-thumbs.jpg" alt="3Arts Wedding Category" />
            </div>
          </div>
          <div class="row no-gutter product_wrap_50">
            <div class="col-ms-6 product_box" @click="showModal('portrait')">
              <figure
                class="product_box_caption"
                data-toggle="modal"
                data-target="#portraitModal"
              >
                <figcaption>
                  <h1>Individual Portrait</h1>
                </figcaption>
              </figure>
              <img
                src="img/indian-female.jpg"
                alt="3Arts Individual Portrait Category"
              />
            </div>
            <div class="col-ms-6 product_box" @click="showModal('corporate')">
              <figure
                class="product_box_caption"
                data-toggle="modal"
                data-target="#corporateModal"
              >
                <figcaption>
                  <h1>Corporate branding</h1>
                </figcaption>
              </figure>
              <img
                src="img/man-woman.jpg"
                alt="3Arts Corporate Branding Category"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="showcase" class="showcase">
      <div class="row no-gutter">
        <div class="col-ms-3">
          <img
            src="img/NE/website/one.jpg"
            alt="3Arts Family 3D Model Showcase with Great Wall of China Background, Consisting of 5 colored 3D model. 3 Adults and 2 Children"
          />
        </div>
        <div class="col-ms-3">
          <img
            src="img/3d-couples-model.jpg"
            alt="3Arts Senior 3D Model showcase, Consisting of both Male and Female senior adults 3D Model"
          />
        </div>
        <div class="col-ms-3">
          <img
            src="img/Showcase-3D-Jap.jpg"
            alt="3Arts Individual Colored 3D Model Showcase with japanese setting"
          />
        </div>
        <div class="col-ms-3">
          <img
            src="img/NE/website/three.jpg"
            alt="3Arts Individual Colored 3D Model Showcase with Box and grass background setup"
          />
        </div>
      </div>
    </div>
    <div class="steps" id="3steps">
      <div class="row" style="height: 100%">
        <div class="col-lg-5 steps_description">
          <div class="steps_content">
            <h1 class="header-content">Price & Progress</h1>
            <img src="img/divider02.png" alt="" class="black_divider" />
            <p>
              <b>Selfie Impression Figurine</b>
            </p>
            <p>
              <b>3D Sandstone Printed</b><br />
              (20 cm in height) $620* <br />
              (12 cm in height) $380*
              <br /><br />
              *For Impression Figurine Only
            </p>
          </div>
        </div>
        <div class="col-lg-7 steps_instructions" style="padding: 0 !important">
          <b-carousel :interval="400000" id="carousel-2" controls indicators>
            <b-carousel-slide img-src="img/steps/step1.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="img/steps/step2.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="img/steps/step3.jpg"></b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>
    <div class="contactUs wrap" id="contact">
      <div class="height_100">
        <b-row>
          <b-col lg="6" md="12">
            <div id="map"></div>
          </b-col>
          <b-col lg="6" md="12">
            <div class="contactUs_wrapper">
              <h1 class="header-content">Contact</h1>
              <img src="img/divider02.png" alt="" class="black_divider" />
              <b-form v-on:submit.prevent="submitForm">
                <b-form-group
                  style="text-align: left"
                  id="input-group-2"
                  label="Your Name:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="contact.name"
                    placeholder="Enter name"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  style="text-align: left"
                  id="input-group-3"
                  label="Contract number:"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    v-model="contact.number"
                    placeholder="Contact number:"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  style="text-align: left"
                  id="input-group-1"
                  label="Email address:"
                  label-for="input-1"
                  description="We'll never share your email with anyone else."
                >
                  <b-form-input
                    id="input-1"
                    v-model="contact.email"
                    type="email"
                    placeholder="Enter email"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  style="text-align: left"
                  id="input-group-3"
                  label="Message"
                  label-for="input-3"
                  description="We'll never share your email with anyone else."
                >
                  <b-form-textarea
                    id="input-3"
                    v-model="contact.message"
                    placeholder="Enter something..."
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>

                <button type="submit" class="btn_contact btn">SEND</button>
              </b-form>
            </div>
          </b-col>
        </b-row>
        <footer>
          <a
            class="mr-4"
            href="https://www.facebook.com/3artsconcept/?fref=ts"
            target="_blank"
          >
            <i class="fab fa-facebook-square fa-2x" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/3artsconcept/" target="_blank">
            <i class="fab fa-instagram-square fa-2x" aria-hidden="true"></i>
          </a>
          <b-row style="text-align: center">
            <b-col>
              <h6>3Arts Concept &#169; | All Rights Reserved</h6>
            </b-col>
          </b-row>
        </footer>
      </div>
    </div>

    <product-popup :type="type" :value.sync="productModal"></product-popup>
    <partnerPopup :value.sync="partnerModal"></partnerPopup>
  </b-container>
</template>

<script>
const map = require('@/utils/map')
import partnerPopup from '~/components/partnerPopup.vue'
import productPopup from '@/components/productPopup.vue'

export default {
  mounted() {
    setTimeout(map, 2000)
  },

  components: {
    partnerPopup,
    productPopup,
  },

  data() {
    return {
      partnerModal: false,
      productModal: false,
      contact: {
        name: '',
        email: '',
        number: '',
        message: '',
      },
      error: {
        Name: false,
        Email: false,
        EmailFormat: false,
        Number: false,
        MinNumber: false,
        Message: false,
      },

      type: null,
    }
  },
  computed: {
    validationName() {
      return this.contact.name.length > 0
    },
  },
  methods: {
    validationEmail() {
      let re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      this.error.Email = true
    },
    async submitForm() {
      const response = await fetch('https://usebasin.com/f/9697b92b408a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(this.contact),
      }).then((response) => {
        if (response.ok) {
          this.contact.name = ''
          this.contact.email = ''
          this.contact.message = ''
          this.contact.number = ''
        }
      })
    },
    showModal(category) {
      this.productModal = !this.productModal
      this.type = category
    },
    showProductModal() {
      this.partnerModal = !this.productModal
    },
  },
}
</script>
