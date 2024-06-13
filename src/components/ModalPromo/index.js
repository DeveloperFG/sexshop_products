import React from "react";

const ModalPromo = ({ id = 'modaPromo', onClose = () => { }, children }) => {

    const handleOutsideClick = (e) => {
        if (e.target.id == id) onClose();
    }

    return (
        <div id={id} className="modaPromo" onClick={handleOutsideClick}>
            <div className="containerModal">
                <button className="close" onClick={onClose} />
                <div className="content">{children}</div>
            </div>
        </div>
    )
}

export default ModalPromo;