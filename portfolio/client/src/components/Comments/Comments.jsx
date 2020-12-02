import React from 'react';
import axios from 'axios';
import Bubble from '../../assets/images/quote-border.png';
import './comments.scss';

class Comments extends React.Component {

    state = {
        comments: ''
    }

    componentDidMount() {
        axios.get('http://localhost:5000/comments')
            .then(res => {
                console.log(res.data)
                this.setState({
                    comments: res.data
                });
            })
            .catch(err => console.log(err))
    };

    typeWriter = (e) => {
        e.preventDefault();
        let i = 0;
        let txt = document.querySelector('.comments__heading').innerText;
        let speed = 50;
        if (i < txt.length) {
            document.getElementById("text").innerHTML += txt.charAt(i);
            i++;
            setTimeout(this.typeWriter, speed);
        }
    }
    render() {
        return (
            <div className="section comments" id="comments">
                <p className="comments__title">comments</p>
                <div className="comments__box">
                    <form className="comments__box-form" onSubmit={(e) => this.typeWriter(e)}>
                        <label className="comments__form-label">Name:</label>
                        <br/><input className="comments__form-input comments__form-input--name"></input>
                        <br/><label className="comments__form-label">Position (Related to Me):</label>
                        <br/><input className="comments__form-input comments__form-input--position"></input>
                        <br/><label className="comments__form-label">Comment:</label>
                        <br/><textarea className="comments__form-input comments__form-input--comment"></textarea>
                        <br/><br/><button className="comments__form-button" type="submit">Submit</button>
                    </form>
                    <p className="comments__heading">Name said...</p>
                    <div className="comments__box-comments">
                        <img src={Bubble} alt="Comments Bubble" className="comments__background"/>
                        <div className="comments__container">
                            <p className="comments__text comments__text1" id="text">I had the great pleasure to lead the class that Sandy took at BrainStation. I was very impressed with her work ethic, her personality and her insatiable curiosity. Sandy's capstone project was very creative and showed a great deal of imagination and technical prowess. Always open to feedback, she was one of my top students. I would recommend Sandy to any organization lucky enough to have her on their team. I expect great things from her and I would not hesitate if the opportunity ever came to me to work with her again.</p>
                            <p className="comments__text comments__text2">From the first project that Sandy submitted, I knew that she would be a top performer in our web development class. She remained consistent in her quality delivery throughout the diploma program and never once dropped the ball. Her background in nursing definitely gave her the grit and resilience needed to get through the high workload and stressful instances of the program. For her pair programming and capstone projects, she amazed her classmates with the quality execution of her creative ideas. I'm so grateful to have witnessed Sandy's skills develop over the last 12 weeks, and I have no doubt that the next team she's a part of will be grateful for her too.</p>
                            <p className="comments__text comments__text3">What I love about Sandy is her focus on action. She understands how teams work and is able to apply herself in a way that is positive and encourages that action-oriented mentality in others. During our time together at BrainStation, I had a lot of fun acting as her mentor. She demonstrated a massive capacity to learn, in short-order, and execute just the same. Sandy is clear-minded and highly skilled even beyond her technical skill set. I have no doubt that she'll be a pillar of progress in any organization she's a part of.</p>
                            <p className="comments__text comments__text4">It was a pleasure to work with Sandy on a BrainStation 4D adidas hackathon. Sandy collaborated with my UX design team to help bring our concept prototype to life using her development skills. It was easy to communicate what she needed from the designers to build the app. Her attention to detail was remarkable, and wasn't afraid to suggest improvements. Indeed a team player. She was a pleasure to work with and a great asset to the team!</p>
                        </div>
                    </div>
                    <p className="comments__position">~ Teaching Assistant, BrainStation</p>
                </div>
            </div>
        )
    }
}

export default Comments;
