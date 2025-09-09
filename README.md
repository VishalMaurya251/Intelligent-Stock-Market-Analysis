
# 🎯 Smart Trading Assistant

## ✅ Project Overview
An advanced web application designed to assist users in analyzing **Stocks, Indices (NIFTY50), and Forex Pairs (USDINR)** by providing:
- Interactive price charts with custom technical indicators (Swing Structure - BOS, CHoCH, Fair Value Gaps, Order Blocks).
- Fundamental analysis (PE Ratio, Market Cap, Sector Information).
- Latest market news sentiment analysis.
- Buy / Hold / Sell / Avoid recommendations.
- Downloadable PDF reports containing detailed analysis.

---

## ⚙️ System Architecture
1. User enters a Stock/Forex symbol in the frontend.
2. Backend performs:
    - Price Data Fetching (Yahoo Finance API).
    - Fundamental Data Retrieval (Screener.in API).
    - Market News Sentiment Fetching (NewsAPI).
3. Applies Price Action Indicators Logic:
    - Swing Structure (BOS/CHoCH).
    - Fair Value Gaps (FVG).
    - Order Block detection.
4. Calculates Entry/Exit Recommendations.
5. Saves results in MongoDB.
6. Generates PDF Analysis Report.
7. Returns structured results + interactive charts to frontend.

---

## 🚀 Installation & Setup

### 1️⃣ Install Backend Dependencies
```bash
cd backend
pip install -r requirements.txt
```

### 2️⃣ Install Frontend Dependencies
```bash
cd frontend
npm install
```

---

### 3️⃣ Configure `.env`
Create a `.env` file and add your credentials:
```env
API_KEY=YOUR_NEWSAPI_KEY
DB_URI=mongodb://localhost:27017
```

---

### 4️⃣ Run Backend Server
```bash
cd backend
python app.py
```
Backend API available at: `http://localhost:5000`

---

### 5️⃣ Run Frontend App
```bash
cd frontend
npm start
```
Frontend available at: `http://localhost:3000`

---

## ⚡ API Example

- **POST** `/api/analyze`

    - Request Body:
    ```json
    {
      "symbol": "NIFTY50"
    }
    ```

    - Example Response:
    ```json
    {
      "price_data": { ... },
      "fundamentals": { "PE Ratio": "28.5", "Market Cap": "1.5T" },
      "technicals": { "BOS": "Detected", "FVG": "Found" },
      "news": [{ "title": "Market bullish today", "url": "https://news.com/article" }],
      "recommendation": "BUY",
      "report_url": "/reports/NIFTY50_analysis.pdf"
    }
    ```

---

## ✅ Deployment

- Backend → Heroku / AWS EC2
- Frontend → Netlify / Vercel
- Database → MongoDB Atlas (Cloud)

---

## 💡 Future Features (Optional Enhancements)

- User Authentication to save analysis history.
- Push Notification Alerts for signals.
- Advanced Machine Learning for predictive analytics.
- Multi-language Interface Support.

---

## 📚 Resources

- 📈 [TradingView Charting Library](https://www.tradingview.com/HTML5-stock-forex-bitcoin-charting-library/)
- 💾 [Alpha Vantage API Documentation](https://www.alphavantage.co/documentation/)
- 📰 [NewsAPI Documentation](https://newsapi.org/docs/get-started)

---

## ✅ Conclusion
This Smart Trading Assistant provides an easy-to-use solution for analyzing stocks and forex pairs without requiring users to learn technical programming. It offers interactive charts, actionable recommendations, and comprehensive analysis reports.

---

## 📄 License
MIT License
