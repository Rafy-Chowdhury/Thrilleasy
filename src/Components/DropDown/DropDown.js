import React from 'react';
import {  Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './DropDown.css';

const DropDown = () => {
  
    return (
       <Container>
           <div className="placing">
               <div className="mr-3">
               <FontAwesomeIcon style={{ fontSize: '70px'}} icon={faCaretDown} />
               </div>
               <div>
               <h2>Thrilling Leh Ladakh Tour <br/> With Pangong Lake Highlight </h2>
               </div>
           </div>
           <div className="placingChild mt-4">
               <div className="mr-3">
               <FontAwesomeIcon style={{ fontSize: '30px', marginTop: '10px', marginLeft: '20px'}} icon={faChevronRight} />
               </div>
               <div>
               <p  style={{ fontSize: '30px', fontWeight: 'lighter'}}>Lorem Ipsum dolor sit amet, consec- <br/> tetur adipiscing elit</p>
               </div>
           </div>
           <div className="placingChild">
               <div className="mr-3">
               <FontAwesomeIcon style={{ fontSize: '30px', marginTop: '10px', marginLeft: '20px'}} icon={faChevronRight} />
               </div>
               <div>
               <p  style={{ fontSize: '30px', fontWeight: 'lighter'}}>Lorem Ipsum dolor sit amet, consec- <br/> tetur adipiscing elit</p>
               </div>
           </div>
           <div className="placingChild">
               <div className="mr-3">
               <FontAwesomeIcon style={{ fontSize: '30px', marginTop: '10px', marginLeft: '20px'}} icon={faChevronRight} />
               </div>
               <div>
               <p  style={{ fontSize: '30px', fontWeight: 'lighter'}}>Lorem Ipsum dolor sit amet, consec- <br/> tetur adipiscing elit</p>
               </div>
           </div>
           <div className="placingChild">
               <div className="mr-3">
               <FontAwesomeIcon style={{ fontSize: '30px', marginTop: '10px', marginLeft: '20px'}} icon={faChevronRight} />
               </div>
               <div>
               <p  style={{ fontSize: '30px', fontWeight: 'lighter'}}>Lorem Ipsum dolor sit amet, consec- <br/> tetur adipiscing elit</p>
               </div>
           </div>
           <div className="placingChild">
               <div className="mr-3">
               <FontAwesomeIcon style={{ fontSize: '30px', marginTop: '10px', marginLeft: '20px'}} icon={faChevronRight} />
               </div>
               <div>
               <p  style={{ fontSize: '30px', fontWeight: 'lighter'}}>Lorem Ipsum dolor sit amet, consec- <br/> tetur adipiscing elit</p>
               </div>
           </div>
           <div className="placingChild">
               <div className="mr-3">
               <FontAwesomeIcon style={{ fontSize: '30px', marginTop: '10px', marginLeft: '20px'}} icon={faChevronRight} />
               </div>
               <div>
               <p  style={{ fontSize: '30px', fontWeight: 'lighter'}}>Lorem Ipsum dolor sit amet, consec- <br/> tetur adipiscing elit</p>
               </div>
           </div>
       </Container>
    );
};

export default DropDown;