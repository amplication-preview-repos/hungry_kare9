/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { PromoCode } from "./PromoCode";
import { PromoCodeCountArgs } from "./PromoCodeCountArgs";
import { PromoCodeFindManyArgs } from "./PromoCodeFindManyArgs";
import { PromoCodeFindUniqueArgs } from "./PromoCodeFindUniqueArgs";
import { DeletePromoCodeArgs } from "./DeletePromoCodeArgs";
import { PromoCodeService } from "../promoCode.service";
@graphql.Resolver(() => PromoCode)
export class PromoCodeResolverBase {
  constructor(protected readonly service: PromoCodeService) {}

  async _promoCodesMeta(
    @graphql.Args() args: PromoCodeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PromoCode])
  async promoCodes(
    @graphql.Args() args: PromoCodeFindManyArgs
  ): Promise<PromoCode[]> {
    return this.service.promoCodes(args);
  }

  @graphql.Query(() => PromoCode, { nullable: true })
  async promoCode(
    @graphql.Args() args: PromoCodeFindUniqueArgs
  ): Promise<PromoCode | null> {
    const result = await this.service.promoCode(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PromoCode)
  async deletePromoCode(
    @graphql.Args() args: DeletePromoCodeArgs
  ): Promise<PromoCode | null> {
    try {
      return await this.service.deletePromoCode(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}