import type { PokemonDetailsDTO } from "../dto/pokemon-details-dto";
import type { ResponseModel } from "../dto/response-model";
import type { IRepository } from "./i-repository";

export class PokemonDetailsRepository implements IRepository<PokemonDetailsDTO> {
  getEntitiesAsync(): Promise<ResponseModel<PokemonDetailsDTO[]>> {
    throw new Error("Method not implemented.");
  }
  getEntityAsync(): Promise<ResponseModel<PokemonDetailsDTO>> {
    throw new Error("Method not implemented.");
  }
  postEntityAsync(
    entity: PokemonDetailsDTO,
  ): Promise<ResponseModel<PokemonDetailsDTO>> {
    throw new Error("Method not implemented.");
  }
  postEntitiesAsync(
    entities: PokemonDetailsDTO[],
  ): Promise<ResponseModel<PokemonDetailsDTO[]>> {
    throw new Error("Method not implemented.");
  }
}
