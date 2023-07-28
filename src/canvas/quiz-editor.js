import React, {useState} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quizEditor.css';

const QuizEditor = ()=>{

    const [editorContent, setEditorContent] = useState('');
    const [textquizInput, setQuizTextInput] = useState('');
    const [attemptsInput, setattempstsInput] = useState('');
    const [timeLimittextInput,setTimeLimitIsChecked] = useState('');
    const [typedropdownValue, typesetDropdownValue] = useState('');
    const [groupdropdownValue, groupsetDropdownValue] = useState('');
    const [shuffleisChecked, shufflesetIsChecked] = useState(false);
    const [timeLimitisChecked, timeLimitsetIsChecked] = useState(false);
    const [attemptisChecked, attemptsetIsChecked] = useState(false);
    const [allowedAttemptsisChecked, allowedAttemptssetIsChecked] = useState(false);

    const shuffleCheckboxChange = () => {
      shufflesetIsChecked(!shuffleisChecked);
    };
    const allowedAttemptsCheckboxChange =() =>{
        allowedAttemptssetIsChecked(!allowedAttemptsisChecked);
    }
    const timeLimitCheckboxChange =() =>{
        timeLimitsetIsChecked(!timeLimitisChecked);
    }
    const attemptsCheckboxChange =() =>{
        attemptsetIsChecked(!attemptisChecked);
    }

    const handleEditorChange = (content) => {
      setEditorContent(content);
    };

    const quizTextChange = (event) => {
        setQuizTextInput(event.target.value);
      };
    
    const typeDropdownChange = (event) => {
        typesetDropdownValue(event.target.value);
      };
      const groupDropdownChange = (event) => {
        groupsetDropdownValue(event.target.value);
      };

      const attemptTextChange =(event) =>{
        setattempstsInput(event.target.value);
      }
      const timeLimitTextChange = (event) =>{
        setTimeLimitIsChecked(event.target.value);
      }
      const handleSubmit = (event) => {
        event.preventDefault();
    
        // Access the input values
        console.log('Text Input:', textquizInput);
        console.log('Editor Content:', editorContent);
        console.log('Type Value:', typedropdownValue);
        console.log('group Value:', groupdropdownValue);
        console.log('Shuffle Answers:', shuffleisChecked);
        console.log('Time Limit :', timeLimitisChecked);
      };

    return(

    <div >
        <a name="quizeditor"></a>
        <h1>Quiz - Editor</h1>
      
        <h2>Text Editor</h2>

       <form onSubmit={handleSubmit}>
        <div>
          <input type="text" style={{width: '200px', height:'30px'}} value={textquizInput} onChange={quizTextChange} />
        </div>

        <div>
          <label>Quiz Instructions:</label>
          <ReactQuill className="textEditor" value={editorContent} onChange={handleEditorChange} />
        </div>
        <br/> 
        <br/>
        <div className="container">
        <div className="dropdown">
          <label>Quiz Type </label>
          <select value={typedropdownValue} onChange={typeDropdownChange}>
            <option value="">Select an option</option>
            <option value="Graded_Quiz">Graded Quiz</option>
            <option value="Practice_Quiz">Practice Quiz</option>
            <option value="Graded_survey">Graded survey</option>
            <option value="UnGraded_survey">UnGraded survey</option>

          </select>
        </div>

        <div className="dropdown">
          <label>Assignment Group </label>
          <select value={groupdropdownValue} onChange={groupDropdownChange}>
            <option value="">Select an option</option>
            <option value="Quizzes">Quizzes</option>
            <option value="Assignments">Assignments</option>
            <option value="Exams">Exams</option>
            <option value="Project">Project</option>

          </select>
        </div>
        
        <div >Options</div>
        
    
            
        <div className="checkbox-container" onClick={shuffleCheckboxChange}>
            
            
            <div className={`checkbox ${shuffleisChecked ? 'checked' : ''}`}>
                
            {shuffleisChecked && <span className="checkmark">&#10003;</span>}
            </div>
            
            <div className="label">Shuffle Answers</div>
        </div>


              
        <div className="checkbox-container" onClick={timeLimitCheckboxChange}>
            
            
            <div className={`checkbox ${timeLimitisChecked ? 'checked' : ''}`}>
                
            {timeLimitisChecked && <span className="checkmark">&#10003;</span>}
            </div>
            
            <div className="label">Time Limit</div>
            <input type="text" style={{width: '30px', height:'20px', paddingLeft:'10px !important'}} value={timeLimittextInput} onChange={timeLimitTextChange} />
            <span>Minutes</span>


        </div>

 <div className="multiple checkbox-container" onClick={attemptsCheckboxChange}>

        <div className={`checkbox ${attemptisChecked ? 'checked' : ''}`}>
                
                {attemptisChecked && <span className="checkmark">&#10003;</span>}
                </div>
                <div className="label">Allow Multiple attempts</div>
        {/* <label>
          <input type="checkbox" checked={attemptisChecked} onChange={attemptsCheckboxChange} />
          Show Fields
        </label> */}

      
      {attemptisChecked && (
        <div className="dropdown div2">
        <label>Quiz Score to Keep </label>
        <select value={groupdropdownValue} onChange={groupDropdownChange}>
          <option value="Highest">Highest</option>
          <option value="Latest">Latest</option>
          <option value="Average">Average</option>

        </select>

                
        <div className="checkbox-container" onClick={allowedAttemptsCheckboxChange}>
            
            
            <div className={`checkbox ${timeLimitisChecked ? 'checked' : ''}`}>
                
            {allowedAttemptsisChecked && <span className="checkmark">&#10003;</span>}
            </div>
            
            <div className="label">Allowed Attempts</div>
            <input type="text" style={{width: '30px', height:'20px', paddingLeft:'10px !important'}} value={attemptsInput} onChange={attemptTextChange} />
            


        </div>




      </div>
      )}
      </div>
      

</div>

        <button type="submit">Submit</button>
      </form>
        <br />
    </div>

    )

}

export default QuizEditor;