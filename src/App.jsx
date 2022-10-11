import './App.scss';
import favicon from './assets/favicon.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={favicon} alt="" height='100px' />
        <p>Sign in to access dashboard and enter service user data. </p>
      </header>
      <body>
        <form action="">
          <input type="text" placeholder='email' />
          <input type="text" placeholder='password' />
          <button>sign in</button>
          
        </form>
        {/* <link rel="stylesheet" href="" >register</link> */}
        <p>register</p>


      </body>
    </div>
  );
}

export default App;
