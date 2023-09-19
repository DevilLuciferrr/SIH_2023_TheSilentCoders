// Connect to Ethereum network
const web3 = new Web3(window.ethereum);

// Define the contract ABI and address
const contractAbi = YOUR_CONTRACT_ABI;
const contractAddress = 'YOUR_CONTRACT_ADDRESS';

// Load the contract
const contract = new web3.eth.Contract(contractAbi, contractAddress);

// Get Patients Button Click Event
const getPatientsButton = document.getElementById('getPatientsButton');
const patientList = document.getElementById('patientList');

getPatientsButton.addEventListener('click', async () => {
    try {
        const patients = await contract.methods.getPatients().call();
        patientList.innerHTML = patients.join(', ');
    } catch (error) {
        console.error(error);
    }
});
