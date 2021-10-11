import {React , Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { nanoid } from 'nanoid'
import { useState } from 'react'

export function Actualizarproducto({ closeAction }) {
    const [stRegistro, setStRegistro] = useState({id:'', descripcion:'', valor:'', estado:true}); //, estado:true

    const hdlAsignID = ()=>{
        
        /*OJO nota 1 : no están sincronizados los id*/
        setStRegistro((prevState)=>({...prevState, id:nanoid(8)})) //{id:nanoid(8), descripcion:stRegistro.descripcion, valor:stRegistro.valor});
    }

    const hdlDesc = (e)=>{
        setStRegistro((prevState)=>({...prevState, descripcion:e.target.value}))
    }
    
    const hdlVal = (e)=>{
        setStRegistro((prevState)=>({...prevState, valor:e.target.value}))
    }

    const hdlClose = ()=>{
        closeAction();
    };

    const hdlForm = (e)=>{
        e.preventDefault();

        let id = stRegistro.id;
        let desc = stRegistro.descripcion;
        let val = stRegistro.valor;
        if(id === 'Generar  > >' || desc.trim() === '' || val.trim() === ''){
            alert('Faltan datos');
            return;
        }
        
        let jsonProd = stRegistro;
        console.log(jsonProd)
        setStRegistro({id:'Generar  > >', descripcion:'', valor:'', estado:true})
        
        hdlClose();
    }

    return (
        <Fragment>
            <form onSubmit={hdlForm}>
                {/* <!-- ID --> */}
                <div className="mb-3">
                    <p className="h5 text-center">
                        ID ::: {nanoid(8)/*OJO nota 1*/} {/* <!-- txt --> */}
                    </p>
                </div>
                <p>-Ingrese los nuevos datos del producto-</p>
                {/* <!-- Descripción --> */}
                <div className="mb-3">
                    <label className="form-label" htmlFor="modalInputProductName">
                        Nueva descripción {/* <!-- txt --> */}
                    </label>
                    <input value={stRegistro.descripcion} onChange={hdlDesc} placeholder="" className="form-control" id="modalInputProductName" type="text" name="q"/>
                </div>
                {/* <!-- Precio --> */}
                <div className="mb-3">
                    <label className="form-label" htmlFor="modalInputProductPrice">
                        Nuevo valor Unitario {/*<!-- txt -->*/}
                    </label>
                    <input value={stRegistro.valor} onChange={hdlVal} className="form-control" id="modalInputProductPrice" type="text"/>
                </div>
                <button className="btn btn-primary" type="submit" data-bs-toggle="modal" data-bs-target="#myModalProdSucces">Actualizar</button>
            </form>
        </Fragment>
    )
}
