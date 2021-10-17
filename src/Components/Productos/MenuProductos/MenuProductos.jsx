
import React, { Fragment } from 'react'
import { BotonModal } from './BotonModal'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';



export const MenuProductos = () => {
    return (
        <Fragment>
            <div className="col-lg-12">
                {/* <!-- Card de Gestión Productos --> */}
                <div className="card">
                    {/* <!-- Encabezado de la Card --> */}
                    <div className="card-header">
                        <h3 className="mb-0 text-center">Gestión de productos</h3>
                    </div>
                    {/* <!-- Cuerpo de la card --> */}
                    <div className="card-body text-center">
                        {/* <!-- wrapper de botones --> */}
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-6 col-md-3 mb-3">
                                <BotonModal btnNumber={1} btnName={"Registro Producto"}/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-9">
                                <div className="input-group">
                                    <div className="row">
                                        <input type="text" className="form-control bg-light border-3" placeholder="Search for..."
                                                aria-label="Search" aria-describedby="basic-addon2"/>
                                    </div>
                                    <div className="row">
                                        <FormControl component="fieldset">
                                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                                <FormControlLabel value="byID" control={<Radio />} label="ID" />
                                                <FormControlLabel value="byDESC" control={<Radio />} label="Desc." />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary mx-2" type="button"> 
                                            Buscar
                                        </button>
                                    </div>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary mx-2" type="button">
                                            Limpiar
                                        </button>
                                    </div>
                                </div>
                                {/* <BotonModal btnNumber={3} btnName={"Buscar Producto"}/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


