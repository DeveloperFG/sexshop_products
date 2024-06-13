import styled from "styled-components";


export const SectionCart = styled.section`

    /* display: grid;
    grid-template-columns: repeat(3, auto); */
   
    max-width: 100%;
    height: auto;
    margin: 50px auto 0px;
    flex-direction: column;
    position: absolute;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    

    h1{
        text-align: center;
        font-size: 2rem;
        
       
    }
    
    .containerList{
        display: flex;
        padding: 50px 20px;
    }
      

    .listCart{
        width: 100% ;
        margin-right: 20px; 
              
    }
    
    .total{
        width:90%
    }


    .gifCar{
        width: 20%;
       }   
        

    @media (max-width: 768px){

        z-index: 99;

        .containerList{
            flex-direction: column;
            align-items: center;
            
        }
      
         

        .listCart{
            margin-right: unset;
            margin-bottom: 5%;
            
        }

        .total{
            max-width: 70%;
            width:100%
        }

        .gifCar{
        width: 40%;
       }   

       
    }

    @media (min-width: 300px) and (max-width: 520px) {

        .containerCar{
            z-index: 99;
        }
       
       .listCart{
           max-width: 100%;
       }
    
       .total{
         max-width: 100%;
      
       }

       .gifCar{
        width: 40%;
       }   
       
   }



`