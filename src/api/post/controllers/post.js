'use strict';

/**
 *  post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) => ({
  create(ctx) {
    ctx.request.body = {
      data: {
        ...ctx.request.body.data,
        author: ctx.state.user.id
      }
    }
    ctx.state.auth = false
    return super.create(ctx)
  }
}));
