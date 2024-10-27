// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class UsersService {}


import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  createUser(userData: Partial<User>) {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  getUsers() {
    return this.userRepository.find();
  }

  getUserById(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  updateUser(id: number, userData: Partial<User>) {
    return this.userRepository.update(id, userData);
  }

  deleteUser(id: number) {
    return this.userRepository.delete(id);
  }
}

