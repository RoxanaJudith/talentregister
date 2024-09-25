/**
 * @swagger
 * components:
 *   schemas:
 *     Status:   
 *       type: object 
 *       properties:
 *         id: 
 *           type: number
 *           description: Auto-generated id 
 *         name: 
 *           type: string
 *           description: Status
 *       required:
 *         - name
 *     ResourceNotFound:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: Resource not found   
 *   parameters:
 *     statusId:
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
 *   name: Status
 *   description: Status endpoint
 */

 /**
 * @swagger
 * /status/{id}:
 *  get:
 *      summary: Return a status
 *      tags: [Status]
 *      parameters:
 *        - $ref: '#/components/parameters/statusId'
 *      responses:
 *        200:
 *          description: Status was found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Status'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */
 
 /**
 * @swagger
 * /status:
 *  get:
 *      summary: Return the status list
 *      tags: [Status]
 *      responses:
 *        200:
 *          description: List of status
 *          content:
 *            application/json: 
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Status'  
 */

 /**
 * @swagger
 * /status:
 *  post:
 *      security:              
 *        - bearerAuth: [] 
 *      summary: Create a new status
 *      tags: [Status]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/Status'
 *      responses:
 *        200:
 *          description: Status succesfully created
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/Status'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /status/{id}:
 *  put:
 *      security:              
 *        - bearerAuth: [] 
 *      summary: Update a status
 *      tags: [Status]
 *      parameters:
 *        - $ref: '#/components/parameters/statusId'
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/Status'
 *      responses:
 *        200:
 *          description: Status succesfully updated
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/Status'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /status/{id}:
 *  delete:
 *      security:              
 *        - bearerAuth: [] 
 *      summary: Delete a status
 *      tags: [Status]
 *      parameters:
 *        - $ref: '#/components/parameters/statusId'
 *      responses:
 *        200:
 *          description: Status was deleted
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Status'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */
