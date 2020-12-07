import React from 'react';
import axios from 'axios';
import Bubble from '../../assets/images/quote-border.png';
import BrainStation from '../../assets/images/brainstation.png';
import './comments.scss';

class Comments extends React.Component {

    state = {
        comments: null
    }

    componentDidMount() {
        axios.get('http://localhost:5000/comments')
            .then(res => {
                console.log(res.data)
                this.setState({
                    comments: res.data
                });
                console.log(this.state.comments)
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
        console.log(this.state.comments)
        return (
            
            <div className="section comments" id="comments">
                <p className="comments__title">comments</p>
                <div className="comments__box">
                    <form className="comments__box-form" onSubmit={(e) => this.typeWriter(e)}>
                        <label className="comments__form-label">Name:</label>
                        <br className="comments__form-break"/><input className="comments__form-input comments__form-input--name"></input>
                        <br className="comments__form-break"/><label className="comments__form-label">Position:</label>
                        <br className="comments__form-break"/><input className="comments__form-input comments__form-input--position"></input>
                        <br className="comments__form-break"/><label className="comments__form-label">Comment:</label>
                        <br className="comments__form-break"/><textarea className="comments__form-input comments__form-input--comment"></textarea>
                        <br className="comments__form-break"/><br className="comments__form-break"/><button className="comments__form-button" type="submit">Submit</button>
                    </form>
                    {this.state.comments !== null &&
                    <>
                        <p className="comments__heading">{this.state.comments[0].name} said...</p>
                        <div className="comments__box-comments">
                            <img src={Bubble} alt="Comments Bubble" className="comments__background"/>
                            <div className="comments__container">
                                <p className="comments__text comments__text1" id="text">{this.state.comments[0].comment}</p>
                                <p className="comments__text comments__text2" id="text">{this.state.comments[1].comment}</p>
                                <p className="comments__text comments__text3" id="text">{this.state.comments[2].comment}</p>
                                <p className="comments__text comments__text4" id="text">{this.state.comments[3].comment}</p>
                            </div>
                        </div>
                        <p className="comments__position">~ {this.state.comments[0].position} <img src={BrainStation} alt="BrainStation Logo" className="comments__logo"/></p>
                    </>
                    }
                </div>
            </div>
        )
    }
}

export default Comments;
