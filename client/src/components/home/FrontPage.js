import React from "react"
import ApiData from '../APIData';
import './frontPage.css';

import FrontPageSection from "./FrontPageSections/Section3";

function FrontPage() {


    return (
      <>
     
      {/* <FrontPageSection /> */}
      
        
        <div className='main  tile is-ancestor'>
        <div className='tile is-vertical is-8'>
          <div className='tile'>
            <div className='tile is-parent is-vertical' >
              <article className=" tile is-child is-warning notification">
                <p className="title">title</p>
                <p className="subtitle">Subtitle</p>
              </article>
              <article className="  tile is-child notification is-warning">
                <p className="title">...tiles</p>
                <p className="subtitle">Bottom tile</p>
              </article> 
            </div>
            {/* <div className="tile is-parent ">
              <article className="tile is-child notification is-info">
                <p className="title">Middle tile</p>
                <ApiData />
                <p className="subtitle">With an image</p>
              </article>
            </div> */}
          </div>
          {/* <div className=" tile is-parent">
            <article className="tile is-child notification is-danger">
              <p className="title">Wide tile</p>
              <p className="subtitle">Aligned with the right tile</p>
              <div className="content">
                content
              </div>
            </article>
          </div> */}
      </div>
    </div>
    </>
    )
}

export default FrontPage;