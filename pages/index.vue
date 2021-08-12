<template>
  <div>
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
    <div id="owl-example" class="owl-carousel wrap">
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
    <!--
         <div class="NE" >
        <div class="NE_header">
            <h1>National Day Event</h1>
            <img src="img/divider02.png" alt="" class="black_divider">
            <h2>Scan, As One</h2>
            <img src="img/NE/website/51-heart.png" class="NE_hearts hidden-xs" alt="3Arts National Day Event Heart Logo">

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
        src="img/mv_video-screenshot.jpg"
        alt="3Arts Family Video Image"
      />
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
      <div class="row">
        <div class="col-md-5 product_description">
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
          <!-- <button class="btn btn_contact">See More</button> -->
        </div>

        <div class="col-md-7">
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
        <div class="col-md-5 steps_description">
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
        <div class="col-md-7 steps_instructions">
          <b-carousel :interval="4000" id="carousel-1" controls indicators>
            <b-carousel-slide img-src="/img/steps/step1.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="/img/steps/step2.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="/img/steps/step3.jpg"></b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>
    <div class="contactUs wrap" id="contact">
      <div class="height_100">
        <div class="row">
          <b-col lg="6" md="12">
            <div id="map"></div>
          </b-col>
          <b-col lg="6" md="12">
            <div class="contactUs_wrapper">
              <h1 class="header-content">Contact</h1>
              <img src="img/divider02.png" alt="" class="black_divider" />
              <b-form @submit="submitForm()">
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
        </div>
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
    <!-- START Modal for product -->
    <b-modal size="lg" id="modal-1" v-model="productModal" hide-footer>
      <template #modal-title>
        <div class="modal-header">
          <!-- <button
                type="button"
                @click="productModal = !productModal"
                class="close"
              >
                &times;
              </button> -->
          <h4 class="modal-title">{{ header }}</h4>
        </div>
      </template>
      <div class="modal-body">
        <b-img :src="image" :alt="alt" rounded="circle"></b-img>
        <p v-html="content" class="mt-4"></p>
      </div>
    </b-modal>
    <!-- END Modal for product -->

    <!-- START Modal for partner -->
    <b-modal
      size="xl"
      id="modal-1"
      v-model="partnerModal"
      hide-header
      hide-footer
    >
      <div>
        <b-tabs content-class="mt-3">
          <b-tab title="Introduction" active
            ><h1>Volunex Introduction</h1>
            <img
              src="/img/volunex-logo.png"
              class="partner"
              alt="3Arts Partner Volunex Popup Logo" />
            <p>
              Volunex Pte Ltd is a fast growing Singapore based company that
              started designing and manufacturing affordable, easy-to- use,
              robust and ready-to- print personal 3D printer. We have a
              dedicated team with multi-disciplinary engineering expertise such
              as Robotics, Mechatronics, Instrumentation, Process Control and
              Computer Software. At Volunex, we are strongly committed to offer
              consumer a high quality and cost-effective 3D printing solutions
              with the spirit of the free software movement. Eventually, we
              strive to make personal 3D printing a better experience,
              accessible to anyone at an affordable price.
              <br /><br />
              Our 3D printers allow one to explore their creativity and
              imagination to design and manufacture virtually anywhere using 3D
              printing technology, whether short-run manufacturing or rapid
              prototyping to make a three-dimensional solid object of virtually
              any shape.
              <br /><br /></p
          ></b-tab>
          <b-tab title="i3 MINI KIT">
            <b-row>
              <b-col md="12" sm="12" lg="5"
                ><b-carousel
                  class="product-carousel"
                  indicators
                  :interval="4000"
                  controls
                >
                  <b-carousel-slide
                    img-src="/img/printer1a.jpg"
                    id="partner-product"
                  ></b-carousel-slide>
                  <b-carousel-slide
                    img-src="/img/printer1b.jpg"
                    id="partner-product"
                  ></b-carousel-slide>
                  <b-carousel-slide
                    img-src="/img/printer1c.jpg"
                    id="partner-product"
                  ></b-carousel-slide> </b-carousel
              ></b-col>
              <b-col md="12" sm="12" lg="7">
                <b-row no-gutters>
                  <b-col>
                    <b-list-group>
                      <b-list-group-item class="list"
                        ><b>Print Technology</b><br />
                        <span class="list-content"
                          >Fused Filament Fabrication</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>AC Power Input</b><br />
                        <span class="list-content"
                          >120/240 Volts</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Operating System</b><br />
                        <span class="list-content"
                          >Windows/ Mac OS/ Linux</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list"
                        ><b>Heater Bed</b><br />
                        <span class="list-content"
                          >Not Applicable</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Printing Area</b><br />
                        <span class="list-content"
                          >120mm(L) x 120mm(W) x 100mm(H)</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Printing Nozzle Size</b><br />
                        <span class="list-content"
                          >0.4mm</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list"
                        ><b>Connectivity</b><br />
                        <span class="list-content"
                          >USB, SD Memory Card, LCD Control Panel</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Options</b><br />
                        <span class="list-content"
                          >Wireless, Auto Bed Leveling</span
                        ></b-list-group-item
                      >
                    </b-list-group>
                  </b-col>
                  <b-col>
                    <b-list-group>
                      <b-list-group-item class="list"
                        ><b>Print File Format</b><br />
                        <span class="list-content"
                          >STL (STereoLithography)</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Print Filament Dia.</b><br />
                        <span class="list-content"
                          >1.75mm</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Layer Resolution</b><br />
                        <span class="list-content"
                          >0.100 mm - 0.300 mm</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list"
                        ><b>Printer Fillament Type</b><br />
                        <span class="list-content">PLA</span></b-list-group-item
                      >
                    </b-list-group>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="MARS Series">
            <b-row>
              <b-col md="12" sm="12" lg="5"
                ><b-carousel
                  class="product-carousel"
                  indicators
                  :interval="4000"
                  controls
                >
                  <b-carousel-slide
                    img-src="/img/printer2a.jpg"
                    id="partner-product"
                  ></b-carousel-slide>
                  <b-carousel-slide
                    img-src="/img/printer2b.jpg"
                    id="partner-product"
                  ></b-carousel-slide>
                  <b-carousel-slide
                    img-src="/img/printer2c.jpg"
                    id="partner-product"
                  ></b-carousel-slide> </b-carousel
              ></b-col>
              <b-col md="12" sm="12" lg="7">
                <b-row no-gutters>
                  <b-col>
                    <b-list-group>
                      <b-list-group-item class="list">
                        <b>Print Technology</b>
                        <br />
                        <span class="list-content"
                          >Fused Filament Fabrication</span
                        >
                      </b-list-group-item>
                      <b-list-group-item class="list">
                        <b>AC Power Input</b><br />
                        <span class="list-content"
                          >120/240 Volts</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Operating System</b><br />
                        <span class="list-content"
                          >Windows/ Mac OS/ Linux</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list"
                        ><b>Heater Bed</b><br />
                        <span class="list-content">Yes</span></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Printing Area</b><br />
                        <span class="list-content"
                          >300mm(L) x 200mm(W) x 200mm(H) (Height
                          Customizable)</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Printing Nozzle Size</b><br />
                        <span class="list-content"
                          >0.2mm or 0.4mm</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list"
                        ><b>Connectivity</b><br />
                        <span class="list-content"
                          >USB, SD Memory Card, LCD Control Panel</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Options</b><br />
                        <span class="list-content"
                          >Wireless, Auto Bed Leveling</span
                        ></b-list-group-item
                      >
                    </b-list-group>
                  </b-col>
                  <b-col>
                    <b-list-group>
                      <b-list-group-item class="list"
                        ><b>Print File Format</b><br />
                        <span class="list-content"
                          >STL (STereoLithography)</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Print Filament Dia.</b><br />
                        <span class="list-content"
                          >1.75mm</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Layer Resolution</b><br />
                        <span class="list-content"
                          >0.100 mm - 0.300 mm</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list"
                        ><b>Printer Fillament Type</b><br />
                        <span class="list-content"
                          >PLA, ABS, PET</span
                        ></b-list-group-item
                      >
                    </b-list-group>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="LUNAR">
            <b-row>
              <b-col md="12" sm="12" lg="5"
                ><b-carousel
                  class="product-carousel"
                  indicators
                  :interval="4000"
                  controls
                >
                  <b-carousel-slide
                    img-src="/img/printer3a.jpg"
                    id="partner-product"
                  ></b-carousel-slide>
                  <b-carousel-slide
                    img-src="/img/printer3b.jpg"
                    id="partner-product"
                  ></b-carousel-slide>
                  <b-carousel-slide
                    img-src="/img/printer3c.jpg"
                    id="partner-product"
                  ></b-carousel-slide>
                  <b-carousel-slide
                    img-src="/img/printer3d.jpg"
                    id="partner-product"
                  ></b-carousel-slide> </b-carousel
              ></b-col>
              <b-col md="12" sm="12" lg="7">
                <b-row no-gutters>
                  <b-col>
                    <b-list-group>
                      <b-list-group-item class="list"
                        ><b>Print Technology</b><br />
                        <span class="list-content"
                          >Fused Filament Fabrication</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>AC Power Input</b><br />
                        <span class="list-content"
                          >120/240 Volts</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Operating System</b><br />
                        <span class="list-content"
                          >Windows/ Mac OS/ Linux</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list"
                        ><b>Heater Bed</b><br />
                        <span class="list-content"
                          >Not Applicable</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Printing Area</b><br />
                        <span class="list-content"
                          >180mm(D) x 110mm(H) (Rotary Base)</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Printing Nozzle Size</b><br />
                        <span class="list-content"
                          >0.2mm or 0.4mm</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list"
                        ><b>Connectivity</b><br />
                        <span class="list-content"
                          >USB, SD Memory Card, LCD Control Panel</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Options</b><br />
                        <span class="list-content"
                          >Wireless</span
                        ></b-list-group-item
                      >
                    </b-list-group>
                  </b-col>
                  <b-col>
                    <b-list-group>
                      <b-list-group-item class="list"
                        ><b>Print File Format</b><br />
                        <span class="list-content"
                          >STL (STereoLithography)</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Print Filament Dia.</b><br />
                        <span class="list-content"
                          >1.75mm</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Layer Resolution</b><br />
                        <span class="list-content"
                          >0.100 mm - 0.300 mm</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list"
                        ><b>Printer Fillament Type</b><br />
                        <span class="list-content">PLA</span></b-list-group-item
                      >
                    </b-list-group>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="VENUS">
            <b-row>
              <b-col md="12" sm="12" lg="5"
                ><b-carousel
                  class="product-carousel"
                  indicators
                  :interval="4000"
                  controls
                >
                  <b-carousel-slide
                    img-src="/img/printer4a.jpg"
                    id="partner-product"
                  ></b-carousel-slide>
                  <b-carousel-slide
                    img-src="/img/printer4b.jpg"
                    id="partner-product"
                  ></b-carousel-slide>
                  <b-carousel-slide
                    img-src="/img/printer4c.jpg"
                    id="partner-product"
                  ></b-carousel-slide> </b-carousel
              ></b-col>
              <b-col md="12" sm="12" lg="7">
                <b-row no-gutters>
                  <b-col>
                    <b-list-group>
                      <b-list-group-item class="list"
                        ><b>Print Technology</b><br />
                        <span class="list-content"
                          >Fused Filament Fabrication</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>AC Power Input</b><br />
                        <span class="list-content"
                          >120/240 Volts</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Operating System</b><br />
                        <span class="list-content"
                          >Windows/ Mac OS/ Linux</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list"
                        ><b>Heater Bed</b><br />
                        <span class="list-content">Yes</span></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Printing Area</b><br />
                        <span class="list-content"
                          >190mm(L) x 190mm(W) x 140mm(H)</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Printing Nozzle Size</b><br />
                        <span class="list-content"
                          >0.2mm or 0.4mm</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list"
                        ><b>Connectivity</b><br />
                        <span class="list-content"
                          >USB, SD Memory Card, LCD Control Panel</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Options</b><br />
                        <span class="list-content"
                          >Wireless</span
                        ></b-list-group-item
                      >
                    </b-list-group>
                  </b-col>
                  <b-col>
                    <b-list-group>
                      <b-list-group-item class="list"
                        ><b>Print File Format</b><br />
                        <span class="list-content"
                          >STL (STereoLithography)</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Print Filament Dia.</b><br />
                        <span class="list-content"
                          >1.75mm</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list">
                        <b>Layer Resolution</b><br />
                        <span class="list-content"
                          >0.100 mm - 0.300 mm</span
                        ></b-list-group-item
                      >
                      <b-list-group-item class="list"
                        ><b>Printer Fillament Type</b><br />
                        <span class="list-content"
                          >PLA, ABS, PET</span
                        ></b-list-group-item
                      >
                    </b-list-group>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </div>
    </b-modal>
    <!-- END Modal for partner -->
  </div>
