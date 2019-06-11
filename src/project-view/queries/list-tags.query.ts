import { Arg, Field, ObjectType } from 'graphql-schema-decorator';
import { Service } from 'typedi';
import { TagsListerResponse } from './list-tags.response';
import { GraphQLInt } from 'graphql';
import { TagsListerUseCase } from './list-tags.use-case';
import { User } from '../../entity/User';

@ObjectType()
@Service()
export class TagsListerQuery {
  constructor(private useCase: TagsListerUseCase) {}
  @Field({ type: TagsListerResponse, description: 'Detalhe de uma Revendedora' })
  async TagsLister(
    @Arg({ name: 'id', nonNull: true, type: GraphQLInt }) id: number,
  ): Promise<User> {
    return this.useCase.exec();
  }
}
