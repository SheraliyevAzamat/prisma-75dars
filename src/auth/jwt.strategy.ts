import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    const jwtSecret = configService.get<string>('JWT_SECRET');

    // Secretning mavjudligini tekshirish
    if (!jwtSecret) {
      throw new Error('JWT_SECRET is not defined in .env file');
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret,  // secretOrKey o'zgaruvchisini to'g'ri o'rnatish
    });
  }

  async validate(payload: JwtPayload) {
    return { userId: payload.userId };
  }
}
