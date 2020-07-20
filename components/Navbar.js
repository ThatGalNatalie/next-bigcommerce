import Link from 'next/link';

function Navbar() {
  return (
    <div>
      <ul className='navigation'>
        <li>
          <Link href='/'>
            <a href='#'>Home</a>
          </Link>
        </li>
        <Link href='/about'>
          <li>
            <a href='#'>About</a>
          </li>
        </Link>

        <Link href='/'>
          <li>
            <a href='#'>Cart</a>
          </li>
        </Link>
      </ul>

      <style jsx>{`
        .navigation {
          display: flex;
          flex-flow: row wrap;
          justify-content: flex-end;

          list-style: none;
          margin: 12px;
          background: grey;
          border-radius: 5px;
        }

        .navigation a {
          text-decoration: none;
          display: block;
          padding: 1em;
          color: white;
        }

        .navigation a:hover {
          background: black;
        }

        @media all and (max-width: 800px) {
          .navigation {
            justify-content: space-around;
          }
        }

        @media all and (max-width: 600px) {
          .navigation {
            flex-flow: column wrap;
            padding: 0;
          }
          .navigation a {
            text-align: center;
            padding: 10px;
            border-top: 1px solid rgba(255, 255, 255, 0.3);
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }
          .navigation li:last-of-type a {
            border-bottom: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Navbar;
