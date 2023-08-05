import "./css/Mainheading.css"

import React from 'react'

export default function Mainheading() {
  return (
    <section id="mainheading">
        <div className="mainheading-container">
            <div className="mainheading-upper">
            <h1>Financial</h1>
            <h1>Freedom</h1>
            </div>
            <div className="mainheading-lower">
                <p>
                    Lorem ipsum dolor<br />sit amet consectetur adipisicing elit.<br />Ipsam nemo harum!
                    <br />
                    <a href="">
                        <i class="fa-solid fa-circle-chevron-right"></i>
                    </a>
                </p>
                <a href="">Overcome<br />Recession <img src={require("./images/lol.png")} alt="" /> </a>
            </div>
        </div>
    </section>
  )
}
