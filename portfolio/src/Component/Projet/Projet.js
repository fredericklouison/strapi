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
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{projet[key].created_at}</small>
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