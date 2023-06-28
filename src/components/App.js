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
      image:
        'https://pbs.twimg.com/profile_images/1144500087189454848/Reu3d-xY_400x400.png',
      photo:
        'https://mir-s3-cdn-cf.behance.net/projects/404/40df36161966393.Y3JvcCwxNzM0LDEzNTcsMTMzLDA.jpg',
    }
  );
  const [url, setUrl] = useState('');
  //const [error, setError] = useState('');

  const handleChangeForm = (input, value) => {
    //ev.preventDefault();

    setData({ ...data, [input]: value });
    /* setData({
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
    });*/
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
  useEffect(() => {
    lStorage.set('lsData', data);
  }, [data]);

  return (
    <div className='container'>
      <Header imgLogo={imgLogo} />
      <main className='main'>
        <Preview data={data} />
        <Form
          data={data}
          handleChangeForm={handleChangeForm}
          handleSubmit={handleSubmit}
          url={url}
        />
      </main>
      <Footer imgLogo={imgLogo} />
    </div>
  );
}
export default App;
