const mongoose = require('mongoose')

const Schema_2010 = mongoose.Schema({

    "NORDEMP": {
        type: String,
    },
    "CIIU3": {
        type: String,
    },
    "TIPOLO": {
        type: String,
    },
    "I1R1C1": {
        type: String,
    },
    "I1R1C2": {
        type: String,
    },
    "I1R2C1": {
        type: String,
    },
    "I1R2C2": {
        type: String,
    },
    "I1R3C1": {
        type: String,
    },
    "I1R3C2": {
        type: String,
    },
    "I1R4C2": {
        type: String,
    },
    "I1R5C1": {
        type: String,
    },
    "I1R5C2": {
        type: String,
    },
    "I1R6C1": {
        type: String,
    },
    "I1R6C2": {
        type: String,
    },
    "I1R7C1": {
        type: String,
    },
    "I1R7C2": {
        type: String,
    },
    "I1R8C2": {
        type: String,
    },
    "I1R9C1": {
        type: String,
    },
    "I1R9C2": {
        type: String,
    },
    "I1R10C1": {
        type: String,
    },
    "I1R10C2": {
        type: String,
    },
    "I1R11C1": {
        type: String,
    },
    "I1R11C2": {
        type: String,
    },
    "I2R1C1": {
        type: String,
    },
    "I2R2C1": {
        type: String,
    },
    "I2R3C1": {
        type: String,
    },
    "I2R4C1": {
        type: String,
    },
    "I2R5C1": {
        type: String,
    },
    "I2R6C1": {
        type: String,
    },
    "I2R7C1": {
        type: String,
    },
    "I2R8C1": {
        type: String,
    },
    "I2R9C1": {
        type: String,
    },
    "I2R10C1": {
        type: String,
    },
    "I2R11C1": {
        type: String,
    },
    "I3R1C1": {
        type: String,
    },
    "I3R1C2": {
        type: String
    }
})

module.exports = mongoose.Model('Model_2010_2011', Schema_2010)