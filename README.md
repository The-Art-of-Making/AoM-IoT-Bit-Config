# AoM IoT Bit SD Config

A simple, cross-platform GUI to generate the `secrets.txt` config file for the AoM IoT Bit.

Created using Tauri and React.

## Prerequisites

1. Rust and Cargo

   See [https://rustup.rs/](https://rustup.rs/) for installation instructions

2. Node.js and npm

   See [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for installation instructions

## Getting Started

1. Clone the repository

   `git clone https://github.com/The-Art-of-Making/AoM-IoT-Bit-SD-Config.git`

2. Install the dependencies

   `npm install .`

3. Start the live development server

   `npm run tauri dev`

## Creating a Build

To build the project, run

`npm run tauri build`

This will create a build in `src-tauri/target/release` for your system's OS.

Note: If you are on a Debian-based system such as Ubuntu, you may need to install additional packages with the following command in order to build the project for your system

`sudo apt update && sudo apt install -y libglib2.0-dev libgtk-3-dev libsoup2.4-dev libjavascriptcoregtk-4.0-dev libwebkit2gtk-4.0-dev`
