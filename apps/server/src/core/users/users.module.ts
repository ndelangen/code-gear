import { PrismaModule }    from '@code-gear/api/services'
import { Module }          from '@nestjs/common'

import { UsersRepository } from './users.repository'

@Module({
  controllers: [],
  providers: [UsersRepository],
  imports: [PrismaModule],
  exports: [UsersRepository]
})
export class UsersModule {}
