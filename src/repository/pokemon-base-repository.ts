import type { PokemonBaseDTO } from "../dto/pokemon-base-dto";
import type { ResponseModel } from "../dto/response-model";
import type { IRepository } from "./i-repository";

export class PokemonBaseRepository implements IRepository<PokemonBaseDTO> {
  getEntitiesAsync(): Promise<ResponseModel<PokemonBaseDTO[]>> {
    throw new Error("Method not implemented.");
  }
  getEntityAsync(): Promise<ResponseModel<PokemonBaseDTO>> {
    throw new Error("Method not implemented.");
  }
  postEntityAsync(
    entity: PokemonBaseDTO,
  ): Promise<ResponseModel<PokemonBaseDTO>> {
    throw new Error("Method not implemented.");
  }
  postEntitiesAsync(
    entities: PokemonBaseDTO[],
  ): Promise<ResponseModel<PokemonBaseDTO[]>> {
    throw new Error("Method not implemented.");
  }
}
