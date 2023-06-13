# E-commerce Back End 

## Description

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Create a file called `.env` in the root directory and fill in the following variables:
- `DB_USER=[your mysql username]`
- `DB_PASSWORD=[your mysql password]`
- `DB_NAME=[the name of the database]`
- `PORT=[the port you want to use for the server]`

## Usage

Watch this video for a detailed walkthrough:
[Walk Through](https://drive.google.com/file/d/108cMazW0RWq1OmAtvyZowSdJy_uQ1dym/view)

Instructions for using the app:
- `cd` into the repository and in the command line enter `node server`
- I suggest using an application like postman for handling api requests.
    - The endpoints are `/api/products` for products, `/api/categories` for categories, and `/api/tags` for tags.
    - Routes exist for `Get` all, `GET` one, `POST`, `PUT`, and `DELETE`
        - You can also add an (`/:id`) to the end of the `GET` one, `PUT`, and `DELETE`
## Credits

packages used:
- [mysql2](https://www.npmjs.com/package/mysql2)
- [sequelize](https://www.npmjs.com/package/sequelize)
- [express](https://www.npmjs.com/package/express)
- [dotenv](https://www.npmjs.com/package/dotenv)

The Starter Code was provided by UC Berkeley Coding Boot Camp:
- Folder/file structure
- `connection.js`
- `schema.sql`
- The code within `models` except for the model column definitions and associations
- The outermost portions of the routes, the entirety of the `POST` and `PUT` routes for products, `/routes/index.js`, and `/routes/api/index.js`
- All contents of `/seeds/`
- `package.json`
- Most of `server.js` except the sequelize lines
## License 

MIT License