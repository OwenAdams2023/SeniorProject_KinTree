const db = require('../db/knex');

const Relationships = {
    addRelationship: async (data) => {
        return db('relationships').insert(data);
    },
  
    getRelationships:async (personId) => {
        return db('relationships').where('person1_id', personId).orWhere('person2_id', personId);
    },

    filterBySide: async(personId, side) => {
        return db('relationships').where('person1_id', personId).andWhere('side',side);
    },

    getRelationshipbyId: async (personId) => {
        return db('relationships').where('person1_id', personId).andWhere('person2_id', personId);
    },

    getRelationshipByUser: async (userId) => {
        return db('relationship').where('userId', userId).select('*');
    },

    getRelationshipByOtherUser: async (userId) => {
        return db('relationship').whereNot('userId', userId).select('*');
    },

    deleteByUser: async (userId) => {
        return db('relationship').where({userId}).del();
    }



};

module.exports = Relationships;
