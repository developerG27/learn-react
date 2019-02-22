import React, {Component} from 'react';
class Formulario extends Component{
  render(){
    return (
      <form>
        <div className="form-group">
          <label>Moneda: </label>
          <select className="form-control">
            <option value="" disabled defaultValue>Scegli la moneta</option>
            <option value="USD"> Dollaro </option>
            <option value="MXN"> Messico </option>
            <option value="EUR"> Euro </option>
          </select>
        </div>

        <div className="form-group">
          <label> Criptomoneda</label>
          <select className="form-control"></select>
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary" value="Cotizar"/>
        </div>
      </form>
    )
  }
}
export default Formulario;