import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #0D3FBF;
    color: white;
  }

  * {
    box-sizing: border-box;
  }

  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .header {
    background-color: white;
    color: #0D3FBF;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
  }

  .logo {
    height: 80px;
    width: auto;
    margin-left: 20px;
  }

  .nav {
    display: flex;
    gap: 10px;
  }

  .nav-button {
    background-color: #F33A6A;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .nav-button:hover {
    background-color: #e32e5c;
  }

  .main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 120px; 
  }

  .welcome-text {
    font-size: 36px;
    font-weight: bold;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .subtitle {
    font-size: 24px;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 40px;
  }

  .applied-job-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .applied-job-item {
    background-color: #F33A6A;
    color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: transform 0.3s;
  }

  .applied-job-item:hover {
    transform: translateY(-5px);
  }

  .job-title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .job-company,
  .job-location,
  .job-applicants,
  .job-stage {
    font-size: 18px;
  }

  .footer {
    background-color: #0D3FBF;
    color: white;
    padding: 20px;
    text-align: left;
    font-size: 18px;
  }

  .footer-separator {
    width: 80%;
    margin: 0 auto;
    border: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
  }

  .footer-columns {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 20px; 
  }

  .footer-column {
    flex: 1;
    padding: 10px;
    max-width: 300px; 
  }

  .footer-column h3 {
    font-size: 18px;
    margin-bottom: 10px;
    white-space: nowrap;
  }

  .footer-column ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  .footer-column li {
    margin: 10px 0;
  }

  .footer-bottom {
    text-align: center;
    margin-top: 20px;
  }

  .footer-bottom p {
    margin: 0;
    font-size: 18px;
  }

  
`;

export default GlobalStyle;
