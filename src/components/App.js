import { useState } from 'react';
import '../styles/main.scss';
//import imgHero from '../images/cover.jpeg';
//import imgUser from '../images/user.jpeg';
import imgLogo from '../images/logo-adalab.png';
import callToApi from '../services/api';
import Header from './Header';
import Preview from './Preview';
import Form from './Form';
import Footer from './Footer';
//import GetAvatar from './GetAvatar';
//import Profile from './Profile';

function App() {
  const [data, setData] = useState({
    name: '',
    slogan: '',
    technologies: '',
    demo: '',
    repo: '',
    desc: '',
    autor: '',
    job: '',
    image:
    'https://pbs.twimg.com/profile_images/1144500087189454848/Reu3d-xY_400x400.png',
    photo:
    'https://mir-s3-cdn-cf.behance.net/projects/404/40df36161966393.Y3JvcCwxNzM0LDEzNTcsMTMzLDA.jpg',
  });
  const [url, setUrl] = useState('');
  //const [error, setError] = useState('');

  const handleInputForm = (ev) => {
    setData({ ...data, [ev.target.id]: ev.target.value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('handleSubmit');
    // for (const prop in data) {
    //   if(prop === ''){
    //     setError(`Rellena el campo: ${prop}` )

    //   }
    // }

    callToApi(data).then((response) => {
      if (response.success) {
        setUrl(response.cardURL);
      } else {
        setUrl('No se pudo crear tu card');
      }
    });
  };

  return (
    <div className='container'>
     <Header/>
      <main className='main'>
        <Preview/>
        <Form/>
      </main>
     <Footer/>
    </div>
  );
}
export default App;
