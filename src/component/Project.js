import React from 'react'
import SeeMore from "./SeeMore";
import '../Style/Projects.css'
import Tradee from "../Asset/TradExpress.png"
import Naturee from "../Asset/nature webstite - Google Chrome 2023-01-17 21.35.2.png"
import Cal from "../Asset/Calculator.png"
import Daddy from "../Asset/daddys joke.png"
import Music from "../Asset/Music.png"
import Darkand from "../Asset/darkand.png"

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
                  <a href="https://odubaayotomiwagoddid.netlify.app/">
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
                  <a href="https://tommybootstrap247.netlify.app/" >
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
                  <a href="https://courageous-moxie-511ad2.netlify.app/" >
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
                  <a href="https://fabulous-medovik-020c79.netlify.app/">
                    <div className="thumbnail-hover text-center">
                      <i className="fa fa-eye fa-4x"></i>
                    </div>
                    <img src={Daddy} alt="" />
                  </a>
                  <div className="caption">
                    <h3>Daddy's Joke</h3>
                    <p>This is website that generate  random jokes</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="thumbnail">
                  <a href="https://luxury-sopapillas-5786c7.netlify.app/" >
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
                  <a href="https://famous-truffle-50f43c.netlify.app">
                    <div className="thumbnail-hover text-center">
                      <i className="fa fa-eye fa-4x"></i>
                    </div>
                    <img src={Darkand} alt="" />
                  </a>
                  <div className="caption">
                    <h3>Dark and White Calculator</h3>
                    <p>a Dark and white calculator</p>
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