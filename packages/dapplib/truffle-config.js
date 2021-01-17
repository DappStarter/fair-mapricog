require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food stock return situate cluster hunt define army gentle'; 
let testAccounts = [
"0x6e2065ceea1b64628d624745207bb68168c34e7ca37a2b6cf03907e7c2f83257",
"0xd2b6cce15ee1104d1cde274e0c6f8bbdaea13129f9ceecaa8f70a55648fd4d41",
"0xa12861203fedc754a152141c39d72b3b14da848fd69544d9f293cc4d21222f90",
"0x674590602307f8fcadd66c33ad3bd48a2a6a00d9624b590c1794417e44dfc023",
"0xf6cf9b0157f55589937fd8fea960ce98423b2ccd02895721a8d723dadeff1f43",
"0xaf3ef0ae3b85b130234ef7373bf107d3e1d4c3f803ad16b2a5ad47b7f47eb8ec",
"0x1fb2f8563a0b0b8b06635da39e2d904935b9fd5a914e7494d14d85f3d2513d9d",
"0x50cb5a0f14de4be394fa52715b2944164ae57cf16445e4ea4a6c5cca2cef6ed7",
"0xd2dd531ca4b06a7918133485e26cc874d2f1dbfa01e262a239238550467ff52a",
"0xcd145b85a7c5198b48894f2b4809cb7b76423962e3342a73700282a134e8da14"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
