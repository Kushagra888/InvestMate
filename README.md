# InvestMate

**InvestMate** is a Chrome extension designed to provide real-time tracking of stock and cryptocurrency prices. It delivers up-to-date financial data directly in your browser, making it easy to monitor market movements and stay informed about your investments.

## Features

- **Real-Time Stock Prices**: Fetches and displays current, high, low, and opening prices for selected stocks.
- **Cryptocurrency Rates**: Provides up-to-date prices for popular cryptocurrencies like Bitcoin, Ethereum, Litecoin, and Solana.
- **Refresh Button**: Allows users to manually refresh the data with a single click.
- **User-Friendly Interface**: Simple and clean design for easy viewing of financial data.

## Technologies Used

- **HTML**: Structure and layout of the popup interface.
- **CSS**: Styling for the popup to ensure a visually appealing and responsive design.
- **JavaScript**: Handles data fetching and dynamic updates to the popup.
- **Finnhub API**: Provides stock price data.
- **CoinGecko API**: Provides cryptocurrency price data.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Kushagra888/investmate.git
2. **Load the Extension in Chrome**:
   - Open Chrome and go to chrome://extensions/
   - Enable "Developer mode" by toggling the switch in the top right corner.
   - Click on "Load unpacked" and select the directory where you cloned the repository.
3. **Usage**:
   - Click on the InvestMate icon in your Chrome toolbar to open the popup.
   - View real-time stock and cryptocurrency prices.
   - Click the refresh icon to update the prices manually.



## File Structure

Here's a brief overview of the key files and their purposes in the InvestMate project:

- **`manifest.json`**: 
  - Configuration file for the Chrome extension.
  - Defines the extension's name, version, description, permissions, and other settings.
  
- **`popup.html`**: 
  - Contains the HTML structure for the extension's popup interface.
  - Includes elements for displaying stock and cryptocurrency data, as well as a refresh button.

- **`popup.css`**: 
  - Provides the styling for the popup.
  - Ensures a clean and responsive design, with styles for various elements like headers, lists, and the refresh icon.

- **`popup.js`**: 
  - JavaScript code responsible for fetching and displaying real-time stock and cryptocurrency prices.
  - Includes functions to retrieve data from APIs and update the popup content dynamically.
  
- **`icons/logo.png`**: 
  - The icon used for the extension.
  - Placed in the `icons` folder and specified in the `manifest.json` file.
 

## Customizing Stock Symbols

InvestMate allows you to customize which stock is displayed by modifying the stock symbol in `popup.js`. To change the stock:

1. Open `popup.js` in a text editor.
2. Locate the line where the `symbol` variable is defined:
   ```javascript
   const symbol = 'GOOGL';
   

## API Keys

To use the APIs for fetching financial data, you need to replace the placeholder keys in `popup.js` with your own:

- **Finnhub API**:
  - Used for fetching stock prices.
  - Obtain an API key by signing up at [Finnhub](https://finnhub.io/).

- **CoinGecko API**:
  - Provides cryptocurrency prices.
  - No API key is required as the API is public.

## Contributing

We welcome contributions to improve InvestMate. If you have suggestions, bug reports, or code improvements, please:

- Open an issue in the [GitHub repository](https://github.com/Kushagra888/investmate/issues).
- Submit a pull request with your proposed changes.

## License

This project is licensed under the MIT License. You can find more details in the [LICENSE](LICENSE) file.

## Contact

For any questions or feedback, please contact me at [kushagrachavel0@gmail.com](mailto:kushagrachavel0@gmail.com).


