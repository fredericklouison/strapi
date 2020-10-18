import React,{useEffect,useState} from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Header from '../header'
import './Projet.css'
      
const Projet = () => {
    const[projet,setProjet]=useState([])
    useEffect(()=>{
        fetch('http://localhost:1337/projets')
        .then(res=>res.json())
        .then(res=>{
            setProjet(res)
        })
        
    },[])
    
    
    const postList=Object.keys(projet)
    .map(key=>{
    return(
        <Card key={key}>
                        <Card.Img variant="top" src={'http://localhost:1337'+projet[key].image[0].formats.thumbnail.url}/>
                        <Card.Body>
                            <Card.Title>{projet[key].titre}</Card.Title>
                            <Card.Text>
                                {projet[key].texte}
                            </Card.Text>
                            <a target='_blank'href={projet[key].GithubLink}><Button variant="primary" >Voir sur Github</Button></a><br/><br/>
                            {projet[key].Link?<a target='_blank'href={projet[key].Link}><Button variant="primary" >Voir en live</Button></a>:null}
                            
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{projet[key].created_at.split('T')[0]}</small>
                        </Card.Footer>
         </Card>
    )
    })
    
    console.log(postList)
    return (
        <div id='Projet'>
            <Header/>
            
                <CardColumns>
    
                   {postList}
    
                </CardColumns>
            
            
        </div>
    )
}

export default Projet