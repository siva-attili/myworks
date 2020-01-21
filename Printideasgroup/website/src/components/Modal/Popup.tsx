import * as React from 'react';
import './Popup.css';

const Popup: React.FC = () => {
    let _state = {
        worksGallery: [
            {
                _id: "galleryImgOne",
                _imgUrl: "01",
                _toggle: "toggle1",
                popupItems: [
                    {
                        _id: "galleryOnePopupOne",
                        _grid: "popupModalOne",
                        _imgUrlOne: "01",
                        _imgUrlTwo: "",
                        data: {
                            title: "Title1",
                            Description: "Description1"
                        }
                    },
                    {
                        _id: "galleryOnePopupTwo",
                        _grid: "popupModalTwo",
                        _imgUrlOne: "02",
                        _imgUrlTwo: "",
                        data: {
                            title: "Title2",
                            Description: "Description2"
                        }
                    },
                    {
                        _id: "galleryOnePopupThree",
                        _grid: "popupModalThree",
                        _imgUrlOne: "03",
                        _imgUrlTwo: "04",
                        data: {
                            title: "Title3",
                            Description: "Description3"
                        }
                    }
                ]
            },
            {
                _id: "galleryImgTwo",
                _imgUrl: "02",
                _toggle: "toggle2",
                popupItems: [
                    {
                        _id: "galleryOnePopupTwo",
                        _grid: "popupModalOne",
                        _imgUrlOne: "01",
                        _imgUrlTwo: "",
                        data: {
                            title: "Title1",
                            Description: "Description1"
                        }
                    },
                    {
                        _id: "galleryOnePopupTwo",
                        _grid: "popupModalTwo",
                        _imgUrlOne: "02",
                        _imgUrlTwo: "",
                        data: {
                            title: "Title2",
                            Description: "Description2"
                        }
                    },
                    {
                        _id: "galleryOnePopupThree",
                        _grid: "popupModalThree",
                        _imgUrlOne: "03",
                        _imgUrlTwo: "04",
                        data: {
                            title: "Title3",
                            Description: "Description3"
                        }
                    }
                ]
            },
            {
                _id: "galleryImgThree",
                _imgUrl: "03",
                _toggle: "toggle3",
                popupItems: [
                    {
                        _id: "galleryOnePopupOne",
                        _grid: "popupModalOne",
                        _imgUrlOne: "01",
                        _imgUrlTwo: "",
                        data: {
                            title: "Title1",
                            Description: "Description1"
                        }
                    },
                    {
                        _id: "galleryOnePopupTwo",
                        _grid: "popupModalTwo",
                        _imgUrlOne: "02",
                        _imgUrlTwo: "",
                        data: {
                            title: "Title2",
                            Description: "Description2"
                        }
                    },
                    {
                        _id: "galleryOnePopupThree",
                        _grid: "popupModalThree",
                        _imgUrlOne: "03",
                        _imgUrlTwo: "04",
                        data: {
                            title: "Title3",
                            Description: "Description3"
                        }
                    }
                ]
            },
            {
                _id: "galleryImgFour",
                _imgUrl: "04",
                _toggle: "toggle4",
                popupItems: [
                    {
                        _id: "galleryOnePopupOne",
                        _grid: "popupModalOne",
                        _imgUrlOne: "01",
                        _imgUrlTwo: "",
                        data: {
                            title: "Title1",
                            Description: "Description1"
                        }
                    },
                    {
                        _id: "galleryOnePopupTwo",
                        _grid: "popupModalTwo",
                        _imgUrlOne: "02",
                        _imgUrlTwo: "",
                        data: {
                            title: "Title2",
                            Description: "Description2"
                        }
                    },
                    {
                        _id: "galleryOnePopupThree",
                        _grid: "popupModalThree",
                        _imgUrlOne: "03",
                        _imgUrlTwo: "04",
                        data: {
                            title: "Title3",
                            Description: "Description3"
                        }
                    }
                ]
            },
            {
                _id: "galleryImgFive",
                _imgUrl: "05",
                _toggle: "toggle5",
                popupItems: [
                    {
                        _id: "galleryOnePopupOne",
                        _grid: "popupModalOne",
                        _imgUrlOne: "01",
                        _imgUrlTwo: "",
                        data: {
                            title: "Title1",
                            Description: "Description1"
                        }
                    },
                    {
                        _id: "galleryOnePopupTwo",
                        _grid: "popupModalTwo",
                        _imgUrlOne: "02",
                        _imgUrlTwo: "",
                        data: {
                            title: "Title2",
                            Description: "Description2"
                        }
                    },
                    {
                        _id: "galleryOnePopupThree",
                        _grid: "popupModalThree",
                        _imgUrlOne: "03",
                        _imgUrlTwo: "04",
                        data: {
                            title: "Title3",
                            Description: "Description3"
                        }
                    }
                ]
            },
            {
                _id: "galleryImgSix",
                _imgUrl: "06",
                _toggle: "toggle6",
                popupItems: [
                    {
                        _id: "galleryOnePopupOne",
                        _grid: "popupModalOne",
                        _imgUrlOne: "01",
                        _imgUrlTwo: "",
                        data: {
                            title: "Title1",
                            Description: "Description1"
                        }
                    },
                    {
                        _id: "galleryOnePopupTwo",
                        _grid: "popupModalTwo",
                        _imgUrlOne: "02",
                        _imgUrlTwo: "",
                        data: {
                            title: "Title2",
                            Description: "Description2"
                        }
                    },
                    {
                        _id: "galleryOnePopupThree",
                        _grid: "popupModalThree",
                        _imgUrlOne: "03",
                        _imgUrlTwo: "04",
                        data: {
                            title: "Title3",
                            Description: "Description3"
                        }
                    }
                ]
            }
        ]
    };
    return (
        <div className="piWorksGrid">
            {_state.worksGallery.map((galleryItems) => {
                return (
                    <div key={galleryItems._id}>
                        <a href={`#works/${galleryItems._id}`}>
                            <img
                                className="piWorksGridItem"
                                src={require(`../../../public/images/pihome-img${galleryItems._imgUrl}.jpg`)}
                                alt=""
                            />
                        </a>
                        <div id={`works/${galleryItems._id}`} className="popup">
                            <div className="worksPopUpItemsContainer" id="popup1">
                                {
                                    galleryItems.popupItems.map((popupItems) => {
                                        return (
                                            <div key={popupItems._id} className={`popupItem ${popupItems._grid}`}>
                                                <div className="content">
                                                    <h1>{popupItems.data.title}</h1>
                                                    <p>{popupItems.data.Description}</p>
                                                </div>
                                                <div className="photo">
                                                    <div className="photo-position">
                                                        <img src={require(`../../../public/images/pihome-img${popupItems._imgUrlOne}.jpg`)} alt="" />
                                                    </div>
                                                </div>
                                                {(popupItems._grid === "popupModalThree") ?
                                                    <div className="photo-reverse photo">
                                                        <div className="photo-position">
                                                            <img src={require(`../../../public/images/pihome-img${popupItems._imgUrlTwo}.jpg`)} alt="" />
                                                        </div>
                                                    </div> : null
                                                }
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <div className="indicators">
                                {
                                    galleryItems.popupItems.map((item, index) => {
                                        return (
                                            <span key={index}>
                                                <input
                                                    className="indicator"
                                                    type="radio"
                                                    name="popupIndicator"
                                                    value={item.data.title}
                                                    onClick={() => {
                                                        document.getElementById('popup').scrollTop = (index) * document.getElementById('popup').clientHeight;
                                                    }}
                                                />
                                                <br />
                                            </span>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <a href="#" className="close-popup"></a>
                    </div>
                );
            })}
        </div>
    );
}

export default Popup;