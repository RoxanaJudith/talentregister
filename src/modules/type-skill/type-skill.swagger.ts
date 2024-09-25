/**
 * @swagger
 * components:
 *   schemas:
 *     TypeSkill:   
 *       type: object 
 *       properties:
 *         id: 
 *           type: number
 *           description: Auto-generated id 
 *         name: 
 *           type: string
 *           description: Name TypeSkill 
 *       required:
 *         - name
 *     NewTypeSkill:   
 *       type: object 
 *       properties:
 *         name: 
 *           type: string
 *           description: TypeSkill name 
 *       required:
 *         - name
 *     ResourceNotFound:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: Resource not found   
 *   parameters:
 *     typeSkillId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: TypeSkill id  
 */
 
 /**
 * @swagger
 * tags:
 *   name: TypeSkill
 *   description: TypeSkill endpoint
 */

 /**
 * @swagger
 * /type-skill/{id}:
 *  get:
 *      summary: Return a skill type
 *      tags: [TypeSkill]
 *      parameters:
 *        - $ref: '#/components/parameters/typeSkillId'
 *      responses:
 *        200:
 *          description: TypeSkill was found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/TypeSkill'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */
 
 /**
 * @swagger
 * /type-skill:
 *  get:
 *      summary: Return the skills types list
 *      tags: [TypeSkill]
 *      responses:
 *        200:
 *          description: List of skills types
 *          content:
 *            application/json: 
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/TypeSkill'  
 */

 /**
 * @swagger
 * /type-skill:
 *  post:
 *      security:              
 *        - bearerAuth: [] 
 *      summary: Create a new skill type
 *      tags: [TypeSkill]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewTypeSkill'
 *      responses:
 *        200:
 *          description: TypeSkill successfully created
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/TypeSkill'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /type-skill/{id}:
 *  put:
 *      security:              
 *        - bearerAuth: [] 
 *      summary: Update a skill types
 *      tags: [TypeSkill]
 *      parameters:
 *        - $ref: '#/components/parameters/typeSkillId'
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewTypeSkill'
 *      responses:
 *        200:
 *          description: TypeSkill successfully updated  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /type-skill/{id}:
 *  delete:
 *      security:              
 *        - bearerAuth: [] 
 *      summary: Delete a skill types
 *      tags: [TypeSkill]
 *      parameters:
 *        - $ref: '#/components/parameters/typeSkillId'
 *      responses:
 *        200:
 *          description: TypeSkill was deleted
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */