import styled from "styled-components";


export const CartVazio = styled.div`
   
    margin: 0 auto;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    max-width: 100%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 5px;
    
    
    
    h1{
        font-size: 2.5rem;
        text-align: center;
    }

    .carrinhoVazio{
        font-size: 1.8rem;
    
    }

    a{
        color: #DA0037;
        margin-top: 30px;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        

    }

    a:hover{
       color: #000;

    }

`;


export const ItemCart = styled.div`
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffff;
    border-radius: 5px;
    margin-bottom: 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    
   
    img{
    max-width: 200px;
    width: 100%;
    height: 200px;
    object-fit: contain;
    background-color: #f3f3f3 ;
  
   
    }

    .txtCart{
        /* max-width: 200px; */
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }

    .qtdItem{
        display: flex;
        justify-content: center;
        width: 200px;
        
    }

    .qtdItem button {
        width: 30px;
        height: 30px;
        background-color: #DA0037;
        border: none;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
        margin-top: 4%;
    }

    .qtdItem button:hover{
        background-color: #B0002C;

    }

    .qtdItem p{
        width: 45px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f3f3f3;
        margin-top: 4%;
       
    }

    .removebtn{
        border: none;
        width: 80px;
        height: 30px;
        font-weight: bold;
        cursor: pointer;
        margin-left: 2%;
        padding: 1%;
    }

    .removebtn:hover{
        background-color: #A1A1A1A1;
    }   

    



    @media (min-width: 300px) and (max-width: 520px){

        flex-direction: column;

        .txtCart{
        margin-top: 6%;
    
       }

       .txtCart p{
        margin-top: 2%;
    
       }

       .txtCart span{
        margin-top: 2%;
        margin-bottom: 10%;
    
       }

       .removebtn{
        margin-top: 6%;
    }


        

        img{
            max-width: 120px;
            width: 100%;
            height: 150px;
            object-fit: contain;
            background-color: #f3f3f3 ;

    }
   
      
  }


`



