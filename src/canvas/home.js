import React, {useState} from "react";
import "./home.css";
const Home =() => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleTable = () => {
    setIsExpanded(!isExpanded);
  };

  const contents =[
    {
      heading: 'Resources',
      Reading: [
        'Full Stack Developer - Chapter 3 - Styling User Interfaces With Cascading Style Sheets',
        'Full Stack Developer - Chapter 4 - The Bootstrap CSS Library'
      ],
      Slides: {
        key1: 'www.google.com',
        key2: 'value2',
        key3: 'value3',
      }
    },
    
    {
      heading: 'Resources1',
      Reading: [
        'Full Stack Developer1 - Chapter 3 - Styling User Interfaces With Cascading Style Sheets',
        'Full Stack Developer1 - Chapter 4 - The Bootstrap CSS Library'
  ],
      Slides: {
        key1: 'value11',
        key2: 'value21',
        key3: 'value31',
    }
    }

  ]

  
 
  return (
    <div>
      <a name="home"></a>
      <a href="index.html#nav">Nav</a>
      <h1>Home</h1>
      <hr />

      {contents.map((content,index)=>{
        return(
          <div>
          <button className="buttonStyle" onClick={toggleTable}>
          {isExpanded ? (
            <>
              <span>&#x25B2;</span> {content.heading}
            </>
          ) : (
            <>
              <span>&#x25BC;</span> {content.heading}
            </>
          )}
        </button>
                 
        {isExpanded && (
          <div style={{ overflowX: 'auto' }}>
            <table>
              
                <tr>
                  <td className="rowHeading">READING</td>
                </tr>
                  {content.Reading.map((reading, index) => (
                    <tr key={index}>
                    <td key={index}>{reading}</td>
                    </tr>
                  ))}
              
              <tr>
                <td className="rowHeading">SLIDES</td>
              </tr>
              {Object.entries(content.Slides).map(([key, value]) => (
                      <tr key={key}>
                        <td>
                          <a href={value}>{key}</a>
                        </td>
                      </tr>
                    ))}
              
            </table>
          </div>
        )}
        <br></br>
</div>
        
  


        );
      })}

    
    </div>
  );
}

export default Home;
