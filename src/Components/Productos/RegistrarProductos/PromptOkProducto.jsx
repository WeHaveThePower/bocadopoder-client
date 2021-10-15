import {React , Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { nanoid } from 'nanoid'
import { useState } from 'react'

export function PromptOkProducto() {
    return (
        <Fragment>
            <form>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputProductID">
                        El registro fue {/* <!-- txt --> */}
                    </label>
                    <input value="EXITOSO" disabled className=" text-center form-control" id="inputProductID" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <p className="h5 text-center">
                        ID del registro::{nanoid(8)}
                    </p>
                </div>
            </form>
        </Fragment>
    )
}
