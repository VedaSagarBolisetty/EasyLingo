import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../config/contextAPI/userContext";
import "./home.css";
import German from "./german";
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';

function Home() {
   

    const navigate = useNavigate();
    const context = useContext(UserContext);
    const [language, setLanguage] = useState();
    const [difficulty, setDifficulty] = useState();
    const [valid, setValid] = useState(true);

    useEffect(() => {
        if (language && difficulty) {
            setValid(false)
        }
    }, [language, difficulty])

    useEffect(() => {
        console.log(context.info)
    }, [context])

    return (
            <div>
                <h1 className="heading">Hello {context.info.firstName}!</h1>
                <h1 className="head2">What would you like to learn?</h1>
                <div className="lang_cont">
                    <div className="up">
                        <div className="language_box">
                            <Link to="/german">
                                <div className="lang german">German</div>
                            </Link>
                        </div>
                        <div className="language_box">
                            <Link to="/french">
                                <div className="lang french">French</div>
                            </Link>
                        </div>
                    </div>
                    <div className="dwn">
                        <div className="language_box">
                            <Link to="/spanish">
                                <div className="lang spanish">Spanish</div>
                            </Link>
                        </div>
                        <div className="language_box">
                            <Link to="/japanese">
                                <div className="lang jap">Japanese</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    );
    
    
}

export default Home;