'use strict';

/**
 * dj service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dj.dj');
