import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Item from './components/Item'
import model3 from './assets/model-3-tesla.jpeg'
import modelS from './assets/model-s-tesla.jpeg'
import modelX from './assets/model-x-tesla.jpeg'
import modelY from './assets/model-y-tesla.jpeg'
import solarRoof from './assets/solarroof-tesla.jpeg'
import solarPanel from './assets/solar-panels-tesla.jpeg'

function App() {
  return (
    <div className="App">      
      <Header />
      <div className="app__itemsContainer">
      <Item
          title='Model 3'
          desc='Schedule a Touchless Test Drive'
          descLink=''
          backgroundImg={model3}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='EXISTING INVENTORY'
          rightBtnLink=''
          twoButtons='true'
          car='car'
          id="modelS"
          first
        />
        <Item 
          title='Model Y'
          desc="Money-back Gaurantee"
          descLink=''
          backgroundImg={modelX}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item 
          title='Model S'
          desc="Money-back Gaurantee"
          descLink=''
          backgroundImg={modelS}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item 
          title='Model X'
          desc="Money-back Gaurantee"
          descLink=''
          backgroundImg={modelY}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item 
          title='Solar Panels'
          desc="Money-back Gaurantee"
          descLink=''
          backgroundImg={solarRoof}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt='EXISTING INVENTORY'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item 
          title='Solar Roof'
          desc="Money-back Gaurantee"
          descLink=''
          backgroundImg={solarPanel}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Footer />
      </div>

    </div>
  );
}

export default App;
