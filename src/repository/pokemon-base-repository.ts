import type { PokemonBaseDTO } from "../dto/pokemon-base-dto";
import type { RequestModel } from "../dto/request-model";
import type { ResponseModel } from "../dto/response-model";
import { api } from "./api";
import type { IRepository } from "./i-repository";

export class PokemonBaseRepository implements IRepository<PokemonBaseDTO> {
  async getEntitiesAsync(): Promise<ResponseModel<PokemonBaseDTO[]>> {
    throw new Error("Method not implemented.");
  }
  async getEntityAsync(): Promise<ResponseModel<PokemonBaseDTO>> {
    try {
      const queryParams: string = "?offset=0&limit=999999";

      const url = api.BASE_URL + api.GET_POKEMON_LIST_URL + queryParams;
      const response: Response = await fetch(url);

      if (response.ok) {
        const responseModel: ResponseModel<PokemonBaseDTO> = {
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
          errorMessage: "Errore getBasePokemon" + response.statusText,
        },
        statusCode: response.status,
      };
    } catch (error) {
      const responseModel: ResponseModel<PokemonBaseDTO> = {
        metadata: {
          result: false,
          errorMessage: "Errore getBasePokemon" + error,
        },
      };
      return responseModel;
    }
  }
  postEntityAsync(
    entity: RequestModel<PokemonBaseDTO>,
  ): Promise<ResponseModel<PokemonBaseDTO>> {
    throw new Error("Method not implemented.");
  }
  postEntitiesAsync(
    entities: RequestModel<PokemonBaseDTO>[],
  ): Promise<ResponseModel<PokemonBaseDTO[]>> {
    throw new Error("Method not implemented.");
  }
  async getEntityIdAsync(
    requestModel: RequestModel<PokemonBaseDTO>,
  ): Promise<ResponseModel<PokemonBaseDTO>> {
    try {
      let queryParams: string = "";
      if (requestModel.queryParams) {
        queryParams = "?";
        requestModel.queryParams.forEach((param) => {
          queryParams = queryParams + param.key + "=" + param.values[0] + "&";
        });
      }

      const url = api.BASE_URL + api.GET_POKEMON_LIST_URL + queryParams;
      const response: Response = await fetch(url);

      if (response.ok) {
        const responseModel: ResponseModel<PokemonBaseDTO> = {
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
          errorMessage: "Errore getBasePokemon" + response.statusText,
        },
        statusCode: response.status,
      };
    } catch (error) {
      const responseModel: ResponseModel<PokemonBaseDTO> = {
        metadata: {
          result: false,
          errorMessage: "Errore getBasePokemon" + error,
        },
      };
      return responseModel;
    }
  }
}
