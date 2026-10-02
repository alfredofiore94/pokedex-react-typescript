import type { PokemonBaseDTO } from "../dto/pokemon-base-dto";
import type { ResponseModel } from "../dto/response-model";
import { api } from "./api";
import type { IRepository } from "./i-repository";

export class PokemonBaseRepository implements IRepository<PokemonBaseDTO> {
  async getEntitiesAsync(): Promise<ResponseModel<PokemonBaseDTO[]>> {
    try {
      const url = api.BASE_URL + api.GET_POKEMON_LIST_URL;
      const response: Response = await fetch(url);

      if (response.ok) {
        const responseModel: ResponseModel<PokemonBaseDTO[]> = {
          payload: (await response.json()).results,
          metadata: {
            result: true,
            errorMessage: "",
          },
          statusCode: response.status,
        };
        return responseModel;
      }

      return {
        metadata: {
          result: false,
          errorMessage: "Errore getBasePokemon" + response.statusText,
        },
        statusCode: response.status,
      };
    } catch (error) {
      const responseModel: ResponseModel<PokemonBaseDTO[]> = {
        metadata: {
          result: false,
          errorMessage: "Errore getBasePokemon" + error,
        },
      };
      return responseModel;
    }
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
  getEntityIdAsync(entityId: string): Promise<ResponseModel<PokemonBaseDTO>> {
    throw new Error("Method not implemented.");
  }
}
