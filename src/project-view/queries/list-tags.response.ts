import { Field, ObjectType } from 'graphql-schema-decorator';
import { GraphQLInt } from 'graphql';
import { Service } from 'typedi';
import { AllTagsEnum, AllTags } from './all-tags';


// export interface TagsLister {
//   id: number;
//   tags: AllTags[];
// }


@ObjectType({ description: 'Listagem de tags do usuário' })
@Service()
export class TagsListerResponse {
  @Field({type: GraphQLInt, nonNull: true, description: 'id do usuário'})
  id: number;

  @Field({type: AllTagsEnum, isList: true, description:'tags'})
  tags: AllTags[];
}

