import React from "react";

function Home() {
  return (
    <div>
      <a name="home"></a>
      <a href="index.html#nav">Nav</a>
      <h1>Home</h1>
      <hr />
      <table border="1" width="80%">
        <thead>
          <tr>Resources</tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "0px" }}>Syllabus</td>
          </tr>
          <tr>
            <td style={{ padding: "0px" }}>Piazza</td>
          </tr>
        </tbody>
        <br></br>
        <thead>
          <tr>Code Repositories</tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "0px" }}>Jose Github Username:jannunzi</td>
          </tr>
          <tr>
            <td style={{ padding: "0px" }}>
              Tuiter App CS5610 FA22 ON Netilify - main
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
