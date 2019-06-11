import { EnumType, Value } from 'graphql-schema-decorator';


export enum AllTags {
  Like = 'Like',
  Love = 'Love',
  Hate = 'Hate',
}

@EnumType({ description: 'lista de tags' })
export class AllTagsEnum {
  @Value(AllTags.Like)
  Like: string;

  @Value(AllTags.Love)
  Love: string;

  @Value(AllTags.Hate)
  Hate: string;
}
