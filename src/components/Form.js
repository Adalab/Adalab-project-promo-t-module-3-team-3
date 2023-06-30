import GetAvatar from './GetAvatar';

function Form({ data, handleInputForm, handleSubmit, url, handleChangeForm }) {
  const handleImage = (fichero) => {
    handleChangeForm('image', fichero);
  };
  const handlePhoto = (fichero) => {
    handleChangeForm('photo', fichero);
  };

  return (
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
        <GetAvatar text='Subir foto del proyecto' avatar={data.photo} updateAvatar={handlePhoto} />
        <GetAvatar text='Subir foto de autora' avatar={data.image} updateAvatar={handleImage} />
      </section>
      <section className='buttons'>
        <button className='buttons__btn buttons__large' onClick={handleSubmit}>
          Crear Proyecto
        </button>
      </section>
      <section className='card'>
        <span className=''> La tarjeta ha sido creada: {} </span>
        <a href={url} className='' target='_blank' rel='noreferrer'>
          {url}
        </a>
      </section>
    </section>
  );
}
export default Form;
