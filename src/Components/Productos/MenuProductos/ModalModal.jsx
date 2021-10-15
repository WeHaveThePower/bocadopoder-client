import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import { Registrarproducto } from '../RegistrarProductos/Registrarproducto'
import { Actualizarproducto } from '../ActualizarProducto/Actualizarproducto';
import { PromptOkProducto } from '../RegistrarProductos/PromptOkProducto';
import { Buscarproducto } from '../BuscarProductos/Buscarproductos';


export const ModalModal = ({ modalName, modalNumber, openMe, closeFunc }) => {
    
    const handleClose = () => closeFunc();
    
    return (
        <Modal
            open={openMe}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="modal-dialog text-start text-black">
                <div className="modal-content">
                    <div className="col-12 modal-header">
                        <h4 className="modal-title" id="myModalLabel">
                            {modalName}
                        </h4>
                        <button onClick={handleClose} className="btn-close" type="button" aria-label="Close"></button>
                    </div>
                    <div className="modal-body"> {/*<!-- cuerpo --> */}
                        {modalNumber === 1? <Registrarproducto closeAction={handleClose} /> : null}
                        {modalNumber === 2? <Actualizarproducto closeAction={handleClose} /> : null}
                        {modalNumber === 3? <Buscarproducto closeAction={handleClose}/>: null}
                        {modalNumber === 4? <PromptOkProducto closeAction={handleClose} /> : null}
                    </div>
                    <div className="modal-footer">
                        <button onClick={handleClose} className="btn btn-secondary" type="button">
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
