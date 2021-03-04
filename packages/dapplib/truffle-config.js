require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inner enroll bundle food finger cram sister coconut harvest cover army ghost'; 
let testAccounts = [
"0x26636a74b83f7ff3cbb0b60c5b1c7a3607d0f55da73674175b3e6725048435b2",
"0x5274f36340d6272036d8576b051e95b65c67df870db219cf08f66176eef89d06",
"0x78951230c0685eacb2910408d701f6bcea658e0c6998992373f1d97bce6d5a7e",
"0xe472b22a1e448ef8d0554b64262a7c39b6fa2b0b655666018d6b0c5c28fb5a3c",
"0x4eb6bde490b8a47d26b37737836a484ea6ec8140a7396761414d8eb38927a925",
"0xfca838a583d72ed43d01cede15c21d9f5dd518ccae963b0cc362247f91208c50",
"0x1635542803f02219968cedcff9d6d026b42f2ed6db3588186d81652000eea8da",
"0xfb12ea9e2804e2ad1964878f525631cd8ec85012b7e6246df3adbf1e4213c694",
"0x44122188c0cd9e63fb0b12988d1787403c73c5935f66bf29dbbfc98a0c7b0183",
"0x902c413f9bfacdeba1d8ce411ec843456cfbcfba8aaa88f0e51c999e7e3a6222"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

