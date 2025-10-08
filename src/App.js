import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './WeatherBox';
function App() {
  return (
    <>
      <div className="weather-animated-bg">
        <div className="animated-cloud" style={{top: '7%'}}><div className='cloudtop'></div></div>
        <div className="animated-cloud2" style={{top: '50%'}}><div className='cloudtop'></div></div>
        <div className="animated-cloud1" style={{top: '90%'}}><div className='cloudtop'></div></div>
      </div>
      <div className="weather-api-container">
        <div className="weather-api-title">Weather API</div>
        <WeatherBox />
      </div>
    </>
  );
}

export default App;
