// imports
////imports
import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
// import useData from "../hooks/useData";

import getCroppedImageUrl from "../services/imageUrl";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
    onSelectedGenre: (genre:Genre) => void;
    selectedGenre: Genre | null
}
const GenreList = ({onSelectedGenre,selectedGenre}:Props) => {
    ///usestates
    const {data,isLoading} = useGenres()
    ///useEffects
    //helper functions
  return (
    <>
    {/* jsx goes anything render */}
        <List paddingBottom={5}>
            {isLoading && <Spinner/>}
        {data?.results.map((genre) => <ListItem marginBottom={3} key={genre.id}>
        <HStack>
            <Image objectFit={'cover'} boxSize={16} borderRadius={4} src={getCroppedImageUrl(genre.image_background)}/>
            <Button color={genre.id === selectedGenre?.id ? 'blue.500': 'normal'} fontSize={'lg'} variant={'link'} onClick={() => onSelectedGenre(genre)
            }>{genre.name}</Button>
        </HStack>
        </ListItem>)}
        </List>
    </>
  )
}
export default GenreList