import React from "react";
import Question from "./Question";
import './Questions.css';

export default function Questions(){
    const [quizdata, setQuizData] = React.useState([])
    const [score, setScore] = React.useState(0)
    const [showScore, setShowScore] = React.useState(false)
    const [buttonClicks, setButtonClicks] = React.useState(0)
    const [selectedAnswers, setSelectedAnswers] = React.useState([])
    const [disableCheckButton, setDisableCheckButton] = React.useState(true)

    React.useEffect(function(){
        fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(data => setQuizData(data.results))
    }, [])
    // console.log(quizdata)

    const questions = quizdata.map((data) => {
                                return <Question 
                                            key={data.question}
                                            question={data.question}
                                            answers={[...data.incorrect_answers, data.correct_answer]}
                                            correct_answer={data.correct_answer}
                                            setScore={setScore}
                                            setDisableCheckButton={setDisableCheckButton}
                                            buttonClicks={buttonClicks}
                                            setButtonClicks={setButtonClicks}
                                            setSelectedAnswers={setSelectedAnswers}
                                            checkAnswers={checkAnswers}
                                            />
                                         })

    function playagain(){
        window.location.reload();
    }

    function checkAnswers(){
        setShowScore(true)
        for(let i = 0; i < 5; i++){
            if(selectedAnswers[i] === `${questions[i].props.correct_answer}`){
                document.getElementById(`${selectedAnswers[i]}`).style.backgroundColor = `#71BC68`
            }
            else{
                document.getElementById(`${questions[i].props.correct_answer}`).style.backgroundColor = `#71BC68`
                document.getElementById(`${selectedAnswers[i]}`).style.backgroundColor = `#D84F74`
            }
        }


    }

    return(
        <div>
            {questions}
            <div className="check-answer">
                {!showScore && <button onClick={checkAnswers} disabled={disableCheckButton} className="check-answer-button">Check Answers</button>}
            </div>
            <div className="game-end">
                <div className="score">
                    {showScore && <h1>You scored {score} / 5</h1>}
                </div>
                <div className="play-again">
                    {showScore && <button onClick={playagain} className="play-again-button">Play again</button>}
                </div>
            </div>
        </div>
    )
}