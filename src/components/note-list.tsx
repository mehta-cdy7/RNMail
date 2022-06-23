import React,{ useCallback } from "react";
import { FlatListProps, NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { createBox } from "@shopify/restyle";
import { Theme } from "@/themes";
import { Note } from "@/fixtures/models";
import NOTES from "@/fixtures/notes";
import NoteListItem from "./note-list-item";
import Animated ,{AnimateProps} from "react-native-reanimated";
import { Box } from "@/atoms";

const StyledFlatList = createBox<Theme, AnimateProps<FlatListProps<Note>>>(Animated.FlatList)

interface Props {
    contentInsetTop:number,
    onScroll: (event:NativeSyntheticEvent<NativeScrollEvent>)=>void
}

const NoteList: React.FC<Props> = ({onScroll , contentInsetTop})=>{
    const renderItem = useCallback(({item})=>{
        return <NoteListItem {...item}/>
    },[])
    
    return (
        <StyledFlatList
            contentInsetAdjustmentBehavior="automatic"
            data={NOTES}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            width={'100%'}
            onScroll={onScroll}
            scrollEventThrottle={16}
            ListHeaderComponent={<Box width="100%" height={contentInsetTop}></Box>}
        />
    )
} 

export default NoteList