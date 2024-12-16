const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

async function seedDatabase() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/dronesDB');
    const createdDrones = await Drone.create(drones);
    console.log(`Seeded ${createdDrones.length} drones.`);
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding the database:', error);
  }
}

seedDatabase();
