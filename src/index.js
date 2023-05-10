import app from './app.js';
import {sequelize} from './database/database.js';

async function main() {
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch(error){
        console.error('Unable to connect to the database:', error);
    }
    await app.listen(3000, () => {
        // console.log('Config', sequelize.config);
        console.log('Server is running on port 3000');
    });
}

main();
