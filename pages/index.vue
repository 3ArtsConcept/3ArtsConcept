<template>
  <div>
    <nav class="container navbar-fixed-top">
      <img src="img/logo-topleft.jpg'" class="pull-left logo" />
    </nav>
    <div class="nav_buttons">
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
    <div class="nav_down">
      <i class="fa fa-chevron-circle-down fa-3x" aria-hidden="true"></i>
    </div>
    <div id="owl-example" class="owl-carousel wrap">
      <div>
        <img
          src="<?php echo 'data:image;base64,'.base64_encode(file_get_contents('img/carousel-img01.jpg')) ?>"
          class="carousel_cover_img hide-m-portrait hidden-sm"
          alt="3Arts Marriage Category Desktop Cover Picture"
        />
        <img
          src="<?php echo 'data:image;base64,'.base64_encode(file_get_contents('img/mv_carousel01.jpg')) ?>"
          class="carousel_cover_img hide-m-landscape hide-desktop"
          alt="3Arts Marriage Category Mobile Cover Picture"
        />
        <div class="carousel-caption">
          <h1>A Moment Meant to Be…...</h1>
          <img
            src="<?php echo 'data:image;base64,'.base64_encode(file_get_contents('img/divider01.png')) ?>"
            alt=""
          />
          <p>
            It Just Got to Be One, <br />
            Just You & Me...
          </p>
        </div>
      </div>
      <div>
        <img
          src="<?php echo 'data:image;base64,'.base64_encode(file_get_contents('img/carousel-img002.jpg')) ?>"
          class="carousel_cover_img hide-m-portrait hidden-sm"
          alt="3Arts Senior Category Desktop Cover Picture"
        />
        <img
          src="<?php echo 'data:image;base64,'.base64_encode(file_get_contents('img/mv_carousel02.jpg')) ?>"
          class="carousel_cover_img hide-m-landscape hide-desktop"
          alt="3Arts Senior Category Mobile Cover Picture"
        />
        <div class="carousel-caption">
          <h1>Looking Back in Time….</h1>
          <img
            src="<?php echo 'data:image;base64,'.base64_encode(file_get_contents('img/divider01.png')) ?>"
            alt=""
          />
          <p>All We Adore is That One Graceful Smile……</p>
        </div>
      </div>
      <div>
        <img
          src="<?php echo 'data:image;base64,'.base64_encode(file_get_contents('img/carousel-img03.jpg')) ?>"
          class="carousel_cover_img hide-m-portrait hidden-sm"
          alt="3Arts Young Ones Category Desktop Cover Picture"
        />
        <img
          src="<?php echo 'data:image;base64,'.base64_encode(file_get_contents('img/mv_carousel03.jpg')) ?>"
          class="carousel_cover_img hide-m-landscape hide-desktop"
          alt="3Arts Young Ones Category Mobile Cover Picture"
        />
        <div class="carousel-caption">
          <h1><b>W.A.Y.O!</b> We Are Young Once!</h1>
          <img
            src="<?php echo 'data:image;base64,'.base64_encode(file_get_contents('img/divider01.png')) ?>"
            alt=""
          />
          <p>Never Ever Replaceable in Us…...</p>
        </div>
      </div>
    </div>
    <!--
         <div class="NE" >
        <div class="NE_header">
            <h1>National Day Event</h1>
            <img src="<?php echo 'data:image;base64,'.base64_encode(file_get_contents('img/divider02.png')) ?>" alt="" class="black_divider">
            <h2>Scan, As One</h2>
            <img src="<?php echo 'data:image;base64,'.base64_encode(file_get_contents('img/NE/website/51-heart.png')) ?>" class="NE_hearts hidden-xs" alt="3Arts National Day Event Heart Logo">

        </div>
    <div class="NE_content">
            <div class="col-sm-4 col-xl-3 col-xxl-4 NE_content_img">
            </div>
            <div class="col-sm-8  col-xl-9 col-xxl-8">
                <p>
                    <b>National Day is just around the corner!!</b><br><br>
                    We are offering this unique experience for all Singaporeans/Singapore PRs to
                    head down to our Scanning Studio for a 3D Scan opportunity as a form of
                    awareness and celebrating Our National Day!
                    <br><br>
                    For the entire month of August, 3Arts Concept being a locally and self-funded
                    company, wishes to enhance the significance to further educate the public
                    towards a better understanding towards 3D Scans and Additive
                    Manufacturing.
                    <br><br>
                    All costs will be absorbed for the scans being presented!<br>
                    All you need to do is to just ring us up or via email and book a slot for your very
                    first experience at 3D Scanning!<br>
                    Bring along your camera or smart phone and capture yourself in the amazing
                    virtual 3D world!
                    <br><br>
                    Strictly no obligations or hidden costs projected.
                    Just Scan and feel G.R.E.A.T!
                    <br><br>
                    There will be 18 slots up for scanning per day on a first come first serve basis.
                    Hurry and start booking your slots!
                    <br><br>
                    Visualise yourself for the very first time in the 3D World.
                    Share the joy around!
                    <br><br>
                    <b>What you will get:</b>
                    <br><br>
                    Immediate image of a 3D image/video recorded by either
                    from a camera or smart phone or any image capturing
                    device of your choice.<br>
                    5-8 Minutes averagely required.<br>
                    Figurines, Display Showcases and STL files not included.
                    <br><br>
                    <b>Rules to Abide:</b>
                    <br><br>
                    3Arts Concept reserves the rights and immediate decision
                    for scans only in an APPRORIATE attire and behaviour.
                    <br><br>
                    Strictly NO Nudity, Vulgarism, Racism or any forms of
                    explicit illustrations are to be tolerated for the well purpose
                    of this project.
                    <br><br>
                    <b>3Arts Concept</b>
                    <br><br>
                    1 North Bridge Road, High Street Centre #02-104B<br>
                    Singapore 179094<br>
                    Office: (65) 6352 1055<br>
                    Contact Person: Bernard @ (65) 9090 1426/8858 0774<br>
                    Email: bernard@3artsconcept.com<br>
                    Opening Hours:<br>
                    (Monday-Friday) 11am-6pm<br>
                    (Saturday) 11am-3pm<br>
                    National Day 09/08/2016 will be closed.<br>
                </p>
            </div>
        </div>
    </div> -->
    <div class="aboutUs wrap" id="about">
      <video
        autoplay="autoplay"
        loop="loop"
        poster="/img/vid.jpg"
        id="bgvid"
        class="hidden-xs"
      >
        <source src="video/vid.mp4" type="video/mp4" />
        <source src="video/vid.webm" type="video/webm" />
      </video>
      <img
        class="visible-xs"
        src="<?php echo 'data:image;base64,'.base64_encode(file_get_contents('img/mv_video-screenshot.jpg')) ?>"
        alt="3Arts Family Video Image"
      />
      <figure class="aboutUs_caption">
        <h1>About Us</h1>
        <img
          src="<?php echo 'data:image;base64,'.base64_encode(file_get_contents('img/divider02.png')) ?>"
          alt=""
          class="black_divider"
        />
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
          src="<?php echo 'data:image;base64,'.base64_encode(file_get_contents('img/volunex-logo.png')) ?>"
          class="partner"
          data-toggle="modal"
          data-target="#partnerModal"
          alt="3Arts Partner Volunex Logo"
        />
      </figure>
    </div>
    <div class="product wrap" id="product">
      <div class="col-md-5 product_description">
        <h1>Services</h1>
        <img
          src="<?php echo 'data:image;base64,'.base64_encode(file_get_contents('img/divider02.png')) ?>"
          alt=""
          class="black_divider"
        />
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
          time, we allow businesses and companies to be able to further portray
          their significant industry through our Professional Business Showcases
          that enable greater customer catchment and awareness. Ideal for
          Businesses of a long family history to commemorate the value it
          represents.
        </p>

        <h2>Event Involvement</h2>
        <p>
          3Arts Concept caters rental of equipment such as our own 3D Scanner
          for events/roadshows subjecting to the relevance of the event. A total
          new experience for guests at your event. Guests are able to capture a
          3D Scan of themselves which could be a first time experience and
          further create a more valuable purpose to the event respectively.
        </p>
        <p>
          We protect our client profile to assure authenticity of the showcase
          which enables client to feel what they now own is of value and solely
          theirs.
        </p>
        <!-- <button class="btn btn_contact">See More</button> -->
      </div>
      <div class="col-md-7">
        <div class="row no-gutter product_wrap_50">
          <div class="col-ms-6 product_box">
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
          <div class="col-ms-6 product_box">
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
          <div class="col-ms-6 product_box">
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
          <div class="col-ms-6 product_box">
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
      <div class="col-md-5 steps_description">
        <div class="steps_content">
          <h1>Price & Progress</h1>
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
      <div class="col-md-7 steps_instructions">
        <div id="owl-demo" class="owl-carousel owl-theme steps-carousel">
          <div class="item">
            <img
              src="/img/steps/step1.jpg"
              alt="3Arts 3D Model Scanning instruction step1"
            />
          </div>
          <div class="item">
            <img
              src="/img/steps/step2.jpg"
              alt="3Arts 3D Model Scanning instruction step 2"
            />
          </div>
          <div class="item">
            <img
              src="/img/steps/step3.jpg"
              alt="3Arts 3D Model Scanning instruction step3"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="contactUs wrap" id="contact">
      <div class="height_100">
        <div class="col-md-6 height_100 map_wrapper">
          <div id="map"></div>
        </div>
        <div class="col-md-6 contactUs_form height_100">
          <div class="contactUs_wrapper">
            <h1>Contact</h1>
            <img src="img/divider02.png" alt="" class="black_divider" />
            <div
              class="form-group input_wrapper"
              :class="{ 'has-error': error.Name }"
            >
              <input
                type="text"
                placeholder="Name*"
                class="form-control"
                v-model="Name"
                @keyup="removeError('Name')"
              />
              <span class="input_error" v-if="error.Name"
                >Name is required</span
              >
            </div>
            <div
              class="form-group input_wrapper"
              :class="{ 'has-error': error.Email || error.EmailFormat }"
            >
              <input
                type="text"
                placeholder="Email*"
                class="form-control"
                v-model="Email"
                @keyup="removeError('Email')"
              />
              <span class="input_error" v-if="error.Email"
                >Email is required</span
              >
              <span class="input_error" v-if="error.EmailFormat"
                >Invalid Email Format</span
              >
            </div>
            <div
              class="form-group input_wrapper"
              :class="{ 'has-error': error.Number || error.MinNumber }"
            >
              <input
                type="text"
                placeholder="Contact*"
                class="form-control"
                v-model="Number"
                @keyup="isNumber()"
                @keydown="isNumber()"
              />
              <span class="input_error" v-if="error.Number"
                >Number is required</span
              >
              <span class="input_error" v-if="error.MinNumber"
                >The Valid format is minimally 8 Numbers</span
              >
            </div>
            <div
              class="form-group input_wrapper"
              :class="{ 'has-error': error.Message }"
            >
              <textarea
                rows="8"
                placeholder="Message"
                class="form-control"
                v-model="Message"
                @keyup="removeError('Message')"
              ></textarea>
              <span class="input_error" v-if="error.Message"
                >Message is required</span
              >
            </div>
            <button class="btn btn_contact" @click="submitForm()">SEND</button>
          </div>
        </div>
        <footer class="col-xs-12">
          <div class="row">
            <a
              href="https://www.facebook.com/3artsconcept/?fref=ts"
              target="_blank"
              ><i class="fa fa-facebook" aria-hidden="true"></i
            ></a>
            <a href="https://www.instagram.com/3artsconcept/" target="_blank"
              ><i class="fa fa-instagram" aria-hidden="true"></i
            ></a>
          </div>
          <div class="row copyright">
            <div class="col-xs-6 text-right">3Arts Concept &#169;</div>
            <div class="col-xs-6 text-left">All Rights Reserved</div>
          </div>
        </footer>
      </div>
    </div>
    <popup type="wedding" />
    <popup type="child" />
    <popup type="portrait" />
    <popup type="corporate" />
    <partner-popup />
  </div>
