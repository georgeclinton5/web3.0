import React, {useState, useEffect} from 'react';
import { ethers } from 'ethers';
import { contractAddress, contractABI } from '../utility/constants';

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({signer})
    console.log(transactionContract)

    return transactionContract
}

export const transactionContext = React.createContext();

export const TransactionProvider = ({children}) => {
    const [ connectedAccount, setConnectedAccount ] = useState('');
    const [ transactionCount, setTransactionCount ] = useState(0);
    const [ formData, setFormData ] = useState({addressTo: '', amount: ''});
    const [ isLoading, setIsLoading ] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name] : value
        }))
    }
    
    const checkIfWalletIsConnected = async () => {
        try {
            if(!ethereum) return alert('Please Install Metamask Wallet');

            const account = await ethereum.request({method: 'eth_accounts'});
            console.log(account)

            if(account.length){
                setConnectedAccount(account[0])
            }
            else{
                console.log("No Account Found")
            }
        } 
        catch (error) {
            console.log(error);
            throw new Error("No Ethereum")
        }
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert('Please Install Metamask Wallet');

            const account = await ethereum.request({method: 'eth_requestAccounts'});
            setConnectedAccount(account[0])
        } 
        catch (error) {
            console.log(error);
            throw new Error("No Ethereum")
        } 
    }

    const sendTransaction = async () => {
        try {
            if(!ethereum) return alert('Please Install Metamask Wallet');

            const { addressTo, amount } = formData;
            const transactionContract = getEthereumContract();
            const parsedAmt = ethers.utils.parseEther(amount);
            
            if(amount.length){
                setIsLoading(true); 

                await ethereum.request({
                    method: 'eth_sendTransaction',
                    params: [{
                        from: connectedAccount,
                        to: addressTo,
                        gasLimit: '0x186A0', 
                        gas: '0x5208', //2100 GWEI
                        value: parsedAmt._hex,
                        // nonce: nonce || undefined,
                    }]
                });

                console.log("woooooo")
                setIsLoading(false); 
                console.log({isLoading})
                
                // const transactionHash = await transactionContract.AddToBlockchain(addressTo, parsedAmt, [] , {
                //     gasLimit: '0x186A0',
                //     // nonce: nonce || undefined,
                // });
                // console.log({transactionHash})

                // 
                // console.log(`Loading - ${transactionHash.hash}`);   
                // await transactionHash.wait();

                // console.log(`Success - ${transactionHash.hash}`);
                // setIsLoading(false); 

                // const transactionCount = await transactionContract.getTransactionCount();
                // setTransactionCount(transactionCount);
            }
        } 
        catch (error) {
            console.log(error);
            throw new Error("No Ethereum")
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return(
        <transactionContext.Provider value={{ connectWallet, connectedAccount, handleChange, formData, sendTransaction, isLoading }}>
            {children}
        </transactionContext.Provider>
    )
};