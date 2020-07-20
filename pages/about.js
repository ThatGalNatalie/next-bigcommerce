import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div>
      <Navbar />
      <section className='about-container'>
        <h1>Hi 👋</h1>
        <p>This site was created with Next.js and uses the BigCommerce API.</p>

        <p>
          You can find me on Github{' '}
          <a href='https://github.com/ThatGalNatalie' target='_blank'>
            here
          </a>
        </p>

        <p>
          And on Twitter{' '}
          <a href='https://twitter.com/thatgalnatalie' target='_blank'>
            here
          </a>{' '}
          😃
        </p>
      </section>
      <footer>Made with ❤️ from California</footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
        .about-container {
          padding: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          font-family: 'Lato', sans-serif;
        }

        footer {
          padding: 140px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
