import React from 'react'
import Modal from '@mui/material/Modal';
import { Registrarproducto } from '../RegistrarProductos/Registrarproducto'
import { PromptOkProducto } from '../RegistrarProductos/PromptOkProducto';
import { PromptOkUpdate } from '../ActualizarProducto/PromptOkUpdate';
import { Buscarproducto } from '../BuscarProductos/Buscarproductos';

export const ModalModal = ({ modalName, modalNumber, openMe, closeFunc, props }) => {
    
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
                        {modalNumber === 1? <Registrarproducto closeAction={handleClose} tipo={"create"} /> : null}
                        {modalNumber === 2? <Registrarproducto closeAction={handleClose} tipo={"update"}/> : null}
                        {modalNumber === 3? <Buscarproducto closeAction={handleClose}/>: null}
                        {modalNumber === 4? <PromptOkProducto closeAction={handleClose} /> : null}
                        {modalNumber === 5? <PromptOkUpdate closeAction={handleClose} /> : null}
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
