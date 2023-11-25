import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Quiz() {

    const [data, setData] = useState([]);
    const [resultArray,setResultArray] = useState([])
    const param = useParams();

    const [indexNumber, setIndexNumber] = useState(0);
    const [marks, setMarks] = useState(0);
    const [result, setResult] = useState(false);



    const [arr, setArr] = useState([
        {
            language: "German",
            difficult: "Easy",
            question: "What is \"Hello\"?",
            answer: "Hallo",
            options: ["Hallo", "Schlange", "Schule", "lesen"],
        },
        {
            language: "German",
            difficult: "Easy",
            question: "What is \"Please\"?",
            answer: "Bitte",
            options: ["Schreiben", "Bitte", "Gut", "Tschüss"],
        },
        {
            language: "German",
            difficult: "Medium",
            question: "What is \"House\"?",
            answer: "Haus",
            options: ["Auto", "Haus", "Brot", "Maus"],
        },
        {
            language: "German",
            difficult: "Medium",
            question: "What is \"Table\"?",
            answer: "Tisch",
            options: ["Stuhl", "Fenster", "Tisch", "Buch"],
        },
        {
            language: "German",
            difficult: "Hard",
            question: "What is \"Butterfly\"?",
            answer: "Schmetterling",
            options: ["Vogel", "Hund", "Schmetterling", "Katze"],
        },
        {
            language: "German",
            difficult: "Hard",
            question: "What is \"Excuse me\"?",
            answer: "Entschuldigung",
            options: ["Hallo", "Entschuldigung", "Danke", "Auf Wiedersehen"],
        },
        {
            language: "French",
            difficult: "Easy",
            question: "What is \"Hello\"?",
            answer: "Bonjour",
            options: ["Bonjour", "Merci", "Bonne nuit", "Au revoir"],
        },
        {
            language: "French",
            difficult: "Easy",
            question: "What is \"Thank you\"?",
            answer: "Merci",
            options: ["Oui", "Merci", "Non", "S'il vous plaît"],
        },
        {
            language: "French",
            difficult: "Medium",
            question: "What is \"House\"?",
            answer: "Maison",
            options: ["Voiture", "Maison", "Pain", "Souris"],
        },
        {
            language: "French",
            difficult: "Medium",
            question: "What is \"Dog\"?",
            answer: "Chien",
            options: ["Chat", "Cheval", "Chien", "Oiseau"],
        },
        {
            language: "French",
            difficult: "Hard",
            question: "What is \"Library\"?",
            answer: "Bibliothèque",
            options: ["Jardin", "Magasin", "Bibliothèque", "École"],
        },
        {
            language: "French",
            difficult: "Hard",
            question: "What is \"Butterfly\"?",
            answer: "Papillon",
            options: ["Poisson", "Oiseau", "Papillon", "Serpent"],
        },
        {
            language: "Spanish",
            difficult: "Easy",
            question: "What is \"Hello\"?",
            answer: "Hola",
            options: ["Hola", "Adiós", "Buenos días", "Buenas noches"],
        },
        {
            language: "Spanish",
            difficult: "Easy",
            question: "What is \"Thank you\"?",
            answer: "Gracias",
            options: ["De nada", "Gracias", "Por favor", "Lo siento"],
        },
        {
            language: "Spanish",
            difficult: "Medium",
            question: "What is \"House\"?",
            answer: "Casa",
            options: ["Carro", "Casa", "Pan", "Ratón"],
        },
        {
            language: "Spanish",
            difficult: "Medium",
            question: "What is \"Dog\"?",
            answer: "Perro",
            options: ["Gato", "Caballo", "Perro", "Pájaro"],
        },
        {
            language: "Spanish",
            difficult: "Hard",
            question: "What is \"Library\"?",
            answer: "Biblioteca",
            options: ["Jardín", "Tienda", "Biblioteca", "Escuela"],
        },
        {
            language: "Spanish",
            difficult: "Hard",
            question: "What is \"Butterfly\"?",
            answer: "Mariposa",
            options: ["Pez", "Pájaro", "Mariposa", "Serpiente"],
        },
        {
            language: "Japanese",
            difficult: "Easy",
            question: "What is \"Hello\"?",
            answer: "こんにちは (Konnichiwa)",
            options: ["こんにちは (Konnichiwa)", "さようなら (Sayounara)", "おはようございます (Ohayou gozaimasu)", "こんばんは (Konbanwa)"],
        },
        {
            language: "Japanese",
            difficult: "Easy",
            question: "What is \"Thank you\"?",
            answer: "ありがとう (Arigatou)",
            options: ["すみません (Sumimasen)", "ありがとう (Arigatou)", "ごめんなさい (Gomen nasai)", "お願いします (Onegaishimasu)"],
        },
        {
            language: "Japanese",
            difficult: "Medium",
            question: "What is \"House\"?",
            answer: "家 (Ie)",
            options: ["車 (Kuruma)", "家 (Ie)", "パン (Pan)", "ネズミ (Nezumi)"],
        },
        {
            language: "Japanese",
            difficult: "Medium",
            question: "What is \"Dog\"?",
            answer: "犬 (Inu)",
            options: ["猫 (Neko)", "馬 (Uma)", "犬 (Inu)", "鳥 (Tori)"],
        },
        {
            language: "Japanese",
            difficult: "Hard",
            question: "What is \"Library\"?",
            answer: "図書館 (Toshokan)",
            options: ["庭 (Niwa)", "店 (Mise)", "図書館 (Toshokan)", "学校 (Gakkou)"],
        },
        {
            language: "Japanese",
            difficult: "Hard",
            question: "What is \"Butterfly\"?",
            answer: "蝶々 (Chouchou)",
            options: ["魚 (Sakana)", "鳥 (Tori)", "蝶々 (Chouchou)", "蛇 (Hebi)"],
        },
    ])


    let filterData = () => {
        const newArray = arr.filter((x) => {
            return x.language === param.language && x.difficult===param.difficulty;
        })
        setData(newArray)
    }

    useEffect(() => {
        filterData();
    }, [arr])

    let checkAns = (selected, correct,index) => {
        if (selected === correct) {
            resultArray[index]=1;
        } else {
            resultArray[index]=0;
        }
    }

    let handleNext = ()=>{
        setIndexNumber(indexNumber + 1)
    }

    let handlePrevious = ()=>{
        setIndexNumber(indexNumber - 1)
    }

    let handleSubmit = ()=>{
        const counter = resultArray.reduce((count, value) =>    count + (value === 1 ? 1 : 0), 0);
        setMarks(counter)
        setResult(true)
    }



    return (
        <div className='App'>
            <div className='quiz'>

                <div className='box'>
                    <h1>Quiz</h1>
                </div>
                {data.length > 0 ? (
                    result ? (
                        <div>
                            <h3>Marks : {marks}</h3>
                            <h3>Percentage : {(marks / data.length) * 100}%</h3>
                        </div>) : (
                        <div>
                            <div className='sub'>
                                <h3>Question {indexNumber + 1} of {data.length}</h3>
                            </div>

                            <div className='questionBox'>
                                <h1>{data[indexNumber].question}</h1>
                            </div>
                            <div className="answerBox">
                                {
                                    data[indexNumber].options.map((e, i) => {
                                        return (
                                            <div key={i} className="options">
                                                <button onClick={() => { checkAns(e, data[indexNumber].answer,indexNumber) }}>{e}</button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="buttons">
                                {indexNumber != 0 && <button className="previous" onClick={handlePrevious}>Previous</button>}
                                {indexNumber + 1 != data.length && <button className="next" onClick={handleNext}>Next</button>}
                                {indexNumber + 1 == data.length && <button onClick={handleSubmit}>Submit</button>}
                            </div>
                        </div>)) : (<h1>No Data Found</h1>)
                }
            </div>
        </div>
    );

}

export default Quiz;