import React, { Fragment } from 'react'

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
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-3 mb-3">
                                <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#myModalNewProd">
                                    Registrar Producto
                                </button>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3 mb-3">
                                <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#myModalUpdateProd">
                                    Actualizar Producto
                                </button>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3 mb-3">
                                <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#myProductList">
                                    Listar
                                </button>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3 ">
                                <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#myModalProdSearch">
                                    Buscar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
