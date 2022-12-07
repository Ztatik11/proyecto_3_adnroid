import React , {useState} from "react";
import {Button, Text, View, StyleSheet, TextInput,Switch,Image} from "react-native";

export default function App () {
  const [isEnabled,setisEnabled]= useState(false);
  const [Resultado,setResultado] = useState(null);
  const [Imagen,setImagen] = useState(null);
  const solo_texto = /[a-zA-ZÁ-ÿ\s]+$/
  const solo_numero = /[0-9\s]+$/
  const formato_correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-z\s]+$/
  
  const [Validacion_nombre,setvalidacion_nombre] =useState(false)
  const [Validacion_apellido,setvalidacion_apellido] =useState(false)
  const [Validacion_edad,setvalidacion_edad] =useState(false)
  const [Validacion_correo,setvalidacion_correo] =useState(false)

  const [Nombre,setNombre] =useState(null)
  const [Apellido,setApellido] =useState(null)
  const [Edad,setEdad] =useState(null)
  const [Correo,setCorreo] =useState(null)
  const [Genero,setGenero] =useState(null)

  const resultado = () => {
    if (Validacion_nombre==true && Validacion_apellido==true && Validacion_edad==true && Validacion_correo==true) {
      setGenero(isEnabled ? "Mujer":"Hombre")
      setResultado(
        <Text>
          Mi nombre es {Nombre} {Apellido}, mi edad es {Edad}, mi genero es {Genero}, mi correo electronico es {Correo}
        </Text>
        )
      setImagen(
        <Image
          style = {[styles.imagen]}
          source={{uri :"https://media.tenor.com/BwKANaB-zwIAAAAC/bob-esponja-dan%C3%A7ando.gif"}}
        />
      )
        console.log(isEnabled)
        console.log(Genero)
    } else {
      setImagen(null)
      setResultado("Los datos no son correctos o te falta introducir algun dato")
    }
  }
 
  

  return (
    <View style ={[styles.aplicacion]}>
      <Text style ={[styles.titulo]}>FORMULARIO</Text>
      <View style ={[styles.contenedor_datos]}>
      <Text>Nombre:</Text>
        <TextInput style ={Validacion_nombre ? [styles.cuadrotexto_bien]:[styles.cuadrotexto_mal]}
        name="nombre"
        placeholder="Nombre" 
        onChangeText={nombre=>validacion_campo_nombre(nombre)}
      />
      </View>
      <View style ={[styles.contenedor_datos]}>
      <Text>Apellidos:</Text>
        <TextInput style ={Validacion_apellido ? [styles.cuadrotexto_bien]:[styles.cuadrotexto_mal]}
        name="apellidos"
        placeholder="Apellidos" 
        onChangeText={Apellido=>validacion_campo_apellido(Apellido)}
      />
      </View>
      <View style ={[styles.contenedor_datos]}>
      <Text>Edad:</Text>
        <TextInput style ={Validacion_edad ? [styles.cuadrotexto_bien]:[styles.cuadrotexto_mal]}
        name="edad"
        placeholder="Edad" 
        onChangeText={Edad=>validacion_campo_edad(Edad)}
      />
      </View>
      <View style ={[styles.contenedor_datos]}>
      <Text>Correo Electronico:</Text>
        <TextInput style ={Validacion_correo ? [styles.cuadrotexto_bien]:[styles.cuadrotexto_mal]}
        name="correo"
        placeholder="Correo electronico" 
        onChangeText={Correo=>validacion_campo_correo(Correo)}
      />
      </View>
      <Text>GENERO</Text>
      <View style ={[styles.contenedor_genero]}>
        <Text>HOMBRE</Text>
        <Switch
          trackColor={{false:'green',true:'yellow'}}
          thumbColor={isEnabled ? 'blue':'red'}
          onValueChange={()=>setisEnabled(previousState=>!previousState)}
          value={isEnabled}
          />
        <Text>MUJER</Text>
      </View>
      <View style ={[styles.contenedor_datos]}>
      <Button
            onPress={resultado}
            title={"Finalizar"}
      />
      
      </View>
      <Text>{Resultado}</Text>
      <View style ={[styles.contenedor_datos]}>
        {Imagen}
      </View>
      
      
    </View>);
  function validacion_campo_nombre(nombre){
    if (solo_texto.test(nombre)) {
      console.log("Validacion 1")
      setvalidacion_nombre(true)
      setNombre(nombre)
    } else {
      setvalidacion_nombre(false)
    }
  }
  
  function validacion_campo_apellido(apellido){
    if (solo_texto.test(apellido)) {
      console.log("Validacion 2")
      setvalidacion_apellido(true)
      setApellido(apellido)
    } else {
      setvalidacion_apellido(false)
    }
  }
  
  function validacion_campo_edad(edad){
    if (solo_numero.test(edad)) {
      console.log("Validacion 3")
      setvalidacion_edad(true)
      setEdad(edad)
    } else {
      setvalidacion_edad(false)
    }
  }
  
  function validacion_campo_correo(correo){
    if (formato_correo.test(correo)) {
      console.log("Validacion 4")
      setvalidacion_correo(true)
      setCorreo(correo)
    } else {
      setvalidacion_correo(false)
    }
  }
}




const styles = StyleSheet.create({

  titulo:{
    fontSize:50,
    color:'white',
  },

  aplicacion:{
    alignItems:"center",
    flex:1,
    backgroundColor:"black",
  },
  contenedor_datos:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    padding:20,
  },
  contenedor_genero:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    padding:20,
    borderWidth:10,
    borderColor:"#FA0505",
    borderRadius:50,
  },

  cuadrotexto_bien:{
    backgroundColor:"white",
    color:'white',
    borderColor:'grey',
    borderWidth:1,
    width:200,
  },

  cuadrotexto_mal:{
    backgroundColor:"white",
    color:'white',
    borderColor:'red',
    borderWidth:1,
    width:200,
  },

  imagen: {
    width: 100,
    height: 100,
    opacity: 1,
  },
});
