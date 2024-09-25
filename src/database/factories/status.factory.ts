import { setSeederFactory } from 'typeorm-extension';
import { Status } from '../../modules/status/status.entity';

export default setSeederFactory(Status, (faker) => {
    const status = new Status();
    status.name = faker.helpers.arrayElement(['Active','Job Ready']);
    return status;
})