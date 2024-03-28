import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Admin',
      email: 'afifmansib123@gmail.com',
      password: bcrypt.hashSync('kuttarbaccha'),
      isAdmin: true,
      isExporter: false,
    },
  ],
};

export default data;
