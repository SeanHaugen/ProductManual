import React, {useEffect, useRef} from 'react';
// import $ from 'jquery';
import './section3.css'

function FrontPageSection() {

    // const sectionRef = useRef(null);

    // useEffect(() => {
    //   const handleScroll = () => {
    //     const section3Top = $(sectionRef.current).offset().top;
    //     const section3Bottom = section3Top + $(sectionRef.current).outerHeight();
    //     const viewportTop = $(window).scrollTop();
    //     const viewportBottom = viewportTop + $(window).height();
  
    //     if (section3Bottom > viewportTop && section3Top < viewportBottom) {
    //       $(sectionRef.current).find('h1').addClass('h1-appear');
    //     }
    //   };
  
    //   $(window).scroll(handleScroll);
  
    //   return () => {
    //     $(window).off('scroll', handleScroll);
    //   };
    // }, []);
  
  

    return (
        <>
        <div className='section3' ><h1>Link</h1> <h1>Link</h1> <h1>Link</h1></div>
        
        </>
    )
    }

    export default FrontPageSection;