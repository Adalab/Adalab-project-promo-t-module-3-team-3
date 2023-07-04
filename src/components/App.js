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
    console.log('handleSubmit');
    // for (const prop in data) {
    //   if(prop === ''){
    //     setError(`Rellena el campo: ${prop}` )

    //   }
    // }
    console.log(data);

    callToApi(data).then((response) => {
      if (response.success) {
        setUrl(response.cardURL);
        setData({name: '',
              slogan: '',
              technologies: '',
              demo: '',
              repo: '',
              desc: '',
              autor: '',
              job: '',
              image: '',
              photo: ''})
        console.log(response.cardURL);
      } else {
        setUrl('No se pudo crear su card, por favor rellene todos los campos');
      }
    });
  };

  return (
    <div className='container'>
      <Header imgLogo={imgLogo} />
      <main className='main'>
        <Preview data={data} />
        <Form
          data={data}
          handleInputForm={handleInputForm}
          handleSubmit={handleSubmit}
          handleChangeForm={handleChangeForm}
          url={url}
        />
      </main>
      <Footer imgLogo={imgLogo} />
    </div>
  );
}
export default App;