</template>

<script>
// import popup from '@/components/old/Popup.vue'
import partnerPopup from '@/components/old/partnerPopup.vue'
const map = require('@/utils/map')

// window.onload = function () {
//   console.log(map);
//   map()
// }
export default {
  mounted() {
    setTimeout(map, 2000)
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
      type: '',
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
    // popup,
    partnerPopup,
  },
  computed: {
    validationName() {
      return this.contact.name.length > 0
    },

    id() {
      return this.type + 'Modal'
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
  methods: {
    validationEmail() {
      let re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      console.log(re.test(this.contact.email))
      this.error.Email = true
    },
    submitForm() {
      this.$http
        .get('/send-form.php', {
          name: this.contact.name,
          email: this.contact.email,
          message: this.contact.message,
          contact: this.contact.number,
        })
        .then((response) => {
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
      console.log(category)
    },
    showProductModal() {
      this.partnerModal = !this.productModal
    },
    // onSwipeLeft() {
    //   console.log('left')
    // },
    // isNumber(evt) {
    //   this.contact.number = this.Number.replace(/\D/g, '')
    //   if (this.contact.number != '') {
    //     this.error.Number = false
    //     if (this.contact.number.length > 7) {
    //       this.error.MinNumber = false
    //     }
    //   }
    // },
    // submitForm() {
    //   if (this.contact.name == '') {
    //     this.error.Name = true
    //   }
    //   if (this.contact.email == '') {
    //     this.error.Email = true
    //   } else {
    //     var re =
    //       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //     this.error.EmailFormat = !re.test(this.Email)
    //   }
    //   if (this.contact.number == '') {
    //     this.error.Number = true
    //   } else {
    //     this.error.MinNumber = this.contact.number.length < 8
    //   }
    //   if (this.contact.message == '') {
    //     this.error.Message = true
    //   }

    //   var error = this.error
    //   var result = false
    //   Object.keys(this.error).map(function (value, index) {
    //     if (error[value]) result = true
    //   })

    //   // if (!result) {
    //   //   this.$http
    //   //     .get('/send-form.php', {
    //   //       name: this.Name,
    //   //       email: this.Email,
    //   //       message: this.Message,
    //   //       contact: this.Number,
    //   //     })
    //   //     .then((response) => {
    //   //       if (response.ok) {
    //   //         this.Number = ''
    //   //         this.Name = ''
    //   //         this.Email = ''
    //   //         this.Message = ''
    //   //       }
    //   //     })
    //   // }
    // },
    // removeError(para) {
    //   if (this[para] != '') {
    //     if (para == 'Email') {
    //       this.error[para] = false
    //       var re =
    //         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //       if (re.test(this.Email)) {
    //         this.error.EmailFormat = false
    //       }
    //     } else this.error[para] = false
    //   }
    // },
  },
}
</script>
