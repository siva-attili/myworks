import * as React from 'react';
import './Popup.css';

const Popup: React.FC = () => {
    let _state = {
        popupItems: [
            {
                _id: "One",
                data: {
                    title: "Title1",
                    Description: "Description-1"
                },
                _imageUrl: "01",
                _grid: "popupModalOne",
            },
            {
                _id: "Two",
                data: {
                    title: "Title2",
                    Description: "Description-2"
                },
                _imageUrl: "02",
                _grid: "popupModalTwo"
            },
            {
                _id: "Three",
                data: {
                    title: "Title3",
                    Description: "Description-3"
                },
                _imageUrl: "03",
                _grid: "popupModalThree"
            },
            {
                _id: "Four",
                data: {
                    title: "Title4",
                    Description: "Description-4"
                },
                _imageUrl: "04",
                _grid: "popupModalOne",
            },
            {
                _id: "Five",
                data: {
                    title: "Title5",
                    Description: "Description-5"
                },
                _imageUrl: "05",
                _grid: "popupModalTwo"
            },
            {
                _id: "Six",
                data: {
                    title: "Title6",
                    Description: "Description-6"
                },
                _imageUrl: "06",
                _grid: "popupModalThree"
            },
            {
                _id: "Seven",
                data: {
                    title: "Title7",
                    Description: "Description-7"
                },
                _imageUrl: "01",
                _grid: "popupModalOne",
            },
            {
                _id: "Eight",
                data: {
                    title: "Title8",
                    Description: "Description-8"
                },
                _imageUrl: "02",
                _grid: "popupModalTwo"
            },
            {
                _id: "Nine",
                data: {
                    title: "Title9",
                    Description: "Description-9"
                },
                _imageUrl: "03",
                _grid: "popupModalThree"
            },
            {
                _id: "Ten",
                data: {
                    title: "Title10",
                    Description: "Description-10"
                },
                _imageUrl: "04",
                _grid: "popupModalOne",
            },
            {
                _id: "Eleven",
                data: {
                    title: "Title11",
                    Description: "Description-11"
                },
                _imageUrl: "05",
                _grid: "popupModalTwo"
            },
            {
                _id: "Twelve",
                data: {
                    title: "Title12",
                    Description: "Description-12"
                },
                _imageUrl: "06",
                _grid: "popupModalThree"
            }
        ]
    };
    const worksPopup = React.useRef<HTMLDivElement>(null);
    const worksPopUpContainer = React.useRef<HTMLDivElement>(null);
    const indicatorActiveStyles = (id: any) => {
        let current = document.getElementsByClassName("indicator-active");
        if (current.length > 0) {
            for (let i = 0; i < current.length; i++) {
                current[i].classList.remove("indicator-active");
            }
        }
        document.getElementById(id).classList.add("indicator-active");
    }
    const onscrollIndicatorStyles = (loops: any) => {
        let _height = document.getElementById('popup').clientHeight;
        let _scrollTop = document.getElementById('popup').scrollTop;
        let current = document.getElementsByClassName("indicator-active");
        for (let loop = 0; loop < loops; loop++) {
            if (_scrollTop >= (loop) * _height && _scrollTop < (loop + 1) * _height) {
                if (current.length > 0) {
                    for (let i = 0; i < current.length; i++) {
                        current[i].classList.remove("indicator-active");
                    }
                }
                document.getElementById(`Indicator${loop}`).classList.add("indicator-active");
            }
        }
    }
    return (
        <React.Fragment>
            <div className="piWorksGrid">
                {
                    _state.popupItems.map((item, index) => {
                        return (
                            <div className="Accordion" key={`Accordion${index}`}>
                                <input type="radio" name="accordion" id={`Accordion${index}`} className="radio" />
                                <label htmlFor={`Accordion${index}`}>
                                    <img
                                        className="piWorksGridItem"
                                        src={require(`../../../public/images/pihome-img${item._imageUrl}.jpg`)}
                                        alt=""
                                        onClick={() => { worksPopup.current.style.display = "block"; }}
                                    />
                                </label>
                                <div className="Accordion-content">
                                    <div className="popupItem" key={item._id}>
                                        <div className="content">
                                            <h1>{item.data.title}</h1>
                                            <p>{item.data.Description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum placeat, consequatur blanditiis, sed mollitia, atque adipisci vel voluptates labore id veniam ea minima aliquam quos saepe optio accusantium maxime. Dolor?</p>
                                        </div>
                                        <div className="photo">
                                            <div className="photo-position">
                                                <img src={require(`../../../public/images/pihome-img${item._imageUrl}.jpg`)} alt="" />
                                            </div>
                                        </div>
                                        {(item._grid === "popupModalThree") ?
                                            <div className="photo">
                                                <div className="photo-position">
                                                    <img src={require(`../../../public/images/pihome-img${item._imageUrl}.jpg`)} alt="" />
                                                </div>
                                            </div> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
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
                <div
                    id="popup"
                    className="worksPopUpItemsContainer"
                    ref={worksPopUpContainer}
                    onScroll={() => { onscrollIndicatorStyles(_state.popupItems.length) }}>
                    {
                        _state.popupItems.map((item) => {
                            return (
                                <div className={`popupItem ${item._grid}`} key={item._id} id={`works/${item._id}`}>
                                    <div className="content">
                                        <h1>{item.data.title}</h1>
                                        <p>{item.data.Description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum placeat, consequatur blanditiis, sed mollitia, atque adipisci vel voluptates labore id veniam ea minima aliquam quos saepe optio accusantium maxime. Dolor?</p>
                                    </div>
                                    <div className="photo">
                                        <div className="photo-position">
                                            <img src={require(`../../../public/images/pihome-img${item._imageUrl}.jpg`)} alt="" />
                                        </div>
                                    </div>
                                    {(item._grid === "popupModalThree") ?
                                        <div className="photo-reverse photo">
                                            <div className="photo-position">
                                                <img src={require(`../../../public/images/pihome-img${item._imageUrl}.jpg`)} alt="" />
                                            </div>
                                        </div> : null
                                    }
                                </div>
                            );
                        })
                    }
                </div>
                <div className="indicators">
                    {_state.popupItems.map((item, index) => {
                        let activeStyle = (index === 0) ? "indicator-active" : "";
                        return (
                            <span key={index}>
                                <a href={`#works/${item._id}`}>
                                    <span
                                        className={`indicator ${activeStyle}`}
                                        id={`Indicator${index}`}
                                        onClick={() => {
                                            indicatorActiveStyles(`Indicator${index}`)
                                        }}>
                                    </span>
                                </a>
                            </span>
                        );
                    })}
                </div>
            </div>
        </React.Fragment>
    );
}
export default Popup;