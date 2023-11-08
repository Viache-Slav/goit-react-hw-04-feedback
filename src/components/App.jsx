import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

// Wykorzystujemy hook useState do utworzenia stanu przechowującego
const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  // Funkcja handleFeedback służy do zwiększania liczby opinii po kliknięciu przycisków.
  // Korzystamy z funkcji setFeedback i aktualizacji stanu, aby zwiększyć liczbę opinii w odpowiedniej kategorii.
  const handleFeedback = (option) => {
    setFeedback((prevFeedback) => ({ ...prevFeedback, [option]: prevFeedback[option] + 1 }));
  };

  // Оblicza ogólną liczbę opinii, sumując liczbę "dobrze", "neutralnie" i "źle".
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  // Оblicza procent pozytywnych opinii
  const positivePercentage = totalFeedback === 0 ? 0 : (feedback.good / totalFeedback) * 100;

  return (
    <div>
      <Section title="Please leave feedback">
      {/* Wyświetla przyciski */}
        <FeedbackOptions options={Object.keys(feedback)} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title="Statistics">
      {/* Wyświetla statystyki opinii oraz procent pozytywnych opinii, lub powiadomienie */}
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;




// import React, { Component } from 'react';
// import  Statistics  from './Statistics/Statistics';
// import Section from './Section/Section';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Notification from './Notification/Notification';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   changeState = name => {
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const { good } = this.state;
//     return total === 0 ? 0 : (good / total) * 100;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = ['good', 'neutral', 'bad'];
//     const totalFeedback = this.countTotalFeedback();

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions 
//             options={options} 
//             onLeaveFeedback={this.changeState} 
//           />
//         </Section>
          
//         <Section title="Statistics">
//           {totalFeedback === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={totalFeedback}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;