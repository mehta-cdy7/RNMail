import {Note} from '@/fixtures/models';
import {Box, Text} from '@/atoms';
import React from 'react'

export interface ListItemProps extends Note{}

const NoteListItem: React.FC<ListItemProps> = props =>{
    return (
        <Box bg='$background'>
            <Box bg='$background' px='lg' py='sm'>
            <Text fontWeight={'bold'} ellipsizeMode={'tail'} numberOfLines={1} ms={'xs'}>
                {props.title}
            </Text>
            <Text 
                ellipsizeMode='tail'
                numberOfLines={2}
                fontSize={14}
                opacity={0.7}>
                {props.body}
            </Text>
            </Box>
        </Box>
    )
}

export default NoteListItem