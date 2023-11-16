import logo from './logo.svg';
import './App.css';
import Login from './login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <title>PayApp 12.07</title>
      </header>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.2.7-rc.0/web3.min.js"></script>
      <style>
        {`
          body {
            background-color: rgb(112, 140, 216);
            font-family: tahoma;
            font-size: 33px;
            display: flex;
            flex-direction: row;
          }
          button {
            background-color: rgb(203, 220, 223);
            font-size: 33px;
            padding: 5px;
            font-family: Impact;
          }
          input {
            width: 25vw;
            height: 30px;
            font-size: 25px;
            font-family: tahoma;
            outline: none;
          }
          #readArea {
            flex-basis: 50%;
          }
          #writeArea {
            flex-basis: 50%;
          }
          button:hover {
            background-color: rgb(255, 0, 0);
          }
        `}
      </style>
      <div>
        <div id="readArea"> 
          <button onclick="connectMetamask()">CONNECT TO METAMASK</button>
          <p id="userArea">Status: Not connected to Metamask</p>
          <button onclick="connectContract()">CONNECT TO CONTRACT</button>
          <p id="contractArea">Status: Not connected to Contract</p>
          <button onclick="getContractAccount()"> GET CONTRACT ACCOUNT </button>
          <p id="contractAccount">Contract Account: Not Connected to Contract</p>
          <button onclick="getBalanceApple()">GET BALANCE OF THE CONTRACT</button>
          <p id="balanceArea">Balance: Not Connected to Contract</p>
        </div>
        <div id="writeArea">
          <button onclick="depositContract()">Send ether to the Contract</button>
          <input type="number" id="depositInput" placeholder="Enter Amount"></input>
          <button onclick="withdraw()">WITHDRAW ETHER TO ANY ADDRESS</button> 
          <input type="text" id="addressInput" placeholder="Enter Address" /> 
          <input type="number" id="amountInput" placeholder="Enter Amount" /> 
        </div>
      </div>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
