import React from 'react'
import SeeMore from "./SeeMore";
import '../Style/Projects.css'
import Tradee from "../Asset/TradExpress.png"
import Naturee from "../Asset/nature webstite - Google Chrome 2023-01-17 21.35.2.png"
import Cal from "../Asset/Calculator.png"
import Count from "../Asset/counter App -.png"
import Music from "../Asset/Music.png"
import Sunny from "../Asset/SunnySide _ Landing - Google Chrome 2023-01-17 21..png"

const Project = () => {
  return (
    <div>
    <div>
      <div>
    <div className='project'>
      <div >
      <h1 className='cont1'>Portfolio</h1>
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="thumbnail">
                  <a href="https://odubaayotomiwagoddid.netlify.app/" target="_blank">
                    <div className="thumbnail-hover text-center">
                      <i className="fa fa-eye fa-4x"></i>
                    </div>
                    <img className="img-responsive" src={Tradee} alt="TradeExpress" /> 
                  </a>
                  <div className="caption">
                    <h3>TradExpress</h3>
                    <p>Using React to build this CryptoCurrency Trading Website</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="thumbnail">
                  <a href="https://tommybootstrap247.netlify.app/" target="_blank">
                    <div className="thumbnail-hover text-center">
                      <i className="fa fa-eye fa-4x"></i>
                    </div>
                    <img className="img-responsive" src={Naturee} alt="" /> 
                  </a>
                  <div className="caption">
                    <h3>Nature Website</h3>
                    <p>I used Bootsrap to create this website</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="thumbnail">
                  <a href="https://courageous-moxie-511ad2.netlify.app/" target="_blank">
                    <div className="thumbnail-hover text-center">
                      <i className="fa fa-eye fa-4x"></i>
                    </div>
                    <img src={Cal} alt="calculatorpic" />
                  </a>
                  <div className="caption">
                    <h3>Calculator</h3>
                    <p>I Made This Website With Vanilla JavaScript</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="thumbnail">
                  <a href="https://jazzy-stroopwafel-752cba.netlify.app/" target="_blank">
                    <div className="thumbnail-hover text-center">
                      <i className="fa fa-eye fa-4x"></i>
                    </div>
                    <img src={Count} alt="" />
                  </a>
                  <div className="caption">
                    <h3>Counter App</h3>
                    <p>Made with Pure JavaScript</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="thumbnail">
                  <a href="https://luxury-sopapillas-5786c7.netlify.app/" target="_blank">
                    <div className="thumbnail-hover text-center">
                      <i className="fa fa-eye fa-4x"></i>
                    </div>
                    <img src={Music} alt="" />
                  </a>
                  <div className="caption">
                    <h3>Music Landing Page</h3>
                    <p>Made This Landing Page With HTML,CSS and JAVASCRIPT</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="thumbnail">
                  <a href="#" target="_blank">
                    <div className="thumbnail-hover text-center">
                      <i className="fa fa-eye fa-4x"></i>
                    </div>
                    <img src={Sunny} alt="" />
                  </a>
                  <div className="caption">
                    <h3>SunnySide</h3>
                    <p>Just the Landing Page</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div>
  <SeeMore/>
    </div>
      </div>
    </div>
  )
}

export default Project