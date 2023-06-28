function Header ({imgLogo}) {
    return (
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
    )
}
export default Header;