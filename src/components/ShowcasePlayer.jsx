import { useEffect, useState } from "react";
import PlayerCards from "./ui/PlayerCards";
import Button from "./ui/Button";
import DeleteIcon from "../assets/icons/delete.svg"

const ShowcasePlayer = ({playersData, setPlayersData, setCoinValue, coinValue, setTab,  tab, selectedPlayers, setSelectedPlayers}) => {

    useEffect(() => {
        fetch('/database/players.json')
            .then(res => res.json())
            .then(data => setPlayersData(data.players))
    }, [])

    console.log(selectedPlayers)

    return (
        <>
            <section className="flex justify-center py-5">
                <div className="inline-flex xl:p-0 p-5 w-1"> 
                    <div className={`${tab ? 'grid' : 'hidden'} grid-cols-12 w-full gap-5`}>
                        { playersData.map((item, index) => (
                            <PlayerCards 
                                selectedPlayers={selectedPlayers}
                                setSelectedPlayers={setSelectedPlayers}
                                setCoinValue={setCoinValue}
                                coinValue={coinValue}
                                key={index}
                                id={item.id}
                                name={item.name}
                                handtype={item.rating.batting_style}
                                region={item.country}
                                role={item.role}
                                price={item.price}
                                image={item.image_url}
                            />
                        ) )}
                    </div>
                    <div className={`${tab ? 'hidden' : 'block'} w-full space-y-5`}>
                        {
                            selectedPlayers.map((item, index) => (
                                <div key={index} className="p-5 border rounded-xl flex justify-between items-center">
                                    <div className="flex items-center gap-5">
                                        <img className="object-cover h-[90px] rounded-xl" width={90} src={item.image} alt={item.name} />    
                                        <div className="space-y-1">
                                            <p className="text-xl font-semibold text-black">{item.name}</p>
                                            <p>{item.handtype}</p>
                                        </div>
                                    </div>
                                    <div 
                                        onClick={() =>{
                                          setSelectedPlayers(selectedPlayers.filter(player => player.id !== item.id)) 
                                        }}
                                        className="mr-5 cursor-pointer">
                                        <img src={DeleteIcon} alt="Delet" />
                                    </div>
                                </div>
                            ))
                        }
                        <div
                            onClick={() => {
                                setTab(true)
                            }}
                        >
                            <Button className={'border-black mt-10'} name={'Add More Player'}/>
                        </div>
                    </div>
                </div>
            </section>
        </> 
    );
}

export default ShowcasePlayer;

export const TabWithTitle = ({setTab, tab, selectedPlayers, setSelectedPlayers}) => {

    return (
        <>
            <section className="flex justify-center pt-6">
                <div className="inline-flex items-center justify-between w-1 p-5 xl:px-0 flex-col sm:flex-row gap-3">
                    <h2 className="text-2xl font-bold">{tab ? 'Available Players' : `Selected Players (${selectedPlayers.length}/6)`}</h2>
                    <div className="flex gap-0">
                        <button 
                            onClick={() => {
                                setTab(true)
                            }}
                            className={`${tab ? 'font-bold bg-primary-1' : ''} px-5 py-2 rounded-xl rounded-r-none border border-r-0`}
                            >Available
                        </button>
                        <button
                            onClick={() => {
                                setTab(false)
                            }}
                            className={`${tab ? '' : 'font-bold bg-primary-1'} px-5 py-2 rounded-xl rounded-l-none border border-l-0`}
                        >Selected ({selectedPlayers.length})</button>
                    </div>
                </div>
            </section>
        </>
    );
}
