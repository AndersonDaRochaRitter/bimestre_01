const ListaIngresso = ({camaroteOpen,camarote,FrontStage,pista,preco1,preco2,preco3,preco4}) => {
  
    return(
       <div className="ListaIngresso">
           <p>{camaroteOpen}{preco1}</p>
           <p>{camarote}{preco2}</p>
           <p>{FrontStage}{preco3}</p>
           <p>{pista}{preco4}</p>
       </div>
    )
     
   }
   
   export default ListaIngresso;