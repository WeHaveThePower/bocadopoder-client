import React, { Fragment, useState, useEffect } from 'react'
import { ModalModal } from './ModalModal';


export const BotonModal = ({ btnName, btnNumber }) => {

    //Modal grandpa's managing
    const [openFromF, setOpenFF] = useState(false);
    const handleOpen = () => setOpenFF(true);
    const handleClose = () => setOpenFF(false);

    return (
        <Fragment>
            <button onClick={handleOpen} className="btn btn-primary" type="button">
                {btnName}</button>
            <ModalModal modalName={btnName} modalNumber={btnNumber} openMe={openFromF} closeFunc={handleClose}/>
        </Fragment>
    );
}


// useEffect(()=>{
//     if(open){
//         handleOpen();            
//     }else{
//         handleClose();   
//     }
// }, [open])