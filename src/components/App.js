import { useState } from 'react';
import '../styles/main.scss';
//mport imgHero from '../images/cover.jpeg';
//import imgUser from '../images/user.jpeg';
import imgLogo from '../images/logo-adalab.png';
import callToApi from '../services/api';
import Header from './Header';
import Preview from './Preview';
import Form from './Form';
import Footer from './Footer';
import logo_nasa from '../images/logo_nasa.jpg';
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
    image: '',
    photo: '',
  });
  const [url, setUrl] = useState('');
  //const [error, setError] = useState('');
  console.log('url', url)
  const handleChangeForm = (propName, value) => {
    const cloneData = { ...data, [propName]: value };

    setData(cloneData);
  };

  const handleInputForm = (ev) => {
    setData({ ...data, [ev.target.id]: ev.target.value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    callToApi(data).then((response) => {
      if (response.success) {
        setUrl(response.cardURL);
        console.log(response.cardURL);
      } else {
        setUrl('No se pudo crear su card, por favor rellene todos los campos');
      }
    });
  };


  const handleInputReset =(ev)=>{
 setData({ name: '',
    slogan: '',
    technologies: '',
    demo: '',
    repo: '',
    desc: '',
    autor: '',
    job: '',
    image: '',
    photo: '',
  })
  }
  return (
    <div className='container'>
      <Header imgLogo={imgLogo} imgNasa={logo_nasa} />
      <main className='main'>
        <Preview data={data} />
        <Form
          data={data}
          handleInputForm={handleInputForm}
          handleSubmit={handleSubmit}
          handleChangeForm={handleChangeForm}
          handleReset={handleInputReset}
          url={url}
        />
      </main>
      <Footer imgLogo={imgLogo} />
    </div>
  );
}
export default App;
