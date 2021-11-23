import React from 'react';
import "tailwindcss/tailwind.css";
import myBG from '../assets/bg.svg';
import QuizLogo from '../assets/quiz-logo.jpeg';

class Logo extends React.Component {
    render() {
        return (
            <div >
                <img src={QuizLogo} alt="Quiz App" className="w-20 h-45"/>
            </div>
        );
    }
}

export default Logo;