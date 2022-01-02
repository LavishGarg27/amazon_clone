import React from 'react'

function Footer(props) {

  // const { t, i18n } = props;
  // const rtl = ( i18n.languages[0] == 'pk' ? 'text-right' : '');

  return (
    <React.Fragment>
        {/* <!-- Footer Starts --> */}
  <div class="container-fluid bg-dark px-0">
    <a href="#pageTop" class="btn btn-dark btn-block mb-5">Back to Top</a>
    
    <div class="container">
      <div class="row text-white mb-5">

        <div class="col-md-3">
          <h5>Get to know us</h5>
          <a href="#" class="text-white">About</a> <br />
          <a href="#" class="text-white">Careers</a> <br />
          <a href="#" class="text-white">Press Release</a> <br />
          <a href="#" class="text-white">Investment</a> <br />
          <a href="#" class="text-white">Offers</a> <br />
        </div>

        <div class="col-md-3">
          <h5>Connect With Us</h5>
          <a href="#" class="text-white">Facebook</a> <br />
          <a href="#" class="text-white">Twitter</a> <br />
          <a href="#" class="text-white">Instagram</a> <br />
        </div>

        <div class="col-md-3">
          <h5>Make Money With Us</h5>
          <a href="#" class="text-white">Sell on Amazon</a> <br />
          <a href="#" class="text-white">Affiliate Marketing</a> <br />
          <a href="#" class="text-white">Fullfilment Center</a> <br />
          <a href="#" class="text-white">Advertise Your Product</a> <br />
          <a href="#" class="text-white">Amazon Pay</a> <br />
        </div>

        <div class="col-md-3">
          <h5>Let Us Help You</h5>
          <a href="#" class="text-white">COVID 19</a> <br />
          <a href="#" class="text-white">Your Account</a> <br />
          <a href="#" class="text-white">Returns</a> <br />
          <a href="#" class="text-white">Funding</a> <br />
          <a href="#" class="text-white">Help</a> <br />
        </div>

      </div>
    </div>

    <div class="dropdown-divider mt-3"></div>

    <div class="row mt-3 mx-0 px-0">
      <div class="col-md-12 text-center">
        <img src="assets/img/amazon_logo_white.png" height="30" width="100" alt="amazon logo white footer" />
      </div>
    </div>


    {/* <!-- Sub footer starts --> */}
    <div class="py-3 mt-3 shadow-lg" style={{backgroundColor: '#131a22', fontSize: '12px'}}> 
      <div class="container">

        <div class="row text-white">

          <div class="col-md-3">
            <p>Get to know us</p>
            <a href="#" class="text-white">About</a> <br />
            <a href="#" class="text-white">Careers</a> <br />
            <a href="#" class="text-white">Press Release</a> <br />
            <a href="#" class="text-white">Investment</a> <br />
            <a href="#" class="text-white">Offers</a> <br />
          </div>
  
          <div class="col-md-3">
            <p>Connect With Us</p>
            <a href="#" class="text-white">Facebook</a> <br />
            <a href="#" class="text-white">Twitter</a> <br />
            <a href="#" class="text-white">Instagram</a> <br />
          </div>
  
          <div class="col-md-3">
            <p>Make Money With Us</p>
            <a href="#" class="text-white">Sell on Amazon</a> <br />
            <a href="#" class="text-white">Affiliate Marketing</a> <br />
            <a href="#" class="text-white">Fullfilment Center</a> <br />
            <a href="#" class="text-white">Advertise Your Product</a> <br />
            <a href="#" class="text-white">Amazon Pay</a> <br />
          </div>
  
          <div class="col-md-3">
            <p>Let Us Help You</p>
            <a href="#" class="text-white">COVID 19</a> <br />
            <a href="#" class="text-white">Your Account</a> <br />
            <a href="#" class="text-white">Returns</a> <br />
            <a href="#" class="text-white">Funding</a> <br />
            <a href="#" class="text-white">Help</a> <br />
          </div>
  
        </div>


        <div class="row my-5">
          <div class="col-md-12 text-center text-white">
            <p>
              <i class="far fa-copyright"></i> 1996-2020, Amazon.com Inc.
            </p>
          </div>
        </div>

      </div>
    </div>
    </div>
    </React.Fragment>
  )
}

export default Footer;
