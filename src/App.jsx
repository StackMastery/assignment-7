import { useState } from "react";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import { ToastContainer } from 'react-toastify'
import ShowcasePlayer, { TabWithTitle } from "./components/ShowcasePlayer";

const App = () => {
  // Ammount Of Coin
  const [coinvalue, setCoinValue] = useState(0)
  // tabs
  const [tab, setTab] = useState(true)
  // Player Data
  const [playersData, setPlayersData] = useState([])
  const [selectedPlayers, setSelectedPlayers] = useState([])

  return (
    <>  
      {/* Header */}
      <Header 
        coinValue={coinvalue} 
        updateCoinState={setCoinValue}
      />
      {/* Hero Section */}
      <HeroBanner 
        coinvalue={coinvalue} 
        setCoinValue={setCoinValue}
      />
      {/* Tab */}
      <TabWithTitle 
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
        setTab={setTab} 
        tab={tab}
      />
      {/* Players */}
      <ShowcasePlayer 
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
        tab={tab}
        setTab={setTab}
        coinValue={coinvalue}
        setCoinValue={setCoinValue}
        playersData={playersData} 
        setPlayersData={setPlayersData} 
      />
      {/* Toastify */}
      <ToastContainer />
    </>
  );
}

export default App;
