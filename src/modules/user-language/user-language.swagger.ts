/**
 * @swagger
 * tags:
 *   name: UserLanguage
 *   description: User language endpoint
 */

/**
 * @swagger
 * /user-language:
 *  get:
 *    summary: Return the user languages list
 *    tags: [UserLanguage]
 *    responses:
 *      200:
 *        description: List of user languages
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/UserLanguage'
 *      400:
 *        description: Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /user-language/{id}:
 *  get:
 *    summary: Return a user language
 *    tags: [UserLanguage]
 *    parameters:
 *      - $ref: '#/components/parameters/userLanguageId'
 *    responses:
 *      200:
 *        description: User language was found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserLanguage'
 *      404:
 *        description: User language not found
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
 * /user-language:
 *  post:
 *    summary: Create a new user language
 *    tags: [UserLanguage]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/NewUserLanguage'
 *    responses:
 *      200:
 *        description: User language successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserLanguage'
 *      400:
 *        description: Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /user-language/{id}:
 *  put:
 *    summary: Update a user language
 *    tags: [UserLanguage]
 *    parameters:
 *      - $ref: '#/components/parameters/userLanguageId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/NewUserLanguage'
 *    responses:
 *      200:
 *        description: User language successfully updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserLanguage'
 *      404:
 *        description: User language not found
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
 * /user-language/{id}:
 *  delete:
 *    summary: Delete a user language
 *    tags: [UserLanguage]
 *    parameters:
 *      - $ref: '#/components/parameters/userLanguageId'
 *    responses:
 *      200:
 *        description: User language was deleted
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserLanguage'
 *      404:
 *        description: User language not found
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
 *     UserLanguage:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: Auto-generated id
 *         name:
 *           type: string
 *           description: User language name
 *       required:
 *         - name
 *     NewUserLanguage:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: User language name
 *       required:
 *         - name
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Error message
 *   parameters:
 *     userLanguageId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: User language id
 */
