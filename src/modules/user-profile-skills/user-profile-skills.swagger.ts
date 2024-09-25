/**
 * @swagger
 * components:
 *   schemas:
 *     UserProfileSkills:   
 *       type: object 
 *       properties:
 *         id: 
 *           type: number
 *           description: Auto-generated id 
 *         level_skill: 
 *           type: string
 *           description: User skill level
 *         skill: 
 *           type: string
 *           description: Skill id
 *         userProfile: 
 *           type: string
 *           description: UserProfile table id 
 *       required:
 *         - level_skill
 *         - skill
 *         - userProfile
 *     NewUserProfileSkill:   
 *       type: object 
 *       properties:
 *         level_skill: 
 *           type: string
 *           description: User skill level
 *         skill: 
 *           type: number
 *           description: Skill id
 *         userProfile: 
 *           type: number
 *           description: UserProfile table id
 *       required:
 *         - level_skill
 *         - skill 
 *         - UserProfileId
 *     ResourceNotFound:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: Resource not found   
 *   parameters:
 *     userProfileSkillId:
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
 *   name: UserProfileSkills
 *   description: UserProfileSkills endpoint
 */

 /**
 * @swagger
 * /user-profile-skills/{id}:
 *  get:
 *      summary: Return a user profile skill
 *      tags: [UserProfileSkills]
 *      parameters:
 *        - $ref: '#/components/parameters/userProfileSkillId'
 *      responses:
 *        200:
 *          description: User profile skill was found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UserProfileSkillId'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */
 
 /**
 * @swagger
 * /user-profile-skills:
 *  get:
 *      summary: Return the user profile skills list
 *      tags: [UserProfileSkills]
 *      responses:
 *        200:
 *          description: List of UserProfileSkill
 *          content:
 *            application/json: 
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/UserProfileSkill'  
 */

 /**
 * @swagger
 * /user-profile-skills:
 *  post:
 *      summary: Create a new user
 *      tags: [UserProfileSkills]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewUserProfileSkill'
 *      responses:
 *        200:
 *          description: User profile skill succesfully created
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/UserProfileSkill'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /user-profile-skills/{id}:
 *  put:
 *      summary: Update a user profile skill
 *      tags: [UserProfileSkills]
 *      parameters:
 *        - $ref: '#/components/parameters/userProfileSkillId'
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewUserProfileSkill'
 *      responses:
 *        200:
 *          description: User profile skill succesfully updated
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/UserProfileSkill'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /user-profile-skills/{id}:
 *  delete:
 *      summary: Delete a user profile skill
 *      tags: [UserProfileSkills]
 *      parameters:
 *        - $ref: '#/components/parameters/userProfileSkillId'
 *      responses:
 *        200:
 *          description: User profile skill was deleted
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */