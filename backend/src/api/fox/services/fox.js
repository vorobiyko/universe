'use strict';

/**
 * fox service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fox.fox');
