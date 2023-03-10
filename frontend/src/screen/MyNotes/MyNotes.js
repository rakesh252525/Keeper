import React, { useEffect, useState } from 'react'
import { Accordion, Badge, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import MainScreen from '../../components/MainScreen'
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { deleteNoteAction, listNotes } from '../../actions/notesAction';

import Loading, {} from '../../components/Loading';
import  ErrorMessage, {} from '../../components/ErrorMessage';




export const MyNotes = ({search}) => {
    const dispatch = useDispatch();

    const noteList = useSelector((state) => state.noteList);
    const { loading, error, notes } = noteList;
  
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const noteCreate = useSelector((state) => state.noteCreate);
    const { success:successCreate } = noteCreate;


    const noteUpdate = useSelector((state) => state.noteUpdate);
    const { success:successUpdate } = noteUpdate;
  

    const noteDelete = useSelector((state) => state.noteDelete);
    const {
      loading: loadingDelete,
      error: errorDelete,
      success: successDelete,
    } = noteDelete;
  
     
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(listNotes());
        if (!userInfo) {
            navigate('/');
          }
      
    }, [dispatch,successUpdate,successCreate,navigate,userInfo,successDelete]);


    const deleteHandler = (id)=>{
        if(window.confirm("Are you Sure?")){
            dispatch(deleteNoteAction(id));
        }
    }


    return (
       
       
        <MainScreen title={`Welcome Back ${userInfo && userInfo.name}..`}>
        <Link to="/createnote">
            <Button style={{marginLeft:10,marginBottom:6}} size='lg'>
                Create New Note
            </Button>
            </Link>
            

            {loading && <Loading />}
            {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
            {
                notes?.reverse().filter((filterNote)=>
                filterNote.title.toLowerCase().includes(search.toLowerCase())
                ).map(note=>(
                <Accordion>
                <Card style={{margin:10}}>
               
                    <Card.Header style={{display:'flex'}}>
                        <span
                         style={{
                            color: "black",
                            textDecoration: "none",
                            flex: 1,
                            cursor: "pointer",
                            alignSelf: "center",
                            fontSize: 18,
                          }}><Accordion.Toggle
                          as={Card.Text}
                          variant="link"
                          eventKey="0"
                        >
                          {note.title}
                        </Accordion.Toggle>
                               
                          </span>
                        <div>
                            <Button href={`/note/${note._id}`}>Edit</Button>
                            <Button variant='danger' className='mx-2' onClick={()=>deleteHandler(note._id)}>Delete</Button>
                        </div>
                    </Card.Header>
                    
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <h4>
                            <Badge bg="success"> Category - {note.category}</Badge>
                        </h4>
                        <blockquote className='blockquote mb-0'>
                            <p>{note.content}</p>
                            <footer className='blockquote-footer'>

                            Created on{" "}
                        <cite title="Source Title">
                          {note.createdAt.substring(0, 10)}
                        </cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
                
               
                ))
            }
            

    
        
        </MainScreen>
        

    )
}

export default MyNotes;