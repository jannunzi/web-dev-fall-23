import React from "react";

const Piazza = () => {
  const iframeStyle = {
    position: "absolute",
    width: "80%",
    height: "80%",
    border: "2px solid #000000",
  };

  return (
    <div>
      <h1>Piazza</h1>
      <body>
        <iframe style={iframeStyle} src="https://piazza.com/"></iframe>
      </body>
    </div>
  );
};

export default Piazza;
