import React from 'react';
import $ from 'jquery';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Comments from '../Comments/Comments';
import Footer from '../Footer/Footer';

function Main() {

    // $(window).on("load",function() {
    //     $(window).scroll(function() {
    //       let windowBottom = $(this).scrollTop() + $(this).innerHeight();
    //       $(".section").each(function() {
    //         /* Check the location of each desired element */
    //         let objectBottom = $(this).offset().top + $(this).outerHeight();
            
    //         /* If the element is completely within bounds of the window, fade it in */
    //         if (objectBottom < windowBottom) { //object comes into view (scrolling down)
    //           if ($(this).css("opacity")===0) {$(this).fadeTo(500,1);}
    //         } else { //object goes out of view (scrolling up)
    //           if ($(this).css("opacity")===1) {$(this).fadeTo(500,0);}
    //         }
    //       });
    //     }).scroll(); //invoke scroll-handler on page-load
    //   });

      $(function(){  // $(document).ready shorthand
        $('.monster').fadeIn('slow');
      });
      
      $(document).ready(function() {
          
          /* Every time the window is scrolled ... */
          $(window).scroll( function(){
          
              /* Check the location of each desired element */
              $('.section').each( function(i){
                  
                  var bottom_of_object = $(this).position().top + $(this).outerHeight();
                  var bottom_of_window = $(window).scrollTop() + $(window).height();
                  
                  /* If the object is completely visible in the window, fade it it */
                  if( bottom_of_window > bottom_of_object ){
                      
                      $(this).animate({'opacity':'1'},1500);
                          
                  }
                  
              }); 
          
          });
          
      });

    return (
        <div className="main">
            <Header />
            <Hero />
            <AboutMe />
            <Projects />
            <Comments />
            <Footer />
        </div>
    )
}

export default Main;
