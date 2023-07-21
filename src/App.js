import "./styles/App/app.css";
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites.jsx';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { Routes , Route , useLocation , useNavigate } from 'react-router-dom';
import homeImage from './components/Img/home.jpg';


function App() {
   const [characters, setCharacters] = useState([]);
   const [access , setAccess] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();
   const email = 'aldi@gmail.com';
   const password = '123asd';


   const Login =  (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access])

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const [showLoginForm, setShowLoginForm] = useState(true);
   {showLoginForm ? (
      <Form Login={Login} />
   ) : (
   <img src={homeImage} alt="Home Image" />
   )}

   
   
   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      
      setCharacters(charactersFiltered)

   }
   return (
      <div className='App'>
         {
            location.pathname !== '/' 
            ? <Nav onSearch={onSearch}  setAccess ={setAccess} />
            : null
         }
         <Routes>
            <Route path='/' element={<Form Login = {Login} />} />
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/>}/>
            <Route  path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/favorites'element={<Favorites/>} />
         </Routes>
         </div>
   );
};
export default App;
