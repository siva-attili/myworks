import React, { useRef, useState, useEffect } from 'react';
import "./Modal.css";

const Modal: React.FC = () => {
  let _state = {
    popupItems: [
      {
        data: {
          title: "Title1",
          Description: "Description-1"
        },
        _imageUrl: "../../public/images/pihome-img01.jpg",
        _grid: "popupGrid1"
      },
      {
        data: {
          title: "Title2",
          Description: "Description-2"
        },
        _imageUrl: "../../public/images/pihome-img02.jpg",
        _grid: "popupGrid2"
      },
      {
        data: {
          title: "Title3",
          Description: "Description-3"
        },
        _imageUrl: "../../public/images/pihome-img03.jpg",
        _grid: "popupGrid3"
      }
    ]
  };
  const worksPopup = useRef<HTMLDivElement>(null);
  const worksPopUpContainer = useRef<HTMLDivElement>(null);
  const [currentImageDisplay, setCurrentImageDisplay] = useState(
    _state.popupItems[0].data.title
  );

  /* Onscroll function */
  const scrollingModal = () => {
    let _height = document.getElementById('popupItems').clientHeight;
    let _scrollTop = document.getElementById('popupItems').scrollTop;
    if (_scrollTop >= 0 && _scrollTop < _height) {
      document.getElementById('id-0').classList.add('Bg-red');
      document.getElementById('id-1').classList.remove('Bg-red');
      document.getElementById('id-2').classList.remove('Bg-red');
    } else if (_scrollTop > _height && _scrollTop < 2 * _height) {
      document.getElementById('id-0').classList.remove('Bg-red');
      document.getElementById('id-1').classList.add('Bg-red');
      document.getElementById('id-2').classList.remove('Bg-red');
    } else if (_scrollTop > 2 * _height && _scrollTop < 3 * _height) {
      document.getElementById('id-0').classList.remove('Bg-red');
      document.getElementById('id-1').classList.remove('Bg-red');
      document.getElementById('id-2').classList.add('Bg-red');
    }
  }
  useEffect(() => {
    let doc = document.getElementById('popupItems'), top;
    function handleResize() {
      top = (doc && doc.scrollTop || 0);
      doc.scrollTo(0, top);
    }
    window.addEventListener('resize', handleResize);
  }, []);
  return (
    <div className="works-container">
      <div className="pi-grid-3">
        <div className="pi-grid-item">
          <a>
            <img
              src="../../../public/images/pihome-img01.jpg"
              alt=""
              onClick={() => {
                worksPopup.current.style.display = "block";
              }}
            />
          </a>
        </div>
      </div>
      <div
        className="worksOnePopup"
        ref={worksPopup}
        onClick={(...args: any[]) => {
          let el = args[0];
          if (el.target.className === "worksOnePopup") {
            worksPopup.current.style.display = "none";
          }
        }}
      >
        <div id="popup" className="worksPopUpItemsContainer" ref={worksPopUpContainer} onScroll={scrollingModal}>
          <div className="worksPopUpItems" id="popupItems">
            {_state.popupItems.map((item, index) => {
              let _styles = {
                backgroundImage: `url(${item._imageUrl})`,
                backgroundPosition: 'center',
                overflow: 'none'
              };
              return (
                <div className={`popupItem ${item._grid}`} id={`popUpItem${index}`} key={index}>
                  {(item._grid === "popupGrid1") ? (
                    <React.Fragment>
                      <div className="data">
                        <h1>{item.data.title}</h1>
                        <p>{item.data.Description}</p>
                      </div>
                      <div className="pic" style={_styles}></div>
                    </React.Fragment>
                  ) : null}
                  {(item._grid === "popupGrid2") ? (
                    <React.Fragment>
                      <div className="pic" style={_styles}></div>
                      <div className="data">
                        <h1>{item.data.title}</h1>
                        <p>{item.data.Description}</p>
                      </div>
                    </React.Fragment>
                  ) : null}
                  {(item._grid === "popupGrid3") ? (
                    <React.Fragment>
                      <div className="pic" style={_styles}></div>
                      <div className="data">
                        <h1>{item.data.title}</h1>
                        <p>{item.data.Description}</p>
                      </div>
                      <div className="pic" style={_styles}></div>
                    </React.Fragment>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="indicators">
            {_state.popupItems.map((item, index) => {
              let red = (index === 0) ? "Bg-red" : null;
              return (
                <span key={index}>
                  <input
                    className={`indicator ${red}`}
                    type="radio"
                    name="popUpIndicator"
                    id={`id-${index}`}
                    value={item.data.title}
                    checked={currentImageDisplay === item.data.title}
                    onChange={() => setCurrentImageDisplay(item.data.title)}
                    onClick={() => {
                      document.getElementById('popupItems').scrollTop = (index) * document.getElementById('popup').clientHeight;
                    }}
                  />
                  <br />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
