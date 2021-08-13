<template>
  <b-modal size="xl" id="partnerModal" v-model="show" hide-footer hide-header>
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="Introduction" active
          ><h1>Volunex Introduction</h1>
          <img
            src="img/volunex-logo.png"
            class="partner"
            alt="3Arts Partner Volunex Popup Logo" />
          <p>
            Volunex Pte Ltd is a fast growing Singapore based company that
            started designing and manufacturing affordable, easy-to- use, robust
            and ready-to- print personal 3D printer. We have a dedicated team
            with multi-disciplinary engineering expertise such as Robotics,
            Mechatronics, Instrumentation, Process Control and Computer
            Software. At Volunex, we are strongly committed to offer consumer a
            high quality and cost-effective 3D printing solutions with the
            spirit of the free software movement. Eventually, we strive to make
            personal 3D printing a better experience, accessible to anyone at an
            affordable price.
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
                  img-src="img/printer1a.jpg"
                  id="partner-product"
                ></b-carousel-slide>
                <b-carousel-slide
                  img-src="img/printer1b.jpg"
                  id="partner-product"
                ></b-carousel-slide>
                <b-carousel-slide
                  img-src="img/printer1c.jpg"
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
                      <span class="list-content">0.4mm</span></b-list-group-item
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
                  img-src="img/printer2a.jpg"
                  id="partner-product"
                ></b-carousel-slide>
                <b-carousel-slide
                  img-src="img/printer2b.jpg"
                  id="partner-product"
                ></b-carousel-slide>
                <b-carousel-slide
                  img-src="img/printer2c.jpg"
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
                  img-src="img/printer3a.jpg"
                  id="partner-product"
                ></b-carousel-slide>
                <b-carousel-slide
                  img-src="img/printer3b.jpg"
                  id="partner-product"
                ></b-carousel-slide>
                <b-carousel-slide
                  img-src="img/printer3c.jpg"
                  id="partner-product"
                ></b-carousel-slide>
                <b-carousel-slide
                  img-src="img/printer3d.jpg"
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
                  img-src="img/printer4a.jpg"
                  id="partner-product"
                ></b-carousel-slide>
                <b-carousel-slide
                  img-src="img/printer4b.jpg"
                  id="partner-product"
                ></b-carousel-slide>
                <b-carousel-slide
                  img-src="img/printer4c.jpg"
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

      <button type="button" class="close" @click="$emit('update:value', false)">&times;</button>
    </div>
  </b-modal>
</template>

<script type="text/javascript">
export default {
  props: {
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
  },
}
</script>
