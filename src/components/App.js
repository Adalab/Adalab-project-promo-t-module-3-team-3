import { useEffect, useState } from 'react';
import '../styles/main.scss';
//import imgHero from '../images/cover.jpeg';
//import imgUser from '../images/user.jpeg';
import imgLogo from '../images/logo-adalab.png';
import callToApi from '../services/api';
import Header from './Header';
import Preview from './Preview';
import Form from './Form';
import Footer from './Footer';
import logo_nasa from '../images/logo_nasa.jpg';
//import GetAvatar from './GetAvatar';
//import Profile from './Profile';
import lStorage from '../services/localstorage';

function App() {
  const [data, setData] = useState(
    lStorage.get('lsData') || {
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
    }
  );
  const [url, setUrl] = useState('');
  //const [error, setError] = useState('');

  const handleChangeForm = (input, value) => {
    setData({ ...data, [input]: value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

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
  useEffect(() => {
    lStorage.set('lsData', data);
  }, [data]);

  const handleInputReset = (ev) => {
    setData({
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
  };
  return (
    <div className='container'>
      <Header imgLogo={imgLogo} imgNasa={logo_nasa} />
      <main className='main'>
        <Preview data={data} />
        <Form
          data={data}
          handleChangeForm={handleChangeForm}
          handleReset={handleInputReset}
          handleSubmit={handleSubmit}
          url={url}
        />
      </main>
      <Footer imgLogo={imgLogo} />
    </div>
  );
}
export default App;
