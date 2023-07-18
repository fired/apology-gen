# Apology Generator App

This is a simple Express.js server that uses the OpenAI's GPT-3.5-turbo API to generate apology messages. Users can request an apology for a specified name and reason.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contribute](#contribute)
- [License](#license)

## Installation

Before you start, ensure you have Node.js and npm installed on your machine.

1. Clone the repository:
    ```sh
    git clone https://github.com/kuc/apology-gen.git
    ```
2. Change the working directory:
    ```sh
    cd apology-generator-app
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Usage

Run the application:
```sh
npm start
```
This will start the server on the port specified in your environment variables (or port 3000 as default).

To generate an apology, make a GET request to the /apology endpoint with name and reason query parameters. For example:
```sh
http://localhost:3000/apology?name=John&reason=forgetting%20his%20birthday
```
This will return an apology message generated by OpenAI's GPT-3.5-turbo model.

## Environment Variables

PORT: The port number on which the server will run (default: 3000).

## License
   [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
   
   This project is licensed under the GNU General Public License v3.0. See the [LICENSE](https://github.com/kuc/apology-gen/blob/main/LICENSE) file for details.
