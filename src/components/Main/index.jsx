import React, {useEffect, useState} from 'react';
import Header from '../Header';
import './Main.css';
import Recently from '../Recently';
import PodRow from '../PodRow';

export default function Main() {

    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(()=>{
        const scrollListener = () => {
          if(window.scrollY > 10){
            setBlackHeader(true);
          } else{
            setBlackHeader(false);
          }
        }
        window.addEventListener('scroll', scrollListener);
    
        return () =>{
          window.removeEventListener('scroll',scrollListener)
        }
      },[]);

    return (
        <div className="main">
        <Header black={blackHeader}/>

            <div className="container">
                    <h1>Boa noite</h1>
               
                <Recently/>

                <div className="description">
                    <h2>Programas para conhecer</h2>
                    <h5>Podcasts que achamos que você vai adorar.</h5>
                </div>
                <PodRow/>
                <div className="description">
                    <h2>Programas para conhecer</h2>
                    <h5>Podcasts que achamos que você vai adorar.</h5>
                </div>
                <PodRow/>
                <div className="description">
                    <h2>Programas para conhecer</h2>
                    <h5>Podcasts que achamos que você vai adorar.</h5>
                </div>
                <PodRow/>
                <div className="description">
                    <h2>Programas para conhecer</h2>
                    <h5>Podcasts que achamos que você vai adorar.</h5>
                </div>
                <PodRow/>
            </div>
        </div>
    )
}
