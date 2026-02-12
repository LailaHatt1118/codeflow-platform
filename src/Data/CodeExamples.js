// Data/CodeExamples.js
export const CodeExamples = {
    "App.jsx": `
import {useState} from "react";
import {CodeFlow} from "@codeflow/ai"

function App() {
  const [code, setCode] = useState("")

 const handleAICompletion = async () => {
   const suggestion = await CodeFlow.complete(code);
   setCode(suggestion);
   };
   return(
       <div className="app">
         <CodeEditor
            onChange={setCode}
            onAI={handleAICompletion}
         />
       </div>  );
}
`,

    "Hero.jsx": `
import {useState} from "react";
import {CodeFlow} from "@codeflow/ai"
    
function Hero() {
  const [code, setCode] = useState("")
  
  const handleAICompletion = async () => {
  const suggestion = await CodeFlow.complete(code);
  setCode(suggestion);
  };
  return(
       <div className="hero">
         <CodeEditor
            onChange={setCode}
            onAI={handleAICompletion}
         />
       </div> );
}
`,

    "Navbar.jsx": `
import {useState} from "react";
import {CodeFlow} from "@codeflow/ai"
    
function Navbar() {
  const [code, setCode] = useState("")

  const handleAICompletion = async () => {
  const suggestion = await CodeFlow.complete(code);
  setCode(suggestion);
  };
  return(
       <nav className="navbar">
         <CodeEditor
            onChange={setCode}
            onAI={handleAICompletion}
         />
       </nav>);
}
`
};

export const floatingCards = {
    "App.jsx": {
        bgColor: "bg-red-400/15",
        // iconColor: "text-blue-400",
        textColor: "text-white/100",
        contentColor: "text-white/50",
        icon: "💡",
        title: "AI-Powered Code Completion",
        content: "Leverage AI to enhance your coding experience with intelligent code suggestions and completions.",
    },
    "Hero.jsx": {   
         bgColor: "bg-yellow-400/15",
        //  iconColor: "text-blue-400",
         textColor: "text-white/100",
         contentColor: "text-white/50",
         icon: "💡",
         title: "AI-Powered Code Completion",
         content: "Leverage AI to enhance your coding experience with intelligent code suggestions and completions.",
    },
    "Navbar.jsx": {
       bgColor: "bg-green-400/15",
      //  iconColor: "text-blue-400",
       textColor: "text-white/100",
       contentColor: "text-white/50",
       icon: "💡",
       title: "AI-Powered Code Completion",
       content: "Leverage AI to enhance your coding experience with intelligent code suggestions and completions.",
       contentFontSize: "text-[11px]",
    }
}