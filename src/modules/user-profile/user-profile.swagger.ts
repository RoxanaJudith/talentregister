/**
 * @swagger
 * components:
 *   schemas:
 *     UserProfile:   
 *       type: object 
 *       properties:
 *         id: 
 *           type: number
 *           description: User Profile Id
 *         gender: 
 *           type: string
 *           description: Gender of the user
 *         urlCv: 
 *           type: string
 *           description: Url Curriculum Vitae
 *         urlLinkedin: 
 *           type: string
 *           description: Url Linkedin 
 *         urlRepository: 
 *           type: string
 *           description: Url Repository 
 *         urlPortfolio: 
 *           type: string
 *           description: Url Portfolio 
 *         phoneNumber: 
 *           type: string
 *           description: Phone Number of the user 
 *         yearOfExperiences: 
 *           type: number
 *           description: Year of experience of the user 
 *         workMode: 
 *           type: string
 *           description: Array workMode of the user
 *           example: ["Presencial", "Remoto", "Hibrido"]
 *         availability: 
 *           type: string
 *           description: Array availability of the user
 *           example: ["Full time", "Partime", "Freelancer"] 
 *         workVisa: 
 *           type: string
 *           description: Array workVisa of the user
 *           example: ["Estados Unidos", "Union Europea", "Pais de residencia actual", "Otros Paises"] 
 *         relocation: 
 *           type: string
 *           description: Relocation  
 *         idealJob: 
 *           type: string
 *           description: Ideal Job of the user 
 *         proudExperience: 
 *           type: string
 *           description: Proud Experience of the user 
 *         salaryExpectation: 
 *           type: number
 *           description: Salary Expectation of the user 
 *         userId: 
 *           type: number
 *           description: User Id 
 *         employmentStatusId: 
 *           type: string
 *           description: Employment Status Id 
 *         cityId: 
 *           type: string
 *           description: City Id  
 *         desiredPositionId: 
 *           type: string
 *           description: Desired Position Id  
 *         skills: 
 *           type: array
 *           description: Array Skills of the user 
 *         softSkills: 
 *           type: array
 *           description: Array Soft Skills of the user
 *           items:
 *             type: object
 *             properties:  
  *              softSkillsId: 
  *                type: number 
 *         certificates: 
 *           type: array
 *           description: Array Certificates of the user
 *           items:
 *             type: object
 *             properties:  
  *              institution: 
  *                type: string 
  *              title: 
  *                type: string
  *              issueDate: 
  *                type: string
  *              code: 
  *                type: string
  *              url: 
  *                type: string 
 *         educations: 
 *           type: array
 *           description: Array Educations of the user
 *           items:
 *             type: object
 *             properties:  
  *              institution: 
  *                type: string 
  *              degree: 
  *                type: string
  *              academicArea: 
  *                type: string
  *              startDate: 
  *                type: string
  *                format: date 
  *              endDate: 
  *                type: string
  *                format: date  
 *         languages: 
 *           type: array
 *           description: Array Languages of the user
 *           items:
 *             type: object
 *             properties:  
  *              languagesId: 
  *                type: number 
  *              level: 
  *                type: string  
 *       required:
 *     NewUserProfile:   
 *       type: object 
 *       properties:
 *         id: 
 *           type: number
 *           description: User Profile Id
 *         gender: 
 *           type: string
 *           description: Gender of the user
 *         urlCv: 
 *           type: string
 *           description: Url Curriculum Vitae
 *         urlLinkedin: 
 *           type: string
 *           description: Url Linkedin 
 *         urlRepository: 
 *           type: string
 *           description: Url Repository 
 *         urlPortfolio: 
 *           type: string
 *           description: Url Portfolio 
 *         phoneNumber: 
 *           type: string
 *           description: Phone Number of the user 
 *         yearOfExperiences: 
 *           type: number
 *           description: Year of experience of the user 
 *         workMode: 
 *           type: string
 *           description: Array workMode of the user
 *           example: ["Presencial", "Remoto", "Hibrido"]
 *         availability: 
 *           type: string
 *           description: Array availability of the user
 *           example: ["Full time", "Partime", "Freelancer"] 
 *         workVisa: 
 *           type: string
 *           description: Array workVisa of the user
 *           example: ["Estados Unidos", "Union Europea", "Pais de residencia actual", "Otros Paises"] 
 *         relocation: 
 *           type: string
 *           description: Relocation  
 *         idealJob: 
 *           type: string
 *           description: Ideal Job of the user 
 *         proudExperience: 
 *           type: string
 *           description: Proud Experience of the user 
 *         salaryExpectation: 
 *           type: number
 *           description: Salary Expectation of the user 
 *         userId: 
 *           type: number
 *           description: User Id 
 *         employmentStatusId: 
 *           type: string
 *           description: Employment Status Id 
 *         cityId: 
 *           type: string
 *           description: City Id  
 *         desiredPositionId: 
 *           type: string
 *           description: Desired Position Id  
 *         skills: 
 *           type: array
 *           description: Array Skills of the user 
 *         softSkills: 
 *           type: array
 *           description: Array Soft Skills of the user
 *           items:
 *             type: object
 *             properties:  
  *              softSkillsId: 
  *                type: number 
 *         certificates: 
 *           type: array
 *           description: Array Certificates of the user
 *           items:
 *             type: object
 *             properties:  
  *              institution: 
  *                type: string 
  *              title: 
  *                type: string
  *              issueDate: 
  *                type: string
  *              code: 
  *                type: string
  *              url: 
  *                type: string 
 *         educations: 
 *           type: array
 *           description: Array Educations of the user
 *           items:
 *             type: object
 *             properties:  
  *              institution: 
  *                type: string 
  *              degree: 
  *                type: string
  *              academicArea: 
  *                type: string
  *              startDate: 
  *                type: string
  *                format: date 
  *              endDate: 
  *                type: string
  *                format: date  
 *         languages: 
 *           type: array
 *           description: Array Languages of the user
 *           items:
 *             type: object
 *             properties:  
  *              languagesId: 
  *                type: number 
  *              level: 
  *                type: string
 *         
 *     ResourceNotFound:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: Resource not found   
 *   parameters:
 *     userProfileId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: UserProfile id  
 */
 
 /**
 * @swagger
 * tags:
 *   name: UserProfile
 *   description: UserProfile endpoint
 */

 /**
 * @swagger
 * /user-profile/{id}:
 *  get:
 *      summary: Return a user
 *      tags: [UserProfile]
 *      parameters:
 *        - $ref: '#/components/parameters/userProfileId'
 *      responses:
 *        200:
 *          description: UserProfile was found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UserProfile'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */
 
 /**
 * @swagger
 * /user-profile:
 *  get:
 *      summary: Return the users list
 *      tags: [UserProfile]
 *      responses:
 *        200:
 *          description: List of users
 *          content:
 *            application/json: 
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/UserProfile'  
 */

 /**
 * @swagger
 * /user-profile:
 *  post:
 *      summary: Create a new user
 *      tags: [UserProfile]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewUserProfile'
 *      responses:
 *        200:
 *          description: UserProfile succesfully created
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/UserProfile'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /user-profile/{id}:
 *  put:
 *      summary: Update a user
 *      tags: [UserProfile]
 *      parameters:
 *        - $ref: '#/components/parameters/userProfileId'
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewUserProfile'
 *      responses:
 *        200:
 *          description: UserProfile succesfully updated
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/UserProfile'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /user-profile/{id}:
 *  delete:
 *      summary: Delete a user
 *      tags: [UserProfile]
 *      parameters:
 *        - $ref: '#/components/parameters/userProfileId'
 *      responses:
 *        200:
 *          description: UserProfile was deleted
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */