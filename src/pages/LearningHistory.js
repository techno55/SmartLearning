import React, { useEffect, useState } from 'react';
import { getLearningHistory } from '../services/api';

function LearningHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const data = await getLearningHistory();
      setHistory(data);
    };

    fetchHistory();
  }, []);

  return (
    <div>
      <h2>Learning History</h2>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>{entry.date}: {entry.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default LearningHistory;
