import React from 'react';
import Bubble from '../../assets/images/quote-border.png';
import './comments.scss';

function Comments() {

    let i = 0;
    let txt = 'Lorem ipsum typing effect!'; /* The text */
    let speed = 50; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    }
    return (
        <div className="section comments" id="comments">
            <p className="comments__title">comments</p>
            <div className="comments__box">
                <div className="comments__box-form">
                    
                </div>
                <div className="comments__box-comments">
                    <img src={Bubble} alt="Comments Bubble" className="comments__background"/>
                    <div className="comments__container">
                        <p className="comments__text comments__text4">I had the great pleasure to lead the class that Sandy took at BrainStation. I was very impressed with her work ethic, her personality and her insatiable curiosity. Sandy's capstone project was very creative and showed a great deal of imagination and technical prowess. Always open to feedback, she was one of my top students. I would recommend Sandy to any organization lucky enough to have her on their team. I expect great things from her and I would not hesitate if the opportunity ever came to me to work with her again.</p>
                        <p className="comments__text comments__text3">From the first project that Sandy submitted, I knew that she would be a top performer in our web development class. She remained consistent in her quality delivery throughout the diploma program and never once dropped the ball. Her background in nursing definitely gave her the grit and resilience needed to get through the high workload and stressful instances of the program. For her pair programming and capstone projects, she amazed her classmates with the quality execution of her creative ideas. I'm so grateful to have witnessed Sandy's skills develop over the last 12 weeks, and I have no doubt that the next team she's a part of will be grateful for her too.</p>
                        <p className="comments__text comments__text2">What I love about Sandy is her focus on action. She understands how teams work and is able to apply herself in a way that is positive and encourages that action-oriented mentality in others. During our time together at BrainStation, I had a lot of fun acting as her mentor. She demonstrated a massive capacity to learn, in short-order, and execute just the same. Sandy is clear-minded and highly skilled even beyond her technical skill set. I have no doubt that she'll be a pillar of progress in any organization she's a part of.</p>
                        <p className="comments__text comments__text1">It was a pleasure to work with Sandy on a BrainStation 4D adidas hackathon. Sandy collaborated with my UX design team to help bring our concept prototype to life using her development skills. It was easy to communicate what she needed from the designers to build the app. Her attention to detail was remarkable, and wasn't afraid to suggest improvements. Indeed a team player. She was a pleasure to work with and a great asset to the team!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments;
