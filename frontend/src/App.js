
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { LandingPage } from './screen/LandingPage/LandingPage';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import { MyNotes } from './screen/MyNotes/MyNotes';
import LoginScreen from './screen/LoginScreen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen/RegisterScreen';
import CreateNote from './screen/CreateNote/CreateNote';
import SingleNote from './screen/CreateNote/SingleNote';
import { useState } from 'react';
import ProfileScreen from './screen/ProfileScreen/ProfileScreen';
function App() {
     const [search,setSearch]=useState("");

  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />

  
        <Routes>


        <Route exact path="/"   element={<LandingPage />} />
        <Route exact path="/login"   element={<LoginScreen />} />
        <Route exact path="/profile"   element={<ProfileScreen />} />
        <Route exact path="/register"   element={<RegisterScreen />} />
        <Route exact path="/createnote"   element={<CreateNote />} />
        <Route exact path="/note/:id"   element={<SingleNote />} />


        <Route path="/mynotes" element={<MyNotes search={search} />} />
        </Routes>
     
     
     <Footer />

    </BrowserRouter>
  )
    


     
  
}

export default App;
