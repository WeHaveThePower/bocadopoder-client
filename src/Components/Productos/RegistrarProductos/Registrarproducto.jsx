import {React , Fragment, useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { customAlphabet } from 'nanoid'

import { guardarDatabase } from '../../../Functionalities/Firebase/Controllers/Producto/Productos'
import AlertAndres from '../MenuProductos/AlertAndres'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


export function Registrarproducto({ closeAction, tipo }) {
    const nanoidCA = customAlphabet('0123456789JHKQ', 6)
    const [stRegistro, setStRegistro] = useState({id:nanoidCA(), descripcion:'', valor:'', estado:null}); //, estado:true
    const [stEnvio, setStEnvio] = useState({isGood:false, dbid:'', show:false});

    const hdlDesc = (e)=>{ setStRegistro((prevState)=>({...prevState, descripcion:e.target.value})) }
    
    const hdlVal = (e)=>{ setStRegistro((prevState)=>({...prevState, valor:e.target.value})) }

    const hdlEstado = (b)=>{ setStRegistro((priorState)=>({...priorState, estado:b})) }

    const hdlForm = async (e)=>{

        e.preventDefault();
        let id = stRegistro.id, desc = stRegistro.descripcion, val = stRegistro.valor;
        if(!id || !desc.trim() || !val.trim() || stRegistro.estado === null){
            setStEnvio({isGood:false, dbid:'', show:true});
            return;
        }
        
        const resp  = await guardarDatabase('productos', stRegistro);
        console.log(resp);
        console.log(stRegistro);
        
        setStRegistro({id:nanoidCA(), descripcion:'', valor:'', estado:true})
        setTimeout(()=>(setStEnvio({isGood:true, dbid:resp.id, show:true})),200);
        
    }

    useEffect(()=>{
        setStEnvio({dbid:'', show:false, isGood:stEnvio.isGood});
    },[stRegistro.descripcion, stRegistro.valor, stRegistro.estado])

    return (
        <Fragment>
            <AlertAndres from={"Registro"} showMe={stEnvio.show} isGood={stEnvio.isGood} props={{DBid : stEnvio.dbid,}}/>
            <form id="forma-registro-prod" onSubmit={hdlForm}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputProductID">
                        Quedará con la siguiente ID local </label>
                    <input value={stRegistro.id} disabled className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="modalInputProductName">
                        Descripción </label>
                    <input value={stRegistro.descripcion} onChange={hdlDesc} placeholder="" className="form-control" id="modalInputProductName" type="text" name="q"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="modalInputProductPrice">
                        Valor Unitario </label>
                    <input value={stRegistro.valor} onChange={hdlVal} className="form-control" id="modalInputProductPrice" type="text"/>
                    {/* <BotonModal btnNumber={4} btnName={"Estado del Registro"}/> */}
                </div>
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                        <FormControlLabel onClick={()=>(hdlEstado(true))} value="yes" control={<Radio />} label="Disponible" />
                        <span>&nbsp;</span>
                        <FormControlLabel onClick={()=>(hdlEstado(false))} value="no" control={<Radio />} label="No disponible" />
                    </RadioGroup>
                </FormControl>
                <div className="text-center">
                    <button className="btn btn-primary" type="submit">
                        Registrar </button>
                </div>
            </form>
            {/* <ModalModal modalName={'Estado del Registro'} modalNumber={4} openMe={openM} closeFunc={hdlCloseM} /> */}
            
        </Fragment>
    )
}
