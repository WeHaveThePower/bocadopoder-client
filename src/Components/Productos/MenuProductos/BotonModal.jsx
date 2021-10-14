import React, { Fragment, useState } from 'react'
import Modal from '@mui/material/Modal';
import { Registrarproducto } from '../RegistrarProductos/Registrarproducto'
import { Actualizarproducto } from '../ActualizarProducto/Actualizarproducto';
import { PromptOkProducto } from '../RegistrarProductos/PromptOkProducto';
import { Buscarproducto } from '../BuscarProductos/Buscarproductos';


// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

export const BotonModal = ({ btnName, btnNumber, isDeSubmit, onSubmit }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const onClick = () =>{
        if(isDeSubmit) onSubmit();
        handleOpen();
    }

    return (
        <Fragment>
            <button onClick={onClick} className="btn btn-primary" type="button">
                {btnName}
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modal-dialog text-start text-black">
                    <div className="modal-content">
                        <div className="col-12 modal-header">
                            <h4 className="modal-title" id="myModalLabel">
                                {btnName}
                            </h4>
                            <button onClick={handleClose} className="btn-close" type="button" aria-label="Close"></button>
                        </div>
                        <div className="modal-body"> {/*<!-- cuerpo --> */}
                            {btnNumber === 1? <Registrarproducto closeAction={handleClose} /> : null}
                            {btnNumber === 2? <Actualizarproducto closeAction={handleClose} /> : null}
                            {btnNumber === 3? <Buscarproducto closeAction={handleClose}/>: null}
                            {btnNumber === 4? <PromptOkProducto closeAction={handleClose} /> : null}
                        </div>
                        <div className="modal-footer">
                            <button onClick={handleClose} className="btn btn-secondary" type="button">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </Fragment>
    );
}