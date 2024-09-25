/**
 * @swagger
 * tags:
 *   name: City
 *   description: city endpoint
 */

/**
 * @swagger
 * /city:
 *  get:
 *    summary: Return the citys list
 *    tags: [City]
 *    responses:
 *      200:
 *        description: List of citys
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/City'
 *      400:
 *        description: Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /city/{id}:
 *  get:
 *    summary: Return a city
 *    tags: [City]
 *    parameters:
 *      - $ref: '#/components/parameters/cityId'
 *    responses:
 *      200:
 *        description: city was found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/City'
 *      404:
 *        description: city not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *      400:
 *        description: Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /city:
 *  post:
 *    security:              
 *      - bearerAuth: [] 
 *    summary: Create a new city
 *    tags: [City]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/NewCity'
 *    responses:
 *      200:
 *        description: city successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/City'
 *      400:
 *        description: Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /city/{id}:
 *  put:
 *    security:              
 *      - bearerAuth: [] 
 *    summary: Update a city
 *    tags: [City]
 *    parameters:
 *      - $ref: '#/components/parameters/cityId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/NewCity'
 *    responses:
 *      200:
 *        description: city successfully updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/City'
 *      404:
 *        description: city not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *      400:
 *        description: Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /city/{id}:
 *  delete:
 *    security:              
 *      - bearerAuth: [] 
 *    summary: Delete a city
 *    tags: [City]
 *    parameters:
 *      - $ref: '#/components/parameters/cityId'
 *    responses:
 *      200:
 *        description: city was deleted
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/City'
 *      404:
 *        description: city not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *      400:
 *        description: Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     City:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: Auto-generated id
 *         name:
 *           type: string
 *           description: city name
 *       required:
 *         - name
 *     NewCity:
 *       type: object
 *       properties:
 *         id_country:
 *           type: number
 *           description: pais al que pertenece la ciudad
 *         name:
 *           type: string
 *           description: city name
 *       required:
 *         - name
 *         - id_country
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Error message
 *   parameters:
 *     cityId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: city id
 */
