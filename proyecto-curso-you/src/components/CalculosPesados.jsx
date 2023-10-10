import { useMemo,useState } from "react"
export const  CalculosPesados =() => {

    const [listaNumeros, setlistaNumeros] = useState([2,3,4,5,6,7,8,9])
    const [show, setshow] = useState(true)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const getCalculo=(listaNumeros) => useMemo(() => {
        console.log(`calculando`)
        return listaNumeros.reduce((a,b)=> a * b)
    }, [listaNumeros])
    const agregarNumero= ()=>{
        setlistaNumeros([...listaNumeros,listaNumeros[listaNumeros.length -1] +1])
    }

  return (
    <>
        <h2>Calculo:</h2>
        <p>{getCalculo(listaNumeros)}</p>
        <button className="btn btn-primary" onClick={()=> setshow(!show)}>{show? `Show`: `Hide`}</button>
        <button className="btn btn-primary" onClick={()=> agregarNumero()}>Agregar Numero</button>
    </>
  )
}
