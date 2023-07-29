import { Module } from '@nestjs/common'

import { UsersService } from './users.service'

import { PrismaModule } from '$/services'

@Module({
  controllers: [],
  providers: [UsersService],
  imports: [PrismaModule],
  exports: [UsersService]
})
export class UsersModule {}
