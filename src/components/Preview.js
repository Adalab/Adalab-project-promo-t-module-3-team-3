function Preview ({data}) {
    return (
        <section className='preview'>
          <img className='image' src={data.photo} alt='' />;
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
                    <a href={data.repo}>
                      <i className='fa-solid fa-globe'></i>
                    </a>
                  </span>
                  <span className='github'>
                    <a href={`https://github.com/${data.demo}`}>
                      <i className='fa-brands fa-github'></i>
                    </a>
                  </span>
                </div>
              </section>
            </section>
            <section className='info-autor'>
              <img className='imageCard' src={data.image} alt='' />
              <p className='job'>{data.job || 'Full Stack Developer'}</p>
              <p className='name'>{data.autor || 'Emmelie Björklund'}</p>
            </section>
          </section>
        </section>
    )
}
export default Preview;