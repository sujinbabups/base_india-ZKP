# ZERO-KP VERIFY

Zero-KP Verify is a cutting-edge web-based application that utilizes zero-knowledge proof (ZKP) technology to securely verify identities without revealing sensitive personal information. This innovative solution ensures privacy by allowing users to prove specific attributes, such as age, name, or address, without exposing the actual data. By eliminating traditional data-sharing methods, Zero-KP Verify enhances security and trust in digital interactions, making it ideal for privacy-prioritized use cases like financial services, online voting, and access control systems.

This version of Zero-KP Verify extends its capabilities by utilizing **Base Layer 2 (L2) blockchain** for scalability, faster transaction processing, and reduced costs, ensuring optimal performance while maintaining security and privacy through ZKP.

# 🚀 Features  

- **Customizable Verification Parameters**: Verifiers can request specific identity attributes (e.g., name, age, address) for verification. Users (provers) can confirm these without revealing their actual data, maintaining privacy with zero-knowledge proofs.
- **QR Code-Based Verification**: Users can scan a QR code to easily initiate identity verification, especially useful for proximity-based interactions such as in-person events.
- **DigiLocker Integration**: Provers can connect their DigiLocker account to supply verifiable credentials (e.g., government-issued IDs) without exposing any sensitive data, using zero-knowledge proofs.
- **Base Layer 2 Blockchain Integration**: Leverages the scalability and efficiency of **Base L2** to enhance the performance of ZKP-based identity verifications, reducing transaction costs and time.
- **Secure and Private**: With advanced cryptography and zero-knowledge proofs, Zero-KP Verify ensures that sensitive data is never exposed during the verification process, providing a secure solution for identity validation.

# 🛠️ Technologies Used  

- **Solidity**: For smart contract development on the **Base Layer 2 blockchain**.
- **Circom**: Used for constructing arithmetic circuits to support zk-SNARKs for zero-knowledge proofs.
- **SnarkJS**: Tools for generating, verifying, and interacting with zk-SNARKs.
- **Base L2 Blockchain**: This project is built on Base L2 for scalability and efficiency in handling identity verification transactions.
- **React**: Building the dynamic user interface.
- **Vite**: For fast, efficient development.
- **Tailwind CSS**: For responsive and aesthetically pleasing UI design.
- **Ethers.js**: Enables interaction with the Base Layer 2 blockchain.  


# 📦 Getting Started  

**Prerequisites**  

- Node.js  
- npm (usually installed with Node.js)  
- MetaMask wallet (with Base network configured)

**Installation**  
1. Clone the repository:
   ```
   git clone https://github.com/sujinbabups/bese_india-ZKP.git
   
   cd Hackathon_ZKP
   ```
3. Install dependencies in UI and Backend
   ```
   cd ui npm install
   cd backend npm install
   ```
5. Run Command in both UI and Backend Folders
   ```
   cd ui npm run dev
   cd backend npm run dev
   ```
# 📜 License  
This project is licensed under the MIT License.   

# Contributions  
Contributions are welcome! Please fork the repository and submit a pull request with your proposed changes.
