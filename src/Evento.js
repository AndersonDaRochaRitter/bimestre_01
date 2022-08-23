const ListaEvento = ({name,dia,hr,local,cidade,genero}) => {
  
 return(
    <div className="ListaEvento">
        <p className="corNome">{name}</p>
        <p>{dia}</p>
        <p>{hr}</p>
        <p>{local}</p>
        <p>{cidade}</p>
        <p>{genero}</p> 
    </div>
 )
  
}

export default ListaEvento;