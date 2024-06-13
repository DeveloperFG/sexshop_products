import styled from 'styled-components';


export const DivTotal = styled.div`
    background-color: #2b2b30;
    padding: 40px;
    height: 300px;
    color: #ffff;
    border-radius: 5px;
   

    .txtTotal{
        display:flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 20px;  
    }

    .button{
        margin-top: 30px;
        align-items: center;
        justify-content: center;
        display: flex;
        /* max-width: 100%; */
        width: 100%;
        height: 50px;
        font-size: 16px;
        font-weight: bold;
        background-color: green;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
       
    }
/* 
    .desativado{
        opacity: 0.5;
        
    } */

    /* a [disabled="disabled"] {
        pointer-events: none;
    
    }
    
    */
    
   
    button:hover{
        background-color: #008000;
    }


    @media (min-width: 300px) and (max-width: 520px){


        button{
        padding: 2%;
    }

    .lista{
        width: inherit;  
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 5%;
       }

       .lista h1, h3{
            font-size: 12px;
       }

  }

`