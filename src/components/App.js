import { useState } from 'react';
import '../styles/main.scss';
import imgHero from '../images/cover.jpeg';
import imgUser from '../images/user.jpeg';

/*
-usar una vvariable objeto para tos los input
-variable vacia*/
function App() {
  //const [name, setName] = useState('');
  const [data, setData] = useState({ name: '', slogan: '', repo: '', demo: '' });
  const handleInputName = (ev) => {
    //name=ev.target.vaulue;
    //setName(ev.targe.value);
    setData({ name: ev.taget.value });

    //sestData({ name:ev.taget.value, slogan: ....})
  };

  const handleClickCreateCard = (event) => {};

  return (
    <div className='container'>
      <header className='header'>
        <p className='text'>Proyectos Molones</p>
      </header>
      <main className='main'>
        <section className='preview'>
          <img className='image' src={imgHero} alt='' />

          <section className='autor'>
            <section className='info-project'>
              <p className='subtitle'>Personal Project Card</p>
              <hr className='line' />

              <h2 className='title'>{data.name || 'Elegant wordspace'}</h2>
              <p className='slogan'>Diseños Exclusivos</p>
              <p className='desc'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus?
                Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus
                aperiam, ullam culpa accusantium placeat odit corrupti ipsum!
              </p>
              <section className='technologies'>
                <p className='text'>React JS, MongoDB</p>
              </section>
            </section>

            <section className='info-autor'>
              <img className='image' src={imgUser} alt='' />
              <p className='job'>Full Stack Developer</p>
              <p className='name'>Emmelie Björklund</p>
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
              onInput={handleInputName}
            />

            <input className='input' type='text' name='slogan' id='slogan' placeholder='Slogan' />
            <div className='slogan-repo'>
              <input
                className='input'
                type='text'
                name='repo'
                id='repo'
                placeholder='Repositorio'
              />

              <input className='input' type='text' placeholder='Demo' name='demo' id='demo' />
            </div>
            <input
              className='input'
              type='text'
              placeholder='Tecnologías'
              name='technologies'
              id='technologies'
            />
            <textarea
              className='textarea'
              type='text'
              placeholder='Descripción'
              name='desc'
              id='desc'
            ></textarea>
          </fieldset>

          <section>
            <p className='form__subtitle'>Cuéntanos sobre la autora</p>
            <hr className='form__line form__lineNone' />
          </section>

          <fieldset className='autor'>
            <input className='input' type='text' placeholder='Nombre' name='autor' id='autor' />
            <input className='input' type='text' placeholder='Trabajo' name='job' id='job' />
          </fieldset>

          <section className='buttons'>
            <button className='buttons__btn'>Subir foto del proyecto</button>
            <button className='buttons__btn'>Subir foto de autora</button>
          </section>
          <section className='buttons'>
            <button className='buttons__btn buttons__large' onClick={handleClickCreateCard}>
              Crear Proyecto
            </button>
          </section>
          <section className='card'>
            <span className=''> La tarjeta ha sido creada: </span>
            <a href='./#' className='' target='_blank' rel='noreferrer'>
              {' '}
            </a>
          </section>
        </section>
      </main>
    </div>
  );
}
export default App;
// recogendo
