import React, { useEffect, useState } from 'react';
import { getQuestions } from '../services/api';

function LevelDiagnosis() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await getQuestions();
      setQuestions(data);
    };

    fetchQuestions();
  }, []);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = async () => {
    // 回答を評価して結果を計算するロジックをここに追加
    setResult("Your level is Intermediate"); // 仮の結果
  };

  return (
    <div>
      <h2>Level Diagnosis</h2>
      {questions.map((q) => (
        <div key={q.id}>
          <p>{q.question}</p>
          {q.options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name={q.id}
                value={option}
                onChange={() => handleAnswerChange(q.id, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {result && <div>Diagnosis Result: {result}</div>}
    </div>
  );
}

export default LevelDiagnosis;
