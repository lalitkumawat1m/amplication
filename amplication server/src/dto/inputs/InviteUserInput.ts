
import { Field, InputType } from "type-graphql";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class InviteUserInput {
  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  email: string;

}
