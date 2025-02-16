import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly respository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = this.respository.create(createProductDto);
    return this.respository.save(product);
  }

  findAll() {
    return this.respository.find();
  }

  findOne(id: string) {
    return this.respository.findOneBy({ id });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.respository.findOneBy({ id });
    if (!product) return null;
    this.respository.merge(product, updateProductDto);
    return this.respository.save(product);
  }

  async remove(id: string) {
    const product = await this.respository.findOneBy({ id });
    if (!product) return null;
    return this.respository.remove(product);
  }
}