</template>

<script>
import popup from '@/components/old/Popup.vue'
import partnerPopup from '@/components/old/partnerPopup.vue'

export default {
  data() {
    return {
      Number: '',
      Name: '',
      Email: '',
      Message: '',
      error: {
        Name: false,
        Email: false,
        EmailFormat: false,
        Number: false,
        MinNumber: false,
        Message: false,
      },
    }
  },
  components: {
    popup,
    partnerPopup,
  },
  methods: {
    onSwipeLeft() {
      console.log('left')
    },
    isNumber(evt) {
      this.Number = this.Number.replace(/\D/g, '')
      if (this.Number != '') {
        this.error.Number = false
        if (this.Number.length > 7) {
          this.error.MinNumber = false
        }
      }
    },
    submitForm() {
      if (this.Name == '') {
        this.error.Name = true
      }
      if (this.Email == '') {
        this.error.Email = true
      } else {
        var re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        this.error.EmailFormat = !re.test(this.Email)
      }
      if (this.Number == '') {
        this.error.Number = true
      } else {
        this.error.MinNumber = this.Number.length < 8
      }
      if (this.Message == '') {
        this.error.Message = true
      }

      var error = this.error
      var result = false
      Object.keys(this.error).map(function (value, index) {
        if (error[value]) result = true
      })

      if (!result) {
        this.$http
          .get('/send-form.php', {
            name: this.Name,
            email: this.Email,
            message: this.Message,
            contact: this.Number,
          })
          .then((response) => {
            if (response.ok) {
              this.Number = ''
              this.Name = ''
              this.Email = ''
              this.Message = ''
            }
          })
      }
    },
    removeError(para) {
      if (this[para] != '') {
        if (para == 'Email') {
          this.error[para] = false
          var re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          if (re.test(this.Email)) {
            this.error.EmailFormat = false
          }
        } else this.error[para] = false
      }
    },
  },
}
</script>
