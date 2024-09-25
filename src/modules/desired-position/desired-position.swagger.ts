/**
 * @swagger
 * components:
 *   schemas:
 *     DesiredPosition:   
 *       type: object 
 *       properties:
 *         id: 
 *           type: number
 *           description: Auto-generated id 
 *         name: 
 *           type: string
 *           description: DesiredPosition name
 
 *       required:
 *         - name
 *     NewDesiredPosition:   
 *       type: object 
 *       properties:
 *         name: 
 *           type: string
 *           description: DesiredPosition name
 *       required:
 *         - name 
 *     ResourceNotFound:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: Resource not found   
 *   parameters:
 *     desiredPositionId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: DesiredPosition id  
 */
 
 /**
 * @swagger
 * tags:
 *   name: DesiredPosition
 *   description: DesiredPosition endpoint
 */

 /**
 * @swagger
 * /desired-position/{id}:
 *  get:
 *      summary: Return a desiredPosition
 *      tags: [DesiredPosition]
 *      parameters:
 *        - $ref: '#/components/parameters/desiredPositionId'
 *      responses:
 *        200:
 *          description: DesiredPosition was found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/DesiredPosition'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */
 
 /**
 * @swagger
 * /desired-position:
 *  get:
 *      summary: Return the desiredPositions list
 *      tags: [DesiredPosition]
 *      responses:
 *        200:
 *          description: List of desiredPositions
 *          content:
 *            application/json: 
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/DesiredPosition'  
 */

 /**
 * @swagger
 * /desired-position:
 *  post:
 *      summary: Create a new desiredPosition
 *      tags: [DesiredPosition]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewDesiredPosition'
 *      responses:
 *        200:
 *          description: DesiredPosition succesfully created
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/DesiredPosition'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /desired-position/{id}:
 *  put:
 *      summary: Update a desiredPosition
 *      tags: [DesiredPosition]
 *      parameters:
 *        - $ref: '#/components/parameters/desiredPositionId'
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewDesiredPosition'
 *      responses:
 *        200:
 *          description: DesiredPosition succesfully updated
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/DesiredPosition'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /desired-position/{id}:
 *  delete:
 *      summary: Delete a desiredPosition
 *      tags: [DesiredPosition]
 *      parameters:
 *        - $ref: '#/components/parameters/desiredPositionId'
 *      responses:
 *        200:
 *          description: DesiredPosition was deleted
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/DesiredPosition'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */