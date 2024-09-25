import { Router } from 'express';
import authRouter from './modules/auth/auth.routes';
import userRouter from './modules/user/user.routes';
import statusRouter from './modules/status/status.routes';
import roleRouter from './modules/role/role.routes';
import skillRouter from './modules/skill/skill.routes';
import typeSkillRouter from './modules/type-skill/type-skill.router';
import softSkillRouter from './modules/soft-skill/soft-skill.routes';
import userProfileSoftSkillRouter from './modules/user-profile-soft-skills/user-profile-soft-skill.routes';
import userProfileRouter from './modules/user-profile/user-profile.routes';
import userProfileSkillRouter from './modules/user-profile-skills/user-profile-skills.routes'
import educationRouter  from './modules/education/education.routes';
import certificatesRouter  from './modules/certificate/certificate.routes';
import languageRouter from './modules/language/language.routes'
import userLanguageRouter from './modules/user-language/user-language.routes'
import countryRouter from './modules/country/country.routes'
import cityRouter from './modules/city/city.routes'
import desiredPositionRouter from './modules/desired-position/desired-position.routes'
import employmentStatus from './modules/employment-status/employment-statuses.routes'
import contactUs from './modules/contactUs/contactUs.routes'
import evaluationRouter from './modules/evaluations/evaluations.routes'

const apiRouter = Router();

// modules
apiRouter.use('/auth', authRouter);
apiRouter.use('/user', userRouter);
apiRouter.use('/status', statusRouter);
apiRouter.use('/role', roleRouter);
apiRouter.use('/skill', skillRouter);
apiRouter.use('/type-skill', typeSkillRouter);
apiRouter.use('/soft-skill', softSkillRouter);
apiRouter.use('/user-soft-skills', userProfileSoftSkillRouter);
apiRouter.use('/user-profile', userProfileRouter);
apiRouter.use('/user-profile-skills', userProfileSkillRouter);
apiRouter.use('/education', educationRouter);
apiRouter.use('/certificates', certificatesRouter);
apiRouter.use('/language', languageRouter);
apiRouter.use('/user-language', userLanguageRouter);
apiRouter.use('/country', countryRouter);
apiRouter.use('/city', cityRouter);
apiRouter.use('/desired-position', desiredPositionRouter);
apiRouter.use('/employment-status', employmentStatus);
apiRouter.use('/contact-us',contactUs)
apiRouter.use('/evaluations', evaluationRouter)

export default apiRouter;
