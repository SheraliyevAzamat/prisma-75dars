import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { CountriesModule } from './countries/countries.module';
import { MerchantsModule } from './merchants/merchants.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { PrismaService } from './prisma.service';
import { JwtStrategy } from './auth/jwt.strategy';


@Module({
  imports: [ConfigModule.forRoot()],  // ConfigModuleni ishga tushurish
  providers: [JwtStrategy],
})

@Module({
  imports: [
    AuthModule,
    UsersModule,
    CountriesModule,
    MerchantsModule,
    ProductsModule,
    OrdersModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
