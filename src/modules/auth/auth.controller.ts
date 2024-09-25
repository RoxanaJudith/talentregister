import { NextFunction, Response, Request, RequestHandler } from 'express';
import { AuthService } from "./auth.service";
import fetch from 'node-fetch';
import { redirectURL } from '../../utils/config';
import { User } from '../user/user.entity';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email: string = req.body['email'];
      const pass: string = req.body['password'];
      const data = await this.authService.login(email, pass);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  linkedin: RequestHandler = async (req, res, next) => {
    const fetchJSON = (...args: Parameters<typeof fetch>): Promise<any> => fetch(...args).then(res => res.json());
    const { code } = req.body
    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectURL,
      client_id: process.env.LINKEDIN_CLIENT_ID || '',
      client_secret: process.env.LINKEDIN_CLIENT_SECRET || ''
    })
    try {
      const { access_token } = await fetchJSON('https://www.linkedin.com/oauth/v2/accessToken', { method: 'POST', body })

      const payload = {
        method: 'GET',
        headers: { Authorization: `Bearer ${access_token}` }
      }

      const { localizedFirstName, localizedLastName } = await fetchJSON('https://api.linkedin.com/v2/me', payload)
      const { elements } = await fetchJSON('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))', payload)

      const email = elements[0]['handle~'].emailAddress
      const firstName = localizedFirstName
      const lastName = localizedLastName

      const data = await this.authService.loginLinkedin({ email, firstName, lastName } as User)
      res.status(200).json(data)
    } catch (error) {
      next(error);
    }
  }

  loginSocial = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email: string = req.body['email'];
      const displayName: string = req.body['displayName'];
      const firstName: string = req.body['firstName'];
      const lastName: string = req.body['lastName'];
      const data = await this.authService.loginSocial(email, displayName, firstName, lastName);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  linkResetPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email = req.body.email;
      const linkResetPassword = await this.authService.linkResetPassword(email)
      res.json(linkResetPassword);
    } catch (error) {
      next(error);
    }
  }

  resetPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.params.token;
      const password = req.body.password;
      const resetPassword = await this.authService.resetPassword(token, password);
      res.json(resetPassword);
    } catch (error) {
      next(error);
    }
  }

  changePassword = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const email = req.email
      const { oldPassword, newPassword } = req.body;
      const changePassword = await this.authService.changePassword(email, oldPassword, newPassword);
      res.json(changePassword)
    } catch (error) {
      next(error)
    }
  }
}