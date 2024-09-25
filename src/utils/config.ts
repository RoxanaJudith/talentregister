interface SystemConfig {
  roles: { ADMIN: string; USER: string };
  privateKey: {
    user: string;
    resetPassword: string;
  };
  domain: string;
}

const config: SystemConfig = {
  roles: {
    ADMIN: 'admin',
    USER: 'user',
  },
  privateKey: {
    user: 'algo0.1',
    resetPassword: 'algo0.2',
  },
  domain: 'http://localhost:5173',
};

const dev = process.env.NODE_ENV !== 'production';
export const redirectURL = dev ? 'http://localhost:5173/login' : 'https://frontend-deployment.server.com';

export default config;
