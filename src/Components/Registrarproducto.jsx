import {React , Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export function Registrarproducto({accion, estado}) {
    return (
        <Fragment>
            {/*<div className="modal fade text-start" id="myModalNewProd" tabIndex="-1" aria-labelledby="myModalLabel" aria-hidden="true">*/}
                <div className="modal-dialog text-start text-black fs-6">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="myModalLabel">
                                Registrar Producto
                            </h5>
                            <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body"> {/*<!-- cuerpo --> */}
                            <p>Ingrese los datos del nuevo producto.</p>
                            <form action="#" method="get">
                                {/* <!-- ID --> */}
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="modalInputProductID">
                                        ID del producto {/* <!-- txt --> */}
                                    </label>
                                    <input className="form-control" id="modalInputProductID" type="number"
                                        aria-describedby="emailHelp"/>
                                    <div className="form-text" id="emailHelp">Procure que este valor sea único</div>
                                </div>
                                {/* <!-- Nombre --> */}
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="modalInputProductName">
                                        Nombre {/* <!-- txt --> */}
                                    </label>
                                    <input className="form-control" id="modalInputProductName" type="text" name="q"/>
                                </div>
                                {/* <!-- Precio --> */}
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="modalInputProductPrice">
                                        Valor Unitario {/*<!-- txt -->*/}
                                    </label>
                                    <input className="form-control" id="modalInputProductPrice" type="text"/>
                                </div>
                                <button className="btn btn-primary" type="submit" data-bs-toggle="modal" data-bs-target="#myModalProdSucces">Registrar</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-bs-dismiss="modal" onClick={accion}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            {/*</div>*/}
        </Fragment>
    )
}
