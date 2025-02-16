import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  album: string;

  @IsString()
  artist: string;

  @IsString()
  genre: string;

  @IsNumber()
  year: number;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  image: string;
}
