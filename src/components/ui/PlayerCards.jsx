import UserIcon from '../../assets/icons/user.svg'
import Flagicon from '../../assets/icons/flag.svg'
import { toast , Bounce } from 'react-toastify';

const PlayerCards = ({image, name, role, price, region, handtype, coinValue, setCoinValue, setSelectedPlayers , selectedPlayers, id}) => {

    const showToast = (msg, mode) => {
        
        let modeOfToast = toast.success;
    
        if (mode === 'error') {
            modeOfToast = toast.error;
        } else if (mode === 'info') {
            modeOfToast = toast.info;
        } else if (mode === 'warn') {
            modeOfToast = toast.warn;
        }

        modeOfToast(`${msg}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4 border p-6 rounded-xl space-y-6">
            <img
                loading="lazy"
                className="rounded-xl h-[240px] object-cover w-full bg-stone-200"
                src={image}
                alt="Players Image"
            />

            <div className="flex items-center gap-6 text-xl font-semibold">
                <img
                    width={30}
                    src={UserIcon}
                    alt="user Icon"
                    className="rounded-full object-cover"
                />
                {name || 'Not Found'}
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <img src={Flagicon} alt="Flag" />
                    <p className="text-[#464646]">{region || 'N/A'}</p>
                </div>
                <span className="bg-slate-100 py-2 px-4 rounded-md">
                    {role}
                </span>
            </div>

            <span className="w-full h-[1px] bg-slate-200 flex"></span>

            <div className="flex flex-col gap-4">
                <p className="font-semibold">Rating</p>

                <div className="flex justify-between">
                    <p className="font-semibold">Left Hand Bat</p>
                    <p className="text-stone-600">{handtype || 'N/A'}</p>
                </div>

                <div className="flex justify-between items-center">
                    <p className="font-semibold">Price: ${price || '0'}</p>
                    <button
                        onClick={() => {
                            // Check if the player is already selected
                            if (selectedPlayers.find(player => player.id === id)) {
                                showToast(`${name} is already selected`, 'warn');
                            }
                            else if (selectedPlayers.length >= 6) {
                                showToast('Maximum players are selected', 'warn');
                            }                            
                            else if (coinValue >= price ) {
                                // Proceed to select the player if they are not already selected
                                showToast(`${name} Selected Successfully`, 'success');
                                setCoinValue(coinValue - price);
                                setSelectedPlayers([...selectedPlayers, { id, name, handtype, image }]);
                            } else {
                                showToast(`You Need $${price} To Select ${name}`, 'error');
                            }
                        }}
                        className="py-[6px] px-4 rounded-lg border"
                    >
                        Choose Player
                    </button>

                </div>
            </div>
        </div>
    );
};

export default PlayerCards;
