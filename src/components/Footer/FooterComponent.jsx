import React from "react";

function FooterComponent() {
  return (
    <div className="footer text-left py-3 " style={{backgroundColor : 'black', position: 'static'}}>
      © 2013 - 2023 JECE |{" "}
      <a href="https://legacy.reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">
        Terms of Use
      </a>{" "}
      |{" "}
      <a href="https://legacy.reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer" >
        Privacy Policy
      </a>{" "}
      | <a href="https://legacy.reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer"> FAQ</a> |
      <a href="https://legacy.reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">Contact</a>{" "}
    </div>
  );
}

export default FooterComponent;
