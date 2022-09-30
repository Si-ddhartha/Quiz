import React from "react";
import './Question.css';

export default function Question(props){
    const [disabled, setDisabled] = React.useState(false)

    function handleClick(event){
        props.setButtonClicks(prevClicks => prevClicks + 1)
        event.target.style.backgroundColor = `#abadb2`
        setDisabled(true)  
        props.setSelectedAnswers(prevAnswers => [...prevAnswers, event.target.textContent])

        if(event.target.textContent === props.correct_answer){
            props.setScore(prevScore => prevScore + 1)
        }
        
        if(props.buttonClicks === 4){
            props.setDisableCheckButton(false)
        }

    }
    

    return(
        <div className="question-container">
            <h2 dangerouslySetInnerHTML={ {__html: props.question }}></h2>
            <div className="question-answers">
                {
                    props.answers.map(answer => (
                        <button dangerouslySetInnerHTML={{ __html: answer }}  
                                id={answer}
                                className="default-button" 
                                onClick={handleClick}
                                disabled={disabled}>
                        </button>
                    ))
                }
            </div>
            <br />
            <hr
                style={{
                    // color: "red",
                    // backgroundColor: "grey",
                    // height: 10,
                    width: `75%`,
                }}
            />
        </div>
    )
}