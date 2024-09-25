/**
 * @swagger
 * components:
 *   schemas:
 *     Certificates:   
 *       type: object 
 *       properties:
 *         id: 
 *           type: number
 *           description: Auto-generated id 
 *         institution: 
 *           type: string
 *           description: Institution Certificate
 *         title: 
 *           type: string
 *           description: Certificate title
 *         issue_date: 
 *           type: date
 *           description: issue date
 *         code: 
 *           type: string
 *           description: certificate code
 *         url: 
 *           type: string
 *           description: certificate url   
 *       required:
 *         - insitution
 *         - title
 *         - issue_date
 *         - code
 *         - url    
 *     NewCertificate:   
 *       type: object 
 *       properties:
 *         institution: 
 *           type: string
 *           description: Institution Certificate
 *         title: 
 *           type: string
 *           description: Certificate title
 *         issue_date: 
 *           type: string
 *           format: date
 *           example: '01-07-2023'
 *           description: issue date
 *         code: 
 *           type: string
 *           description: certificate code
 *         url: 
 *           type: string
 *           description: certificate url 
 *       required:
 *         - insitution
 *         - title
 *         - issue_date
 *         - code
 *         - url 
 *     ResourceNotFound:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: Resource not found   
 *   parameters:
 *     CertificateId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: Certificate id  
 */
 
 /**
 * @swagger
 * tags:
 *   name: Certificate
 *   description: Certificate endpoint
 */

 /**
 * @swagger
 * /certificate/{id}:
 *  get:
 *      summary: Return a Certificate
 *      tags: [Certificate]
 *      parameters:
 *        - $ref: '#/components/parameters/CertificateId'
 *      responses:
 *        200:
 *          description: Certificate was found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Certificate'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */
 
 /**
 * @swagger
 * /certificate:
 *  get:
 *      summary: Return the Certificates list
 *      tags: [Certificate]
 *      responses:
 *        200:
 *          description: List of Certificates
 *          content:
 *            application/json: 
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Certificates'  
 */

 /**
 * @swagger
 * /certificate:
 *  post:
 *      summary: Create a new Certificate
 *      tags: [Certificate]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewCertificate'
 *      responses:
 *        200:
 *          description: Certificate successfully created
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/Certificate'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /certificate/{id}:
 *  put:
 *      summary: Update a Certificate
 *      tags: [Certificate]
 *      parameters:
 *        - $ref: '#/components/parameters/CertificateId'
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewCertificate'
 *      responses:
 *        200:
 *          description: Certificate successfully updated  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /certificate/{id}:
 *  delete:
 *      summary: Delete a Certificate
 *      tags: [Certificate]
 *      parameters:
 *        - $ref: '#/components/parameters/CertificateId'
 *      responses:
 *        200:
 *          description: Certificate was deleted
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */