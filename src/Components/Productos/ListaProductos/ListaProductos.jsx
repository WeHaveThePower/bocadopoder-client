import React, { Fragment } from 'react'

export const ListaProductos = () => {
    return (
        <Fragment>
            <div class="col-lg-12">
                <div class="card mb-0">
                    <div class="card-header">
                        <h3 class="h4 mb-0 text-center">Listado de productos</h3>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table mb-0 table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Descripción</th>
                                        <th>Valor Unitario</th>
                                        <th>Disponible</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <!-- un Component clariiitoooo --> */}
                                    <tr>
                                        <th scope="row">1001</th>
                                        <td>Pastelito</td>
                                        <td>3500</td>
                                        <td>SÍ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1005</th>
                                        <td>Dedito</td>
                                        <td>2500</td>
                                        <td>NO</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2010</th>
                                        <td>h2-oh!</td>
                                        <td>2000</td>
                                        <td>SÍ</td>
                                    </tr>
                                    <tr>
                                        <th class="border-bottom-0" scope="row"></th>
                                        <td class="border-bottom-0"></td>
                                        <td class="border-bottom-0"></td>
                                        <td class="border-bottom-0"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
