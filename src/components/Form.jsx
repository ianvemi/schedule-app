import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const Form = ({newQuote}) => {

    const [datos, actualizarDatos]= useState({
        asunto:"",
        nombre:"",
        fecha:"",
        hora:"",
        desc:""
    })

    //Statement de validación (true : genera msj de error / false : continua)
    const [error, updateError] = useState(false);

    //Extraer datos con destructuring
    const {asunto, nombre, fecha, hora, desc} = datos;

    //Función para escuchar las modificaciones de los campos
    const updateQuote = (e) =>{
        actualizarDatos({
            ...datos,
           [e.target.name] : e.target.value
        })
    } 

    //Funcion submit
    const submit = (e) => { 
        //PREVIENE EL QUERY EN LA BARRA DE BUSQUEDA DEL NAVEGADOR
        e.preventDefault();

        //VALIDACION DE CAMPOS
        if(asunto.trim() ==="" || nombre.trim() ==="" || fecha.trim() ==="" || hora.trim() ==="" ||
        desc.trim() ===""){
            console.log("error");
            updateError(true);
            return;
        }
            updateError(false);

            //Asignando id único con uuid (Import)
            datos.id= uuidv4();

            //Guardando datos en la constante newQuote
            newQuote(datos);
            
            //Reiniciar formulario
            actualizarDatos({
                asunto:"",
                nombre:"",
                fecha:"",
                hora:"",
                desc:""
            })
        
    }


    return ( 
        <div className="Form">
        <h2>Nueva nota</h2>
        <form
        onSubmit={submit}
        >
        {error
        ? <p>Rellene todos los campos.</p>

        :null}
        
            <label>Asunto</label>
            <input
                type="text"
                name="asunto"
                //onChange escucha los cambios del input
                onChange={updateQuote}
                //Asignamos value
                value={asunto}
                
            />
            <label>Nombre</label>
            <input
                type="text"
                name="nombre"
                onChange={updateQuote}
                value={nombre}
                
            />
            <label>Fecha</label>
            <input
                type="date"
                name="fecha"
                onChange={updateQuote}
                value={fecha}
                
            />

            <label>Hora</label>
            <input
                type="time"
                name="hora"
                onChange={updateQuote}
                value={hora}
                
            />

            <label>Resumen</label>
            <input
                type="text"
                name="desc"
                onChange={updateQuote}
                value={desc}
                
            />
            <div className="button">
            <button className="submit"
            type="submit"
            >Agregar</button>
            </div>
            
        </form>
        </div>
        
     );
}
 
export default Form;