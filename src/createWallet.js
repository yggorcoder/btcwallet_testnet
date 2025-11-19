// Importando dependências
import { generateMnemonic, mnemonicToSeedSync } from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english.js";
import { HDKey } from "@scure/bip32";
import bs58check from "bs58check";
import * as bitcoin from "bitcoinjs-lib";

function privateKeyToWIF(privateKey, network) {
  const payload = new Uint8Array(1 + privateKey.length + 1);
  payload[0] = network.wif;
  payload.set(privateKey, 1);
  payload[payload.length - 1] = 0x01;
  return bs58check.encode(payload);
}

// Definir a rede
const network = bitcoin.networks.testnet; // .bitcoin - rede principal - mainnet

// Derivação de carteiras HD
const derivationPath = "m/49'/1'/0'/0/0";

// Criando o mnemonic para a seed (palavras de senha)
const mnemonic = generateMnemonic(wordlist);
const seed = mnemonicToSeedSync(mnemonic);

// Criando a raiz da carteira HD
const root = HDKey.fromMasterSeed(seed, network.bip32);
const node = root.derive(derivationPath);
if (!node.privateKey || !node.publicKey) {
  throw new Error("Falha ao derivar par de chaves");
}

const btcAddress = bitcoin.payments.p2pkh({ pubkey: node.publicKey, network }).address;
const wif = privateKeyToWIF(node.privateKey, network);

console.log("Carteira gerada");
console.log("Endereço:", btcAddress);
console.log("Chave privada (WIF):", wif);
console.log("Seed:", mnemonic);






