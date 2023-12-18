import React, { useState } from "react";
import Data from './Data'
import Question from "./Question";

function App() {

  const [questions,setQuestions]=useState(Data)
  
  return (
   <main>
    <div className="container">
      <h3>Questions and answers about login</h3>
      <section className="info">
        {questions.map((question)=>{
         return <Question key={Question.id} {...question}/>
        })}
      </section>
    </div>
   </main>
  );
}

export default App;
