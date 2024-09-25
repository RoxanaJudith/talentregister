/**
 * @swagger
 * components:
 *   schemas:
 *     Skill:   
 *       type: object 
 *       properties:
 *         id: 
 *           type: number
 *           description: Auto-generated id 
 *         description: 
 *           type: string
 *           description: Name Skill 
 *       required:
 *         - description
 *     NewSkill:   
 *       type: object 
 *       properties:
 *         description: 
 *           type: string
 *           description: Skill name
 *         typeSkill: 
 *           type: number
 *           description: TypeSkill id  
 *       required:
 *         - description
 *         - typeSkill
 *     ResourceNotFound:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: Resource not found   
 *   parameters:
 *     skillId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: Skill id  
 */
 
 /**
 * @swagger
 * tags:
 *   name: Skill
 *   description: Skill endpoint
 */

 /**
 * @swagger
 * /skill/{id}:
 *  get:  
 *      summary: Return a skill
 *      tags: [Skill]
 *      parameters:
 *        - $ref: '#/components/parameters/skillId'
 *      responses:
 *        200:
 *          description: Skill was found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Skill'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */
 
 /**
 * @swagger
 * /skill:
 *  get:    
 *      summary: Return the skills list
 *      tags: [Skill]
 *      responses:
 *        200:
 *          description: List of skills
 *          content:
 *            application/json: 
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Skill'  
 */

 /**
 * @swagger
 * /skill:
 *  post:
 *      security:              
 *        - bearerAuth: [] 
 *      summary: Create a new skill
 *      tags: [Skill]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewSkill'
 *      responses:
 *        200:
 *          description: Skill successfully created
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/Skill'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /skill/{id}:
 *  put:
 *      security:              
 *        - bearerAuth: [] 
 *      summary: Update a skill
 *      tags: [Skill]
 *      parameters:
 *        - $ref: '#/components/parameters/skillId'
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewSkill'
 *      responses:
 *        200:
 *          description: Skill successfully updated  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /skill/{id}:
 *  delete:
 *      security:              
 *        - bearerAuth: [] 
 *      summary: Delete a skill
 *      tags: [Skill]
 *      parameters:
 *        - $ref: '#/components/parameters/skillId'
 *      responses:
 *        200:
 *          description: Skill was deleted
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */