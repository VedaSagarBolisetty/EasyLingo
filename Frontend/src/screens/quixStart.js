import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../config/contextAPI/userContext";
import "./home.css";

function QuixStart() {
    const navigate = useNavigate();
    const context = useContext(UserContext);
    const [language, setLanguage] = useState();
    const [difficulty, setDifficulty] = useState();
    const [valid, setValid] = useState(true);


    let handleLanguage = (event) => {
        setLanguage(event.target.value);

    }

    let handleDiff = (event) => {
        setDifficulty(event.target.value);
    }

    let handleSubmit = () => {
        navigate(`/quiz/${language}/${difficulty}`)
    }

    useEffect(() => {
        if (language && difficulty) {
            setValid(false)
        }
    }, [language, difficulty])

    useEffect(() => {
        console.log(context.info)
    }, [context])

    return (
        <>
            <div className="main">
                <div className="dropdowns">
                    <div className="dropdown">
                        <label htmlFor="languageSelect">Language:</label>
                        <select id="languageSelect" onChange={handleLanguage}>
                            <option value="">Choose a language</option>
                            <option value="German">German</option>
                            <option value="French">French</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Japanese">Japanese</option>
                        </select>
                    </div>

                    <div className="dropdown">
                        <label htmlFor="difficultySelect">Difficulty:</label>
                        <select id="difficultySelect" onChange={handleDiff}>
                            <option value="">Choose a difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                </div>
                <button onClick={handleSubmit} disabled={valid}>Start Quiz</button>
            </div>

        </>
    )
}

export default QuixStart;