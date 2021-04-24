import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [UserModule, PassportModule, JwtModule.register({
        secret: 'secret',
        signOptions: { expiresIn: '24h' }
    })],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtModule, JwtStrategy]
})
export class AuthModule { }
