import { setSeederFactory } from 'typeorm-extension';
import { User } from '../../modules/user/user.entity';
import Encryption from '../../utils/encryption';
const encryption = new Encryption()


export default  setSeederFactory(User, async (faker) => {
    const user = new User();
    user.firstName = faker.name.firstName('male');
    user.lastName = faker.name.lastName('male');
    user.email = faker.internet.email(user.firstName, user.lastName);
    user.password = await encryption.password(faker.internet.password(15,true, /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9])(.{8,})$/))

    return user;
})
