import React, { useState } from "react";
import ReactModal from "react-modal";
import "./Modal.css";
export default function Modal() {
  const [modal, setmodel] = useState({ showModal: false});
  function handleOpenModal() {
    setmodel({ showModal: true });
  }
  function handleCloseModal() {
    setmodel({ showModal: false });
  }
  return (
    <div>
      <div className="grid">
        {/* {modal.pics.map((image,index)=>(<div key={index} className="grid-item"  onClick={handleOpenModal}>
            <img src={require(`../../images/Gallery-images/${image.img}.jpg`)}/>
           </div>))} */}
        <div className="grid-item" onClick={handleOpenModal}>
          <img src={require(`../../images/Gallery-images/01.jpg`)} />
        </div>
        <div className="grid-item" onClick={handleOpenModal}>
          <img src={require(`../../images/Gallery-images/02.jpg`)} />
        </div>
        <div className="grid-item" onClick={handleOpenModal}>
          <img src={require(`../../images/Gallery-images/03.jpg`)} />
        </div>
        <div className="grid-item" onClick={handleOpenModal}>
          <img src={require(`../../images/Gallery-images/04.jpg`)} />
        </div>
      </div>
      <ReactModal
        isOpen={modal.showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={handleCloseModal}
        className="Modal"
        overlayClassName="Overlay">
        <button onClick={handleCloseModal}>X</button>
        <img src={require(`../../images/Gallery-images/01.jpg`)} />
      </ReactModal>
    </div>
  );
}
