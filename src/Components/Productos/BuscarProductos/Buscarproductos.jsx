import {React , Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { BotonModal } from '../MenuProductos/BotonModal';

export function Buscarproducto({ closeAction }) {
    
    const hdlInput = (e)=>{
        ;
    }
    
    return (
        <Fragment>
            <form onSubmit={closeAction}>
                <div className="mb-3">
                <FormControl component="fieldset">
                    <FormLabel component="legend">Seleccione si por ID o por Descripción (Exacta)</FormLabel>
                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                        <FormControlLabel value="female" control={<Radio />} label="ID" />
                        <FormControlLabel value="male" control={<Radio />} label="Descripción" />
                        <FormControlLabel value="disabled" disabled control={<Radio />} label="AI search" />
                    </RadioGroup>
                </FormControl>
                </div>
                {/* <!-- Precio --> */}
                <div className="mb-3">
                    <label className="form-label" htmlFor="modalInputProductPrice">
                        Valor a buscar {/*<!-- txt -->*/}
                    </label>
                    <input onChange={hdlInput} className="form-control" type="text"/>
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">
                        Buscar</button>
                </div>
                <BotonModal btnNumber={5} btnName={'Resultado de la búsqueda'}/>
            </form>
        </Fragment>
    )
}
