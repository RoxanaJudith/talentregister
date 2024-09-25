/**
 * @swagger
 * components:
 *   schemas:
 *     User:   
 *       type: object 
 *       properties:
 *         id: 
 *           type: number
 *           description: Auto-generated id 
 *         firstName: 
 *           type: string
 *           description: Username
 *         lastName: 
 *           type: string
 *           description: Last name
 *         email: 
 *           type: string
 *           description: Email address 
 *         password: 
 *           type: string
 *           description: User password 
 *         role: 
 *           type: number
 *           description: Role id 
 *         status: 
 *           type: number
 *           description: Status id 
 *       required:
 *         - firstName
 *         - lastName 
 *         - email
 *         - password
 *         - role
 *         - status
 *     NewUser:   
 *       type: object 
 *       properties:
 *         firstName: 
 *           type: string
 *           description: Username
 *         lastName: 
 *           type: string
 *           description: Last name
 *         email: 
 *           type: string
 *           description: Email address 
 *         password: 
 *           type: string
 *           description: User password 
 *       required:
 *         - firstName
 *         - lastName 
 *         - email
 *         - password
 *     ResourceNotFound:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: Resource not found   
 *   parameters:
 *     userId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: User id  
 */
 
 /**
 * @swagger
 * tags:
 *   name: User
 *   description: User endpoint
 */

 /**
 * @swagger
 * /user/{id}:
 *  get:
 *      summary: Return a user
 *      tags: [User]
 *      parameters:
 *        - $ref: '#/components/parameters/userId'
 *      responses:
 *        200:
 *          description: User was found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */
 
 /**
 * @swagger
 * /user:
 *  get:
 *      summary: Return the users list
 *      tags: [User]
 *      responses:
 *        200:
 *          description: List of users
 *          content:
 *            application/json: 
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/User'  
 */

 /**
 * @swagger
 * /user:
 *  post:
 *      summary: Create a new user
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewUser'
 *      responses:
 *        200:
 *          description: User succesfully created
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/User'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /user/{id}:
 *  put:
 *      summary: Update a user
 *      tags: [User]
 *      parameters:
 *        - $ref: '#/components/parameters/userId'
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewUser'
 *      responses:
 *        200:
 *          description: User succesfully updated
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/User'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /user/{id}:
 *  delete:
 *      summary: Delete a user
 *      tags: [User]
 *      parameters:
 *        - $ref: '#/components/parameters/userId'
 *      responses:
 *        200:
 *          description: User was deleted
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */