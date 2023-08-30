import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 id="vikas">Namaste ReactDev </h1>;

const heading1 = React.createElement("h1", {}, "how are you doing well ");

const container = [heading, heading1];

// component compositon  
const Title = () => {
  return (
    <>
      <h3>
        this is the normal functional component and we put to HeadingComponent
      </h3>
    </>
  );
};

const HeadingComponent = () => {
  return (
    <>
      <div id="vikas">
        <h2>Namaste react with create a functional HeadingComponent</h2>
      </div>
      {container}
      <Title />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
