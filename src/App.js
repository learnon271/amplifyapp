import logo from './images.svg';
import './css/App.css';
import './css/style.css';
import './css/bootstrap.min.css';

 
import React, { useEffect } from 'react';


function App() {
 
  
  return (
    <div className="App">     

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <h1
          className="App-link"

        >
     MOVE MONEY
        </h1>
      </header>
      


      <div id="carouselExampleIndicators" class="carousel slide">
                        <ol class="carousel-indicators">
                           <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                      
                           <div class="carousel-item active">
                              <div class="carousel-caption relative">
                                 <div class="row d_flex">
                                    <div  class="col-md-5">
                                       <div class="board">
                                          <i><img src="top_icon.png" alt="#"/></i>
                                          <h3>
                                             Safe & Secured<br /> Fee Waive <br /> <b>MEGASPEED</b>
                                          </h3>
                                          <div class="link_btn">
                                             <a class="read_more" href="https://wa.me/237620272223">Learn More   <span></span></a>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-7">
                                       <div class="banner_img">
                                          <figure><img class="img_responsive" src="banner_img.png" /></figure>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        
                           <div class="carousel-item">
                              <div class="carousel-caption relative">
                                 <div class="row d_flex">
                                    <div  class="col-md-5">
                                       <div class="board">
                                          <i><img src="top_icon.png" alt="#"/></i>
                                          <h3>
                                             Skating<br /> Board<br /> School
                                          </h3>
                                          <div class="link_btn">
                                             <a class="read_more" href="Javascript:void(0)">Read More   <span></span></a>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-7">
                                       <div class="banner_img">
                                          <figure><img class="img_responsive" src="banner_img.png" /></figure>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                         
                           <div class="carousel-item">
                              <div class="carousel-caption relative">
                                 <div class="row d_flex">
                                    <div  class="col-md-5">
                                       <div class="board">
                                          <i><img src="top_icon.png" alt="#"/></i>
                                          <h3>
                                             Skating<br /> Board<br /> School
                                          </h3>
                                          <div class="link_btn">
                                             <a class="read_more" href="Javascript:void(0)">Read More   <span></span></a>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-7">
                                       <div class="banner_img">
                                          <figure><img class="img_responsive" src="banner_img.png" /></figure>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                      
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <i class="fa fa-arrow-left" aria-hidden="true"></i>
                        <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        <span class="sr-only">Next</span>
                        </a>
                     </div>
        


                     <div class="class">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage text_align_center">
                     <h2>Our Insterest </h2>
                     <p>Transfering of funds shouldn't be a problem in a Digitalised world <br /><strong>No cost</strong></p>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-4 margi_bottom">
                  <div class="class_box text_align_center">
         
                     <h3> Guaranteed</h3>
                     <p>You can trust that transfers will be delivered on time or you will get a refund. Money transfers are sent within minutes to your recipient’s details  </p>
                  </div>
               
               </div>
               <div class="col-md-4 margi_bottom">
                  <div class="class_box blue text_align_center">
                      
                     <h3>Global coverage</h3>
                     <p>We transfer money to a lot of  countries, and regularly add new ones to our platform. We equally support multiple payment mothods that  
                      suits you . </p>
                  </div>
 
               </div>
               <div class="col-md-4 margi_bottom">
                  <div class="class_box text_align_center">
                      
                     <h3> 24/7 support</h3>
                     <p>Hear directly from us about the No fees or Exchange rate drama. Money never sleeps, and neither do we. We’re here to help at any time of the day. </p>
                  </div>
                  <a class="read_more" href="https://wa.me/237620272223">Reach out</a>


               </div>
            </div>
         </div>
      </div>




      <div class="about">
         <div class="container-fluid">
            <div class="row d_flex">
               <div class="col-md-6">
                  <div class="titlepage text_align_left">
                     <h2>ZERO <br />EXCHANGE <br /> RATE</h2>
                     <p>Literally! No ridiclouse fee
                     </p>
                     <div class="link_btn">
                        <a class="read_more" href="about.html">Try now</a>
                     </div>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="about_img text_align_center">
                     <figure><img src="sendi.png" alt="DATA BANK"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>









      <div class="testimonial">
         <div class="container">
            <div class="row">
               <div class="col-sm-12">
                  <div class="titlepage text_align_center">
                     <h2>Testimonial</h2>
                  </div>
               </div>
            </div>
    
            <div class="row">
               <div class="col-md-12">
                  <div id="myCarousel" class="carousel slide" data-ride="carousel">
                     <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                     </ol>
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <div class="container-fluid">
                              <div class="carousel-caption relative">
                                 <div class="row d_flex">
                                    <div class="col-md-3">
                                       <div class="test_box text_align_center">
                                          <span><img src="test1.jpg" alt="#"/></span>
                                          <h4>Anonymous</h4>
                                          <img class="img_responsive" src="te.png" alt="#"/>
                                          <p>Thank you</p>
                                       </div>
                                    </div>
                                    <div class="col-md-6">
                                       <div class="test_box white_bg text_align_center">
                                          <span><img src="test2.png" alt="#"/></span>
                                          <h4>Anonymous</h4>
                                          <img class="img_responsive" src="te2.png" alt="#"/>
                                          <p>I am very happy <br /><img src="proof.jpg" alt="#"/></p>
                                       </div>
                                    </div>
                                    <div class="col-md-3">
                                       <div class="test_box text_align_center">
                                          <span><img src="test3.png" alt="#"/></span>
                                          <h4>Anonymous</h4>
                                          <img class="img_responsive" src="te.png" alt="#"/>
                                          <p>Thanks a lot</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        
                     </div>
            
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="copyright">
               <div class="container">
                  <div class="row">

                  
 

 
  fb contact
 
 
    <div id="fb-root"></div>
 
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>


    


                     <div class="col-md-12">
                     <a href="https://wa.me/237620272223" target="_blank">
                  <img src="wassap.jpg" alt="WhatsApp Button" />
                    </a> 
                        <p>© 2023 All Rights Reserved. </p>
                     </div>
                  </div>
               </div>
            </div>

    </div>

  );
}

export default App;
