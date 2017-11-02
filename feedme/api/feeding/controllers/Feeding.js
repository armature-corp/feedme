'use strict';

/**
 * Feeding.js controller
 *
 * @description: A set of functions called "actions" for managing `Feeding`.
 */

module.exports = {

  /**
   * Retrieve feeding records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.feeding.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a feeding record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    const data = await strapi.services.feeding.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an feeding record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.feeding.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an feeding record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.feeding.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an feeding record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.feeding.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
