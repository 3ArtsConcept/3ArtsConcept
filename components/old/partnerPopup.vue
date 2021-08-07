    <template>
        <div id="partnerModal" class="modal fade" role="dialog">
            <div class="modal-dialog  modal-lg">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <div class="form-group partner_select">
                            <select v-model="selected_product" class="form-control">
                                <option value=0>Introduction</option>
                                <option value=1>i3 MINI KIT</option>
                                <option value=2>MARS Serires</option>
                                <option value=3>LUNAR</option>
                                <option value=4>VENUS</option>
                            </select>
                        </div>
                        <tabs :active="active">
                          <tab header="Introduction">
                              <h1>Volunex Introduction</h1>
                              <img src="/img/volunex-logo.png" class="partner" alt="3Arts Partner Volunex Popup Logo"> 
                              <p>
                                  Volunex Pte Ltd is a fast growing Singapore based company that started designing and
                                  manufacturing affordable, easy-to- use, robust and ready-to- print personal 3D printer. We have a
                                  dedicated team with multi-disciplinary engineering expertise such as Robotics, Mechatronics,
                                  Instrumentation, Process Control and Computer Software. At Volunex, we are strongly committed to
                                  offer consumer a high quality and cost-effective 3D printing solutions with the spirit of the free
                                  software movement. Eventually, we strive to make personal 3D printing a better experience,
                                  accessible to anyone at an affordable price.
                                  <br><br>
                                  Our 3D printers allow one to explore their creativity and imagination to design and manufacture
                                  virtually anywhere using 3D printing technology, whether short-run manufacturing or rapid
                                  prototyping to make a three-dimensional solid object of virtually any shape.
                                  <br><br>
                              </p>
                          </tab>
                          <tab header="i3 MINI KIT">
                            <div class="row partner_wrapper">
                                <div class="col-sm-5">
                                    <div id="owl-demo" class="owl-carousel owl-theme product-carousel">
                                        <div class="item"><img src="/img/printer1a.jpg" alt="3Arts , Volunex i3 Mini Kit 3D Machine Angle 1"></div>
                                        <div class="item"><img src="/img/printer1b.jpg" alt="3Arts , Volunex i3 Mini Kit 3D Machine Angle 2"></div>
                                        <div class="item"><img src="/img/printer1c.jpg" alt="3Arts , Volunex i3 Mini Kit 3D Machine Angle 3"></div>
                                    </div>
                                </div>
                                <div class="col-sm-7 no-gutter partner_content_wrapper">
                                    <div class="partner_content_row">
                                        <div class="col-ms-6">
                                            <b>Print Technology</b><br>
                                            <span>Fused Filament Fabrication</span>
                                        </div>
                                        <div class="col-ms-6">
                                            <b>Print File Format</b><br>
                                            <span>STL (STereoLithography)</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-ms-6">
                                            <b>AC Power Input</b><br>
                                            <span>120/240 Volts</span>
                                        </div>
                                        <div class="col-ms-6">
                                            <b>Print Filament Dia.</b><br>
                                            <span>1.75mm</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-ms-6">
                                            <b>Operating System</b><br>
                                            <span>Windows/ Mac OS/ Linux</span>
                                        </div>
                                        <div class="col-ms-6">
                                            <b>Layer Resolution</b><br>
                                            <span>0.100 mm - 0.300 mm</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-ms-6">
                                            <b>Heater Bed</b><br>
                                            <span>Not Applicable</span>
                                        </div>
                                        <div class="col-ms-6">
                                            <b>Printer Fillament Type</b><br>
                                            <span>PLA</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-xs-12">
                                            <b>Printing Area</b><br>
                                            <span>120mm(L) x 120mm(W) x 100mm(H)</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-xs-12">
                                            <b>Printing Nozzle Size</b><br>
                                            <span>0.4mm</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-xs-12">
                                            <b>Connectivity</b><br>
                                            <span>USB, SD Memory Card, LCD Control Panel</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-xs-12">
                                            <b>Options</b><br>
                                            <span>Wireless, Auto Bed Leveling</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </tab>
                        <tab header="MARS Series">
                            <div class="row partner_wrapper">
                                <div class="col-sm-5">
                                    <div id="owl-demo" class="owl-carousel owl-theme product-carousel">
                                        <div class="item"><img src="/img/printer2a.jpg" alt="3Arts , Volunex Mars Series 3D Machine Angle 1"></div>
                                        <div class="item"><img src="/img/printer2b.jpg" alt="3Arts , Volunex Mars Series 3D Machine Angle 2"></div>
                                        <div class="item"><img src="/img/printer2c.jpg" alt="3Arts , Volunex Mars Series 3D Machine Angle 3"></div>
                                    </div>
                                </div>
                                <div class="col-sm-7 no-gutter partner_content_wrapper">
                                    <div class="partner_content_row">
                                        <div class="col-ms-6">
                                            <b>Print Technology</b><br>
                                            <span>Fused Filament Fabrication</span>
                                        </div>
                                        <div class="col-ms-6">
                                            <b>Print File Format</b><br>
                                            <span>STL (STereoLithography)</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-ms-6">
                                            <b>AC Power Input</b><br>
                                            <span>120/240 Volts</span>
                                        </div>
                                        <div class="col-ms-6">
                                            <b>Print Filament Dia.</b><br>
                                            <span>1.75mm</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-ms-6">
                                            <b>Operating System</b><br>
                                            <span>Windows/ Mac OS/ Linux</span>
                                        </div>
                                        <div class="col-ms-6">
                                            <b>Layer Resolution</b><br>
                                            <span>0.100 mm - 0.300 mm</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-ms-6">
                                            <b>Heater Bed</b><br>
                                            <span>Yes</span>
                                        </div>
                                        <div class="col-ms-6">
                                            <b>Printer Fillament Type</b><br>
                                            <span>PLA, ABS, PET</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-xs-12">
                                            <b>Printing Area</b><br>
                                            <span>300mm(L) x 200mm(W) x 200mm(H) (Height Customizable)</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-xs-12">
                                            <b>Printing Nozzle Size</b><br>
                                            <span>0.2mm or 0.4mm</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-xs-12">
                                            <b>Connectivity</b><br>
                                            <span>USB, SD Memory Card, LCD Control Panel</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-xs-12">
                                            <b>Options</b><br>
                                            <span>Wireless, Auto Bed Leveling</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </tab>
                        <tab header="LUNAR">
                            <div class="row partner_wrapper">
                                <div class="col-sm-5">
                                    <div id="owl-demo" class="owl-carousel owl-theme product-carousel">
                                        <div class="item"><img src="/img/printer3a.jpg" alt="3Arts , Volunex Lunar 3D Machine Angle 1"></div>
                                        <div class="item"><img src="/img/printer3b.jpg" alt="3Arts , Volunex Lunar 3D Machine Angle 2"></div>
                                        <div class="item"><img src="/img/printer3c.jpg" alt="3Arts , Volunex Lunar 3D Machine Angle 3"></div>
                                        <div class="item"><img src="/img/printer3d.jpg" alt="3Arts , Volunex Lunar 3D Machine Angle 4"></div>
                                    </div>
                                </div>
                                <div class="col-sm-7 no-gutter partner_content_wrapper">
                                    <div class="partner_content_row">
                                        <div class="col-ms-6">
                                            <b>Print Technology</b><br>
                                            <span>Fused Filament Fabrication</span>
                                        </div>
                                        <div class="col-ms-6">
                                            <b>Print File Format</b><br>
                                            <span>STL (STereoLithography)</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-ms-6">
                                            <b>AC Power Input</b><br>
                                            <span>120/240 Volts</span>
                                        </div>
                                        <div class="col-ms-6">
                                            <b>Print Filament Dia.</b><br>
                                            <span>1.75mm</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-ms-6">
                                            <b>Operating System</b><br>
                                            <span>Windows/ Mac OS/ Linux</span>
                                        </div>
                                        <div class="col-ms-6">
                                            <b>Layer Resolution</b><br>
                                            <span>0.100 mm - 0.300 mm</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-ms-6">
                                            <b>Heater Bed</b><br>
                                            <span>Not Applicable</span>
                                        </div>
                                        <div class="col-ms-6">
                                            <b>Printer Fillament Type</b><br>
                                            <span>PLA</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-xs-12">
                                            <b>Printing Area</b><br>
                                            <span>180mm(D) x 110mm(H) (Rotary Base)</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-xs-12">
                                            <b>Printing Nozzle Size</b><br>
                                            <span>0.2mm or 0.4mm</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-xs-12">
                                            <b>Connectivity</b><br>
                                            <span>USB, SD Memory Card, LCD Control Panel</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-xs-12">
                                            <b>Options</b><br>
                                            <span>Wireless</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </tab>
                        <tab header="VENUS">
                            <div class="row partner_wrapper">
                                <div class="col-sm-5">
                                    <div id="owl-demo" class="owl-carousel owl-theme product-carousel">
                                        <div class="item"><img src="/img/printer4a.jpg" alt="3Arts , Venus 3D Machine Angle 1"></div>
                                        <div class="item"><img src="/img/printer4b.jpg" alt="3Arts , Venus 3D Machine Angle 2"></div>
                                        <div class="item"><img src="/img/printer4c.jpg" alt="3Arts , Venus 3D Machine Angle 3"></div>
                                    </div>
                                </div>
                                <div class="col-sm-7 no-gutter partner_content_wrapper">
                                    <div class="partner_content_row">
                                        <div class="col-ms-6">
                                            <b>Print Technology</b><br>
                                            <span>Fused Filament Fabrication</span>
                                        </div>
                                        <div class="col-ms-6">
                                            <b>Print File Format</b><br>
                                            <span>STL (STereoLithography)</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-ms-6">
                                            <b>AC Power Input</b><br>
                                            <span>120/240 Volts</span>
                                        </div>
                                        <div class="col-ms-6">
                                            <b>Print Filament Dia.</b><br>
                                            <span>1.75mm</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-ms-6">
                                            <b>Operating System</b><br>
                                            <span>Windows/ Mac OS/ Linux</span>
                                        </div>
                                        <div class="col-ms-6">
                                            <b>Layer Resolution</b><br>
                                            <span>0.100 mm - 0.300 mm</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-ms-6">
                                            <b>Heater Bed</b><br>
                                            <span>Yes</span>
                                        </div>
                                        <div class="col-ms-6">
                                            <b>Printer Fillament Type</b><br>
                                            <span>PLA, ABS, PET</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-xs-12">
                                            <b>Printing Area</b><br>
                                            <span>190mm(L) x 190mm(W) x 140mm(H)</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-xs-12">
                                            <b>Printing Nozzle Size</b><br>
                                            <span>0.2mm or 0.4mm</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-xs-12">
                                            <b>Connectivity</b><br>
                                            <span>USB, SD Memory Card, LCD Control Panel</span>
                                        </div>
                                    </div>
                                    <div class="partner_content_row">
                                        <div class="col-xs-12">
                                            <b>Options</b><br>
                                            <span>Wireless</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </tab>
                    </tabs>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    window.$ = window.jQuery = require('jquery')
    var owl = require('owl.carousel/src/js/owl.carousel.js')
    var VueStrap = require('vue-strap/dist/vue-strap.min.js');

    export default {
        ready(){
            $(".product-carousel").owlCarousel({
                pagination : true, 
                slideSpeed : 300,
                paginationSpeed : 400,
                singleItem:true
            });
        },
        data(){
            return {
                selected_product:0,
                // active:1,
            }
        },
        components:{
            'tabs':VueStrap.tabset,
            'tab':VueStrap.tab,
        },
        computed:{
            active(){
                return parseInt(this.selected_product)
            }
        }
    }

</script>
