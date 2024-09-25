/**
 * @swagger
 * components:
 *   schemas:
 *     Country:   
 *       type: object 
 *       properties:
 *         id: 
 *           type: number
 *           description: Auto-generated id 
 *         name: 
 *           type: string
 *           description: Country name
 
 *       required:
 *         - name
 *     NewCountry:   
 *       type: object 
 *       properties:
 *         name: 
 *           type: string
 *           description: Country name
 *       required:
 *         - name 
 *     ResourceNotFound:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: Resource not found   
 *   parameters:
 *     countryId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: Country id  
 */
 
 /**
 * @swagger
 * tags:
 *   name: Country
 *   description: Country endpoint
 */

 /**
 * @swagger
 * /country/{id}:
 *  get:
 *      summary: Return a country
 *      tags: [Country]
 *      parameters:
 *        - $ref: '#/components/parameters/countryId'
 *      responses:
 *        200:
 *          description: Country was found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Country'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */
 
 /**
 * @swagger
 * /country:
 *  get:
 *      summary: Return the countrys list
 *      tags: [Country]
 *      responses:
 *        200:
 *          description: List of countrys
 *          content:
 *            application/json: 
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Country'  
 */

 /**
 * @swagger
 * /country:
 *  post:
 *      security:              
 *        - bearerAuth: [] 
 *      summary: Create a new country
 *      tags: [Country]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewCountry'
 *      responses:
 *        200:
 *          description: Country succesfully created
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/Country'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /country/{id}:
 *  put:
 *      security:              
 *        - bearerAuth: [] 
 *      summary: Update a country
 *      tags: [Country]
 *      parameters:
 *        - $ref: '#/components/parameters/countryId'
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewCountry'
 *      responses:
 *        200:
 *          description: Country succesfully updated
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/Country'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /country/{id}:
 *  delete:
 *      security:              
 *        - bearerAuth: [] 
 *      summary: Delete a country
 *      tags: [Country]
 *      parameters:
 *        - $ref: '#/components/parameters/countryId'
 *      responses:
 *        200:
 *          description: Country was deleted
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Country'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */