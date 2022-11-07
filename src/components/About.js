import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "balck",
    backgroundColor: "white",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };
  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-toggle="collapse" style={myStyle} data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Collapsible Group Item #1</strong>
            </button>
          </h2>

          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="accodion-body" style={myStyle}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
              coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of
              them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-toggle="collapse" style={myStyle} data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Collapsible Group Item #2</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
              coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of
              them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-toggle="collapse" style={myStyle} data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Collapsible Group Item #3</strong>
            </button>
          </h2>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
              coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of
              them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>
      <button type="button" onClick={toggleStyle} className="btn btn-primary my-2">
        {btnText}
      </button>
    </div>
  );
}
