import * as React from "react";
import "./Modal.css";

interface Works {
  wtitle: "string";
  wimg: "string";
  modal: Array<any>;
}
const Modal: React.FC = () => {
  const [worksgallery, setWorks] = React.useState<Array<Works>>([]);
  // const [indicators, setIndicators] = React.useState(0);
  React.useEffect(() => {
    fetch("http://localhost:3001/popup")
      .then(response => response.json())
      .then(res => {
        setWorks(res);
      });
  }, []);
  return (
    <div className="pi-works-container">
      {worksgallery.map((works, index) => {
        return (
          <div key={index}>
            <div>
              <a className="button" href={`#popup${index}`}>
                <img
                  src={require(`../../../public/images/pihome-${works.wimg}.jpg`)}
                  alt=""
                />
              </a>
            </div>
            <a href="#WorksGallery">
              <div id={`popup${index}`} className="overlay">
                <div className="pi-works-popup">
                  {works.modal.map((mdl, mdlindex) => {
                    return (
                      <div key={mdlindex} className="pi-works-popup-item">
                        <div
                          className={`pi-works-popmodel pi-works-${mdl.mtype}`}
                        >
                          <div className="pi-works-item1">
                            <h1>{mdl.mtitle}</h1>
                            <p>{mdl.content}</p>
                          </div>
                          <div className="pi-works-item2">
                            <img
                              src={require(`../../../public/images/pihome-${mdl.mimg}.jpg`)}
                              alt=""
                            />
                          </div>
                          <div className={`pi-works-${mdl.dnone}`}> <img
                              src={require(`../../../public/images/pihome-${mdl.mimg}.jpg`)}
                              alt=""
                            /></div>
                        </div>
                        <div className="pi-works-indicators">
                          <div className="pi-works-Mauto">
                            {works.modal.map((pointers, index) => (
                              <div key={index} className="pi-works-dots">
                               <span></span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default Modal;
