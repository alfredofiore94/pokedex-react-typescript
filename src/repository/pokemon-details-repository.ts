import type { PokemonDetailsDTO } from "../dto/pokemon-details-dto";
import type { ResponseModel } from "../dto/response-model";
import { api } from "./api";
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
  async getEntityIdAsync(
    entityId: string,
  ): Promise<ResponseModel<PokemonDetailsDTO>> {
    try {
      const url = api.BASE_URL + api.GET_POKEMON_DETAILS_URL + entityId;
      console.log("URL", url);

      const response: Response = await fetch(url);

      if (response.ok) {
        const responseModel: ResponseModel<PokemonDetailsDTO> = {
          payload: await response.json(),
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
          errorMessage: "Errore getDetailsPokemon" + response.statusText,
        },
        statusCode: response.status,
      };
    } catch (error) {
      const responseModel: ResponseModel<PokemonDetailsDTO> = {
        metadata: {
          result: false,
          errorMessage: "Errore getDetailsPokemon" + error,
        },
      };
      return responseModel;
    }
  }
}
