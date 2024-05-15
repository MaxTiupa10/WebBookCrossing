/**
 * A number, or a string containing a number.
 * @typedef {Object} CartItem
 * @property {IProduct} product - id of product.
 * @property {number} amount - amount of product.
 */

/**
 * @typedef {Object} ColorObject
 * @property {number} productId - id of product.
 * @property {string} color - string of color.
 */

/**
 * @typedef {Object} ReviewObject
 * @property {number} userId - reviewer id.
 * @property {string} massage - message.
 * @property {number} rate - rate given from user.
 */

/**
 * @typedef {Object} ImageObject
 * @property {string} name - name of image.
 * @property {string} image - byte code of image.
 */

/**
 * Full info of product.
 * @typedef {Object} ISendProduct
 * @property {string} productName - name of product.
 * @property {string} productCategory - category of product.
 * @property {string} productDescription - description of description.
 * @property {string} productFullDescription - full description of description.
 * @property {string} productSku - category of productSku.
 * @property {number} productPrice - price of product.
 * @property {Array.<ImageObject>} images - array with main image of product.
 * @property {string} productColor - string of color
 */

/**
 * Full info of product.
 * @typedef {Object} IFullProduct
 * @property {number} productId - id of product.
 * @property {string} productName - name of product.
 * @property {string} productCategory - category of product.
 * @property {string} productDescription - description of description.
 * @property {string} productFullDescription - full description of description.
 * @property {string} productSku - category of productSku.
 * @property {number} productPrice - price of product.
 * @property {number} averageRate - average rate of product.
 * @property {number} amountOfReviews - amount of reviews of product.
 * @property {Array.<ImageObject>} images - array with main image of product.
 * @property {Array.<ColorObject>} productColor - array with main same product but different colors.
 * @property {Array.<ReviewObject>} productReviews - array product reviews.
 */

/**
 * A brief info of product object
 * @typedef {Object} IProduct
 * @property {number} productId - id of product.
 * @property {Array.<ImageObject>} images - array with main image of product.
 * @property {string} productName - name of product.
 * @property {string} productCategory - category of product.
 * @property {number} productPrice - price of product.
 */

/**
 * Type for modal handlers
 * @typedef {Object} modalHandler
 * @property {boolean} modalHandler.isOpen
 * @property {() => void} modalHandler.open
 * @property {() => void} modalHandler.close
 */
