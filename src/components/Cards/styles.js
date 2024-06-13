import styled from "styled-components";


export const DivCards = styled.div`
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding:0px 10px;
    /* border: 1px solid red; */

    /* @media (max-width: 767px) {
         justify-content: center;
       
    } */
`

export const Card = styled.div`
    max-width: 390px;
    width: 100%;
    height: 480px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: #fff;
    margin-bottom: 40px;
    margin-top: 23%;



     @media (min-width: 426px) and (max-width: 799px){
        max-width: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
    } 

 img{
        width: 90%;
        /* padding: 10px; */
        height: 200px;
        margin-top: -7%;
        object-fit: contain;

    }

    .txtCard{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .txtCard p{
        margin: 7px 0px 7px;
        font-size: 18px;
       
    }


    .txtCard span{
        opacity: 0.5;
        text-align: justify;
    }


    .txtCard h3{
        display: inline;
        margin: 5px 0px 10px;
        color: rgb(153, 26, 89);
    }

    .txtCard h3 p{
        
        color: #000;
    }

    button{
        background-color: #000;
        margin-top: 8%;
        color: #fff;
        border:none;
        width: 220px;
        height: 45px;
        font-size: 18px;
        font-weight: bold;
        transition: 0.2s;
        cursor: pointer;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;  
        
    }

    button:hover{
        background-color: green;
    }

    .carIcon{
        margin-right: 3%;
    }


    
.divQuant{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: end;
  justify-content: end;
  font-weight: bolder;
}


.divQuant .quant{
  font-size: 15px;
}



`


export const NavFilter = styled.div`
     max-width: 1220px;
     width:100%;
     height: 80px;
     background: #DA0037;
     margin-bottom:50px;
     padding: 0px 30px;
     display: flex;
     align-items: center;
     justify-content: space-between;

     select{
         width: 150px;
         height: 40px;
         padding: 5px;
         font-size: 18px;
         font-weight: bold;
         background: #DA0037;
         color: #fff;
         border: 3px solid #fff;

     }

     select:focus{
         outline: none;
     }
     option{
         background-color: #fff;
         color: #000;
     }

     .inputBusca{
         display: flex;
         align-items: center;
         background-color: #fff;
         padding-right: 10px;
         border-radius: 50px;

     }

    

     .inputBusca input{
         max-width:240px;
         width: 100%;
         height: 40px;
         padding: 20px 5px 20px 20px;
         font-size: 18px;
         font-weight: bold;
         border: none;
         border-bottom-left-radius: 50px;
         border-top-left-radius: 50px;
         
     }

     .inputBusca input::placeholder{
        color: #8c8c8c;
     }

     .inputBusca input:focus{
         outline: none;
     }

     .inputBusca svg{
         width: 25px;
         height: 25px;
         color: #8b8b8b;
     }

     /* @media (min-width:767px){
        flex-direction: column-reverse;
        height: auto;
        padding: 30px 20px ;

        select{
         margin-top:30px;

        }
     } */

   
     


`