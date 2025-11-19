# Gerador de Carteira Bitcoin

Este é um script simples para gerar uma nova carteira de Bitcoin, incluindo o endereço, a chave privada no formato WIF e a frase de semente (mnemonic).

**Atenção:** Este script é para fins educacionais e de demonstração. Ele gera uma carteira na rede de testes (testnet) do Bitcoin. Não use as chaves geradas para armazenar fundos reais na rede principal (mainnet).

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

## Instalação

1.  Clone este repositório ou baixe os arquivos.
2.  Abra o terminal na pasta do projeto.
3.  Instale as dependências com o seguinte comando:

    ```bash
    npm install
    ```

## Uso

Para gerar uma nova carteira, execute o seguinte comando no seu terminal:

```bash
node src/createWallet.js
```

## Saída

O script irá imprimir no console as seguintes informações:

-   **Endereço:** O seu endereço público de Bitcoin (para receber fundos).
-   **Chave privada (WIF):** A sua chave privada no formato WIF (Wallet Import Format). Mantenha-a segura e nunca a compartilhe.
-   **Seed:** A sua frase de semente (mnemonic) de 12 palavras. Com ela, você pode recuperar sua carteira.

---

# Bitcoin Wallet Generator

This is a simple script to generate a new Bitcoin wallet, including the address, the private key in WIF format, and the seed phrase (mnemonic).

**Warning:** This script is for educational and demonstration purposes only. It generates a wallet on the Bitcoin testnet. Do not use the generated keys to store real funds on the mainnet.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation

1.  Clone this repository or download the files.
2.  Open your terminal in the project folder.
3.  Install the dependencies with the following command:

    ```bash
    npm install
    ```

## Usage

To generate a new wallet, run the following command in your terminal:

```bash
node src/createWallet.js
```

## Output

The script will print the following information to the console:

-   **Address:** Your public Bitcoin address (for receiving funds).
-   **Private key (WIF):** Your private key in WIF (Wallet Import Format). Keep it safe and never share it.
-   **Seed:** Your 12-word mnemonic seed phrase. With it, you can recover your wallet.
