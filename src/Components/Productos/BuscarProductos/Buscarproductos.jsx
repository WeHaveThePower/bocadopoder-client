import {React , Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { BotonModal } from '../MenuProductos/BotonModal';

export function Buscarproducto({ closeAction }) {
        
    return (
        <Fragment>
            <div className="input-group">
                <div className="col-12">
                    <input type="text" className="form-control bg-light border-3" placeholder="Search for..."
                            aria-label="Search" aria-describedby="basic-addon2"/>
                </div>
                <div className="row">
                    <FormControl component="fieldset">
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                            <FormControlLabel value="byID" control={<Radio />} label="ID" labelPlacement="bottom" />
                            <FormControlLabel value="byDESC" control={<Radio />} label="Desc." labelPlacement="bottom"/>
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="input-group-append">
                    <button className="btn btn-primary m-2" type="button"> 
                        Buscar
                    </button>
                </div>
                <div className="input-group-append">
                    <button className="btn btn-primary m-2" type="button">
                        Limpiar
                    </button>
                </div>
            </div>
        </Fragment>
    )
}
