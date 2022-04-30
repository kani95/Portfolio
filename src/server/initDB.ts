import { Sequelize } from 'sequelize';

const db = new Sequelize('postgresql://postgres:123456@localhost:5432/projectdb');
db.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

export default db;