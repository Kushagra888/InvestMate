document.addEventListener('DOMContentLoaded', function() {
    fetchStockPrices();
    fetchCryptoRates();

    // event listener for refresh button
    const refreshButton = document.getElementById('refresh-icon');
    refreshButton.addEventListener('click', function() {
      fetchStockPrices();
      fetchCryptoRates();
    })
});
  
function fetchStockPrices() {
    const API_KEY = 'cqbead1r01qvu0jvmbt0cqbead1r01qvu0jvmbtg'; 
    const symbol = 'GOOGL'; 
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const stockPriceCurrent = data.c;
        const stockPriceHigh = data.h;
        const stockPriceLow = data.l;
        const stockPriceOpen = data.o;
        
        const stocksList = document.getElementById('stocks-list');
        
        stocksList.innerHTML = `
        <li>${symbol}:
          <ul>
            <li>Current: $${stockPriceCurrent.toFixed(2)}</li>
            <li>High: $${stockPriceHigh.toFixed(2)}</li>
            <li>Low: $${stockPriceLow.toFixed(2)}</li>
            <li>Open: $${stockPriceOpen.toFixed(2)}</li>
          </ul>
        </li>`;

      })
      .catch(error => {
        console.error('Error fetching stock prices:', error);
        document.getElementById('stocks-list').innerHTML = '<p>Failed to load stock prices.</p>';
      });
  }

  
  function fetchCryptoRates() {
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,cardano,solana&vs_currencies=usd';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const bitcoinPrice = data.bitcoin.usd;
        const ethereumPrice = data.ethereum.usd;
        const litecoinPrice = data.litecoin.usd;
        const solanaPrice = data.solana.usd;

  
        const cryptoList = document.getElementById('crypto-list');
        cryptoList.innerHTML = `<li>Bitcoin: $${bitcoinPrice}</li>`;
        cryptoList.innerHTML += `<li>Ethereum: $${ethereumPrice}</li>`;
        cryptoList.innerHTML += `<li>Litecoin: $${litecoinPrice}</li>`;
        cryptoList.innerHTML += `<li>Solana: $${solanaPrice}</li>`;
      })
      .catch(error => {
        console.error('Error fetching crypto rates:', error);
        cryptoList.innerHTML = '<p>Failed to load cryptocurrency rates.</p>';
      });
  }
  