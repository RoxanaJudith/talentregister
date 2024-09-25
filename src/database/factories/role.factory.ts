import { setSeederFactory } from 'typeorm-extension';
import { Role } from '../../modules/role/role.entity';

export default setSeederFactory(Role, (faker) => {
    const role = new Role();
    role.name = faker.helpers.arrayElement(['User','Admin']);
    return role;
})