import { useState } from 'react';
import '../styles/main.scss';
//import imgHero from '../images/cover.jpeg';
//import imgUser from '../images/user.jpeg';
import imgLogo from '../images/logo-adalab.png';
import callToApi from '../services/api';
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
      'https://mir-s3-cdn-cf.behance.net/projects/404/40df36161966393.Y3JvcCwxNzM0LDEzNTcsMTMzLDA.jpg',
    photo:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/paquita-salas-1561634165.jpg?crop=1.00xw:0.890xh;0,0.0434xh&resize=500:*',
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
      <header className='header'>
        <div className='header__container'>
          <div className='header__icon'>
            <i className='fa-sharp fa-solid fa-laptop-code'></i>
            <p className='header__text'>Proyectos Molones</p>
          </div>
          <img className='header__logo' src={imgLogo} alt='' />
        </div>
        <div className='header__container2'>
          <h1 className='header__title'>Proyectos Molones</h1>
          <p className='header__text2'>
            Escaparate en línea para recoger ideas a través de la tecnología.
          </p>
          <button className='header__button'>VER PROYECTOS</button>
        </div>
      </header>
      <main className='main'>
        <section className='preview'>
          <img className='image' src={data.image} alt='' />;
          <section className='autor'>
            <section className='info-project'>
              <div className='containerLine'>
                <hr className='line' />
                <p className='subtitleCard'>Personal Project Card</p>
                <hr className='line2' />
              </div>
              <h2 className='title'>{data.name || 'Elegant wordspace'}</h2>
              <p className='slogan'>{data.slogan || 'Diseños Exclusivos'}</p>
              <p className='desc'>
                {data.desc ||
                  'Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet faucibus commodo tellus lectus lobortis.'}
              </p>
              <section className='technologies'>
                <p className='textTec'>
                  {data.technologies || 'React JS, MongoDB'}
                </p>
                <div className='icons'>
                  <span className='globe'>
                    <a href={data.demo}>
                      <i className='fa-regular fa-globe'></i>
                    </a>
                  </span>
                  <span className='github'>
                    <a href={`https://github.com/${data.repo}`}>
                      <i className='fa-brands fa-github'></i>
                    </a>
                  </span>
                </div>
              </section>
            </section>

            <section className='info-autor'>
              <img className='imageCard' src={data.photo} alt='' />
              <p className='job'>{data.job || 'Full Stack Developer'}</p>
              <p className='name'>{data.autor || 'Emmelie Björklund'}</p>
            </section>
          </section>
        </section>

        <section className='form'>
          <h2 className='form__title'>Información</h2>

          <section className='form__info'>
            <p className='form__subtitle'>Cuéntanos sobre el proyecto</p>
            <hr className='form__line' />
          </section>

          <fieldset className='project'>
            <input
              className='input'
              type='text'
              placeholder='Nombre del proyecto'
              name='name'
              id='name'
              value={data.name}
              onInput={handleInputForm}
            />

            <input
              className='input'
              type='text'
              name='slogan'
              id='slogan'
              placeholder='Slogan'
              value={data.slogan}
              onInput={handleInputForm}
            />
            <div className='slogan-repo'>
              <input
                className='input'
                type='text'
                name='repo'
                id='repo'
                placeholder='Repositorio'
                value={data.repo}
                onInput={handleInputForm}
              />
              <input
                className='input'
                type='text'
                name='demo'
                id='demo'
                placeholder='Demo'
                value={data.demo}
                onInput={handleInputForm}
              />
            </div>
            {/* <input
              className='input'
              type='text'
              placeholder='Demo'
              name='demo'
              id='demo'
            /> */}
            <input
              className='input'
              type='text'
              placeholder='Tecnologías'
              name='technologies'
              id='technologies'
              value={data.technologies}
              onInput={handleInputForm}
            />
            <textarea
              className='textarea'
              type='text'
              placeholder='Descripción'
              name='desc'
              id='desc'
              value={data.desc}
              onChange={handleInputForm}
            ></textarea>
          </fieldset>

          <section>
            <p className='form__subtitle'>Cuéntanos sobre la autora</p>
            <hr className='form__line form__lineNone' />
          </section>

          <fieldset className='autor'>
            <input
              className='input'
              type='text'
              placeholder='Nombre'
              name='autor'
              id='autor'
              value={data.autor}
              onInput={handleInputForm}
            />
            <input
              className='input'
              type='text'
              placeholder='Trabajo'
              name='job'
              id='job'
              value={data.job}
              onInput={handleInputForm}
            />
          </fieldset>

          <section className='buttons'>
            <button className='buttons__btn'>Subir foto del proyecto</button>
            <button className='buttons__btn'>Subir foto de autora</button>
          </section>
          <section className='buttons'>
            <button
              className='buttons__btn buttons__large'
              onClick={handleSubmit}
            >
              Crear Proyecto
            </button>
          </section>
          <section className='card'>
            <span className=''> La tarjeta ha sido creada: {url} </span>
            <a href='./#' className='' target='_blank' rel='noreferrer'>
              {' '}
            </a>
          </section>
        </section>
      </main>
      <footer className='footer'>
        <img className='footer__logo' src={imgLogo} alt='Logo Adalab' />
      </footer>
    </div>
  );
}
export default App;
