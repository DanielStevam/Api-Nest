/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, PrimaryColumn, BeforeInsert } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { nanoid } = require('nanoid');

@Entity('products')
export class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  album: string;

  @Column()
  artist: string;

  @Column()
  genre: string;

  @Column()
  year: number;

  @Column()
  image: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @BeforeInsert()
  generateId() {
    this.id = nanoid();
  }
}
