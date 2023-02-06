import React from 'react'
import { useState,useEffect } from 'react'
import {IoIosArrowRoundDown} from 'react-icons/io'
import {IoIosArrowRoundUp} from 'react-icons/io'
import '../Style/Bitcoin.css'

const Bitcoin = () => {
    
    const [data, setData] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{

            fetch('https://api.coinlore.net/api/tickers/?start=0&limit=5')
            .then((res) => res.json())
            .then((rep) => setData(rep.data) ,setIsLoading(false))
        })

    })
    if(isLoading){
        return(
            <div>
                <h2>Loading,please wait</h2>
            </div>
        )
    }
return (
    <div >
        <div  className= "container">
        <div className='bitcoin'>
            {data.map((datum)=>{
                const {id,name,symbol,price_usd,percent_change_24h} = datum
                return(
                    <div className='crypto' key={id}>
                        <p className='name'> {name} </p>
                    
                        <p  className='name'> {symbol} </p>  
                        <p  className='name'> {price_usd}  </p>
                        <p className='name'>{percent_change_24h} {percent_change_24h > 0 ? <IoIosArrowRoundUp className='arrowup'/> :<IoIosArrowRoundDown className='arrowdown'/>}</p> <hr />
                    

                    </div>
                )
            })}
        </div>
    </div>

    </div>
)
        }

export default Bitcoin