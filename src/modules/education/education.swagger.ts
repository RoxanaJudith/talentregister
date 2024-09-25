/**
 * @swagger
 * components:
 *   schemas:
 *     Education:   
 *       type: object 
 *       properties:
 *         id: 
 *           type: number
 *           description: Auto-generated id 
 *         institution: 
 *           type: string
 *           description: Institution Education
 *         degree: 
 *           type: string
 *           description: Education degree
 *         academic_area: 
 *           type: string
 *           description: Education area
 *         start_date: 
 *           type: date
 *           description: start date
 *         end_date: 
 *           type: date
 *           description: end date
 *       required:
 *         - insitution
 *         - degree
 *         - academic_area
 *         - start_date
 *         - end_date
 *     NewEducation:   
 *       type: object 
 *       properties:
 *         institution: 
 *           type: string
 *           description: Institution Education
 *         degree: 
 *           type: string
 *           description: Education degree
 *         academic_area: 
 *           type: string
 *           description: Education area
 *         start_date: 
 *           type: string
 *           format: date
 *           example: '01-07-2023'
 *           description: start date
 *         end_date: 
 *           type: string
 *           format: date
 *           example: '01-07-2023'
 *           description: end date
 *       required:
 *         - insitution
 *         - degree
 *         - academic_area
 *         - start_date
 *         - end_date
 *     ResourceNotFound:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: Resource not found   
 *   parameters:
 *     EducationId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: Education id  
 */
 
 /**
 * @swagger
 * tags:
 *   name: Education
 *   description: Education endpoint
 */

 /**
 * @swagger
 * /education/{id}:
 *  get:
 *      summary: Return a Education
 *      tags: [Education]
 *      parameters:
 *        - $ref: '#/components/parameters/EducationId'
 *      responses:
 *        200:
 *          description: Education was found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Education'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */
 
 /**
 * @swagger
 * /education:
 *  get:
 *      summary: Return the Education list
 *      tags: [Education]
 *      responses:
 *        200:
 *          description: List of Education
 *          content:
 *            application/json: 
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Education'  
 */

 /**
 * @swagger
 * /education:
 *  post:
 *      summary: Create a new Education
 *      tags: [Education]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewEducation'
 *      responses:
 *        200:
 *          description: Education successfully created
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/Education'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /education/{id}:
 *  put:
 *      summary: Update a Education
 *      tags: [Education]
 *      parameters:
 *        - $ref: '#/components/parameters/EducationId'
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewEducation'
 *      responses:
 *        200:
 *          description: Education successfully updated  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /education/{id}:
 *  delete:
 *      summary: Delete a Education
 *      tags: [Education]
 *      parameters:
 *        - $ref: '#/components/parameters/EducationId'
 *      responses:
 *        200:
 *          description: DevLangauge was deleted
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */