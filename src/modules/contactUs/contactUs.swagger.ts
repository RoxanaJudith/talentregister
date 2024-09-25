/**
 * @swagger
 * tags:
 *   name: ContactUs
 *   description: contactUs endpoint
 */

/**
 * @swagger
 * /contact-us:
 *  get:
 *    summary: Returns the list of those who contacted us
 *    tags: [ContactUs]
 *    responses:
 *      200:
 *        description: List of those who contacted us
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/ContactUs'
 *      400:
 *        description: Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /contact-us/{id}:
 *  get:
 *    summary: Return someone who contacted us
 *    tags: [ContactUs]
 *    parameters:
 *      - $ref: '#/components/parameters/contactUsId'
 *    responses:
 *      200:
 *        description: contact was found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ContactUs'
 *      404:
 *        description: contact not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *      400:
 *        description: Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /contact-us/:
 *  post:
 *    summary: Create a new contact
 *    tags: [ContactUs]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/NewContactUs'
 *    responses:
 *      200:
 *        description: contact successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ContactUs'
 *      400:
 *        description: Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /contact-us/{id}:
 *  put:
 *    summary: Update a contact
 *    tags: [ContactUs]
 *    parameters:
 *      - $ref: '#/components/parameters/contactUsId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/NewContactUs'
 *    responses:
 *      200:
 *        description: contact successfully updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ContactUs'
 *      404:
 *        description: contact not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *      400:
 *        description: Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /contact-us/{id}:
 *  delete:
 *    summary: Delete a contact
 *    tags: [ContactUs]
 *    parameters:
 *      - $ref: '#/components/parameters/contactUsId'
 *    responses:
 *      200:
 *        description: contact was deleted
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ContactUs'
 *      404:
 *        description: contact not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *      400:
 *        description: Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ContactUs:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: Auto-generated id
 *         name:
 *           type: string
 *           description: contact name
 *         last_name:
 *           type: string
 *           description: contactUs last name
 *         corporate_email:
 *           type: string
 *           description: is the corporate email
 *         phone_number:
 *           type: string
 *           description: is the phone number
 *         corporate:
 *           type: string   
 *           descripcion:  corporate
 *         comment:
 *           type: string
 *           descripcion: a comment by users
 *         contac_us_area:
 *           type: string
 *           descripcion: 'Desarrollador Fron End,Desarrollador Full Stack,Desarrollador Backend,Diseniador UX/UI,Analista QA,Desarrollador Mobile,Datos,otro'  
 * 
 *       required:
 *         - name
 * 
 *     NewContactUs:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: contact name
 *         last_name:
 *           type: string
 *           description: contactUs last name
 *         corporate_email:
 *           type: string
 *           description: is the corporate email
 *         phone_number:
 *           type: string
 *           description: is the phone number
 *         corporate:
 *           type: string
 *           descripcion:  corporate
 *         comment:
 *           type: string
 *           descripcion: a comment by users
 *         contac_us_area:
 *           type: string
 *           descripcion: 'Desarrollador Fron End,Desarrollador Full Stack,Desarrollador Backend,Diseniador UX/UI,Analista QA,Desarrollador Mobile,Datos,otro'  
 * 
 *       required:
 *         - name
 *         - corporate
 *         - corporate_email
 * 
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Error message
 *   parameters:
 *     contactUsId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: contactUs id
 */
