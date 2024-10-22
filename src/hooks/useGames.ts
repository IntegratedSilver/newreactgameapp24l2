import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { CACHE_KEY_GAMES } from "../constant";
import { Platform } from "./usePlatforms";
import APIClient, { FetchResponse } from "../services/apiClient";


const apiClient = new APIClient<Game>('/games')

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}


// useGames hook refactored to use useQuery
const useGames = (gameQuery: GameQuery) =>

  useQuery<FetchResponse<Game>>({
  queryKey: [CACHE_KEY_GAMES, gameQuery],
  queryFn: () =>
              apiClient
                .getAll({
                  params:{
                            genres:gameQuery.genre?.id, 
                            parent_platforms:gameQuery.platform?.id,
                            ordering:gameQuery.sortOrder,
                            search:gameQuery.searchText
                        }
                })
   
  });

export default useGames;
