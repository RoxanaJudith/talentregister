/**
 * @swagger
 * components:
 *   schemas:
 *     Language:   
 *       type: object 
 *       properties:
 *         id: 
 *           type: number
 *           description: Auto-generated id 
 *         name: 
 *           type: string
 *           description: Language name
 
 *       required:
 *         - name
 *     NewLanguage:   
 *       type: object 
 *       properties:
 *         name: 
 *           type: string
 *           description: Language name
 *       required:
 *         - name 
 *     ResourceNotFound:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: Resource not found   
 *   parameters:
 *     languageId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: Language id  
 */
 
 /**
 * @swagger
 * tags:
 *   name: Language
 *   description: Language endpoint
 */

 /**
 * @swagger
 * /language/{id}:
 *  get:
 *      summary: Return a language
 *      tags: [Language]
 *      parameters:
 *        - $ref: '#/components/parameters/languageId'
 *      responses:
 *        200:
 *          description: Language was found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Language'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */
 
 /**
 * @swagger
 * /language:
 *  get:
 *      summary: Return the languages list
 *      tags: [Language]
 *      responses:
 *        200:
 *          description: List of languages
 *          content:
 *            application/json: 
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Language'  
 */

 /**
 * @swagger
 * /language:
 *  post:
 *      security:              
 *        - bearerAuth: [] 
 *      summary: Create a new language
 *      tags: [Language]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewLanguage'
 *      responses:
 *        200:
 *          description: Language succesfully created
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/Language'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /language/{id}:
 *  put:
 *      security:              
 *        - bearerAuth: [] 
 *      summary: Update a language
 *      tags: [Language]
 *      parameters:
 *        - $ref: '#/components/parameters/languageId'
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewLanguage'
 *      responses:
 *        200:
 *          description: Language succesfully updated
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/Language'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /language/{id}:
 *  delete:
 *      security:              
 *        - bearerAuth: [] 
 *      summary: Delete a language
 *      tags: [Language]
 *      parameters:
 *        - $ref: '#/components/parameters/languageId'
 *      responses:
 *        200:
 *          description: Language was deleted
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Language'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */