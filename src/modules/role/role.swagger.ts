/**
 * @swagger
 * components:
 *   schemas:
 *     Role:   
 *       type: object 
 *       properties:
 *         id: 
 *           type: number
 *           description: Auto-generated id 
 *         name: 
 *           type: string
 *           description: Role name
 
 *       required:
 *         - name
 *     NewRole:   
 *       type: object 
 *       properties:
 *         name: 
 *           type: string
 *           description: Role name
 *       required:
 *         - name 
 *     ResourceNotFound:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: Resource not found   
 *   parameters:
 *     roleId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: Role id  
 */
 
 /**
 * @swagger
 * tags:
 *   name: Role
 *   description: Role endpoint
 */

 /**
 * @swagger
 * /role/{id}:
 *  get:
 *      summary: Return a role
 *      tags: [Role]
 *      parameters:
 *        - $ref: '#/components/parameters/roleId'
 *      responses:
 *        200:
 *          description: Role was found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Role'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */
 
 /**
 * @swagger
 * /role:
 *  get:
 *      summary: Return the roles list
 *      tags: [Role]
 *      responses:
 *        200:
 *          description: List of roles
 *          content:
 *            application/json: 
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Role'  
 */

 /**
 * @swagger
 * /role:
 *  post:
 *      security:              
 *        - bearerAuth: [] 
 *      summary: Create a new role
 *      tags: [Role]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewRole'
 *      responses:
 *        200:
 *          description: Role succesfully created
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/Role'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /role/{id}:
 *  put:
 *      security:              
 *        - bearerAuth: [] 
 *      summary: Update a role
 *      tags: [Role]
 *      parameters:
 *        - $ref: '#/components/parameters/roleId'
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewRole'
 *      responses:
 *        200:
 *          description: Role succesfully updated
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/Role'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /role/{id}:
 *  delete:
 *      security:              
 *        - bearerAuth: [] 
 *      summary: Delete a role
 *      tags: [Role]
 *      parameters:
 *        - $ref: '#/components/parameters/roleId'
 *      responses:
 *        200:
 *          description: Role was deleted
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Role'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */