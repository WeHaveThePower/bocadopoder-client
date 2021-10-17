import { customAlphabet } from 'nanoid';
import React, { Fragment, useState } from 'react'
import { BotonModal } from '../MenuProductos/BotonModal';

export const ListaProductos = () => {
    
    const nanoidC = customAlphabet('0123456789HJKQ', 6);

    const testJSON =  [{id: nanoidC(), descripcion:'Cerveza', valor:'9500', estado:true},
                      {id: nanoidC(), descripcion:'Napoleón', valor:'12500', estado:false},
                      {id: nanoidC(), descripcion:'Sandwich', valor:'11500', estado:false},
                      {id: nanoidC(), descripcion:'Funcionó, hp!!!', valor:'Infinito', estado:true},
                      {id: nanoidC(), descripcion:'Cerveza', valor:'9500', estado:true},
                      {id: nanoidC(), descripcion:'Napoleón', valor:'12500', estado:false},
                      {id: nanoidC(), descripcion:'Sandwich', valor:'11500', estado:false},
                      {id: nanoidC(), descripcion:'Funcionó, hp!!!', valor:'Infinito', estado:true},
                      {id: nanoidC(), descripcion:'Cerveza', valor:'9500', estado:true},
                      {id: nanoidC(), descripcion:'Napoleón', valor:'12500', estado:false},
                      {id: nanoidC(), descripcion:'Sandwich', valor:'11500', estado:false},
                      {id: nanoidC(), descripcion:'Funcionó, hp!!!', valor:'Infinito', estado:true}
    ];
    
    const listaProd = testJSON; // dbTraerProductos('productos');
    
    const [stLista, setStLista] = useState(listaProd);

    return (
        <Fragment>
            <div className="col-lg-12">
                <div className="card mb-0">
                    <div className="card-header">
                        <h3 className="h4 mb-0 text-center">Listado total de productos</h3>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table mb-0 table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Descripción</th>
                                        <th>Valor Unitario</th>
                                        <th>Disponible</th>
                                        <th> . </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stLista.map((elem)=>(
                                        <tr key={elem.id}>
                                            <th scope="row">{elem.id}</th>
                                            <td>{elem.descripcion}</td>
                                            <td>{elem.valor}</td>
                                            <td>{elem.estado ? "SI" : "NO"}</td>
                                            <td> <BotonModal btnName={'Editar'} btnNumber={2} props={{id:elem.id}}/></td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <th className="border-bottom-0" scope="row"></th>
                                        <td className="border-bottom-0"></td>
                                        <td className="border-bottom-0"></td>
                                        <td className="border-bottom-0"></td>
                                        <td className="border-bottom-0"></td>
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
