
import { Service } from 'typedi';
import { AllTags } from './all-tags';
import { User } from '../../entity/User';
//import { userRepo } from '../db-setup';
import { isDate } from 'util';
//import { TagsLister } from './list-tags.response';
import { createQueryBuilder, FindOperator, getConnection } from 'typeorm';
import { Tag } from '../../entity/Tag';


@Service()
export class TagsListerUseCase {
  constructor(
    private id: number,
  ) {}

  async exec(): Promise<User> {
    const userRepo = getConnection().getRepository(User);
    const tagRepo = getConnection().getRepository(Tag);
    //const result = await userRepo.findOne({
    const result = await userRepo.findOne({
      where: {
        id: this.id
      }
    })
    return result;
  }
}
