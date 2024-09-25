/**
 * @swagger
 * components:
 *   schemas:
 *     UserProfileSoftSkill:   
 *       type: object 
 *       properties:
 *         id: 
 *           type: number
 *           description: Auto-generated id 
 *         name: 
 *           type: string
 *           description: Name Skill 
 *       required:
 *         - name
 *     NewUserProfileSoftSkill:   
 *       type: object 
 *       properties:
 *         name: 
 *           type: string
 *           description: UserProfileSoftSkillname
 *       required:
 *         - name
 *     ResourceNotFound:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: Resource not found   
 *   parameters:
 *     softSkillId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: UserProfileSoftSkill id  
 */
 
 /**
 * @swagger
 * tags:
 *   name: UserProfileSoftSkill
 *   description: UserProfileSoftSkill endpoint
 */

 /**
 * @swagger
 * /user-soft-skill/{id}:
 *  get:
 *      summary: Return a softskill
 *      tags: [UserProfileSoftSkill]
 *      parameters:
 *        - $ref: '#/components/parameters/softSkillId'
 *      responses:
 *        200:
 *          description: UserProfileSoftSkill was found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UserProfileSoftSkill'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */
 
 /**
 * @swagger
 * /user-soft-skill:
 *  get:
 *      summary: Return the softskills list
 *      tags: [UserProfileSoftSkill]
 *      responses:
 *        200:
 *          description: List of softskills
 *          content:
 *            application/json: 
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/UserProfileSoftSkill'  
 */

 /**
 * @swagger
 * /user-soft-skill:
 *  post:
 *      summary: Create a new softskill
 *      tags: [UserProfileSoftSkill]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewUserProfileSoftSkill'
 *      responses:
 *        200:
 *          description: UserProfileSoftSkill successfully created
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/UserProfileSoftSkill'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /user-soft-skill/{id}:
 *  put:
 *      summary: Update a UserProfileSoftskill
 *      tags: [UserProfileSoftSkill]
 *      parameters:
 *        - $ref: '#/components/parameters/softSkillId'
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewUserProfileSoftSkill'
 *      responses:
 *        200:
 *          description: UserProfileSoftSkill successfully updated  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /user-soft-skill/{id}:
 *  delete:
 *      summary: Delete a UserProfileSoftskill
 *      tags: [UserProfileSoftSkill]
 *      parameters:
 *        - $ref: '#/components/parameters/softSkillId'
 *      responses:
 *        200:
 *          description: UserProfileSoftSkill was deleted
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */