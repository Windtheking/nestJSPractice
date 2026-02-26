
import { AppController } from './app.controller';
import { AppService  } from './app.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './user/users.service';
import { UsersController } from './user/users.controller';
import { User } from './user/user.entity';
import { UsersModule } from './user/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-us-west-2.pooler.supabase.com',
      port: 6543,
      username: 'postgres.wtyndmmkeasqydxmfuia',
      password: 'ADSO-trece-development-DATABASE',
      database: 'postgres',
      entities: [User],
      synchronize: true, 
    }),
    UsersModule,
  ],
  controllers: [AppController , UsersController],
  providers: [AppService , UsersService],
})
export class AppModule {}
