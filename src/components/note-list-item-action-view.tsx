import { AnimatedBox, Box } from "@/atoms";
import { SharedValue, useAnimatedStyle } from "react-native-reanimated";
import FeatherIcon from "./icons";

interface Props {
    progress: Readonly<SharedValue<number>>
}

const NoteListItemActionView: React.FC<Props> =({progress})=>{
    const iconStyle = useAnimatedStyle(()=>({
        transform:[
            {
                scale:progress.value
            }
        ]
    }))

    return(
        <Box flex={1} 
        bg={"$primary"}
        flexDirection='row'
        alignItems={'center'}
        justifyContent={'center'}
        pr='xl'
        >
            <AnimatedBox 
            flexDirection={'row'} 
            alignItems={'center'} 
            justifyContent={'flex-end'}
            style={iconStyle}>
                <FeatherIcon name="folder" color='white' size={18}/>
                <FeatherIcon name="arrow-right" color='white' size={12}/>
            </AnimatedBox>
        </Box>
    )
}

export default NoteListItemActionView