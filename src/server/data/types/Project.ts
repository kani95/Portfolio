import seq from 'sequelize';
import db from './../../initDB.js';

const Project = db.define(
    'project', 
    {
        project_id:{
            type: seq.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: seq.STRING,
            allowNull: false,
        },
        short_description: {
            type: seq.STRING,
            allowNull: false,
        },
        long_description: {
            type: seq.STRING,
            allowNull: false,
        },
    }, 
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });

export default Project;