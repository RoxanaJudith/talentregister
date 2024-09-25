/**
 * @swagger
 * components:
 *   schemas:
 *     EmploymentStatus:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: Auto-generated id
 *         name:
 *           type: string
 *           description: Name of the employment status
 *         description:
 *           type: string
 *           description: Description of the employment status
 *       required:
 *         - name
 *     NewEmploymentStatus:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the employment status
 *         description:
 *           type: string
 *           description: Description of the employment status
 *       required:
 *         - name
 *
 *   parameters:
 *     EmploymentStatusId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: Employment status id
 */

/**
 * @swagger
 * tags:
 *   name: Employment Status
 *   description: Employment status endpoint
 */

/**
 * @swagger
 * /employment-status/{id}:
 *  get:
 *    summary: Get an employment status by ID
 *    tags: [Employment Status]
 *    parameters:
 *      - $ref: '#/components/parameters/EmploymentStatusId'
 *    responses:
 *      200:
 *        description: Employment status found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/EmploymentStatus'
 *      404:
 *        description: Employment status not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ResourceNotFound'
 */

/**
 * @swagger
 * /employment-status:
 *  get:
 *    summary: Get all employment statuses
 *    tags: [Employment Status]
 *    responses:
 *      200:
 *        description: List of employment statuses
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/EmploymentStatus'
 */

/**
 * @swagger
 * /employment-status:
 *  post:
 *    summary: Create a new employment status
 *    tags: [Employment Status]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/NewEmploymentStatus'
 *    responses:
 *      201:
 *        description: Employment status created successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/EmploymentStatus'
 *      400:
 *        description: Invalid request body
 *      500:
 *        description: Server error
 */

/**
 * @swagger
 * /employment-status/{id}:
 *  put:
 *    summary: Update an employment status
 *    tags: [Employment Status]
 *    parameters:
 *      - $ref: '#/components/parameters/EmploymentStatusId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/NewEmploymentStatus'
 *    responses:
 *      200:
 *        description: Employment status updated successfully
 *      400:
 *        description: Invalid request body
 *      404:
 *        description: Employment status not found
 *       
