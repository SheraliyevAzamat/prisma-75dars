// src/auth/auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(payload: JwtPayload) {

    return { userId: payload.userId }; 
  }

  async login(user: any) {
    // Token yaratish
    const payload: JwtPayload = { userId: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
