
import React, { Fragment } from 'react'
import { BotonModal } from './BotonModal'


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
                            <div className="col-12 col-sm-6 col-md-3 mb-3">
                                <BotonModal btnNumber={2} btnName={"Actualizar Producto"}/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3 ">
                                <BotonModal btnNumber={3} btnName={"Buscar Producto"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


