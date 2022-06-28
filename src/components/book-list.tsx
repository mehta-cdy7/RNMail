import { Book } from "@/fixtures/models";
import { Theme } from "@/themes";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { ColorProps, createBox } from "@shopify/restyle";
import { FlatListProps } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import BookListItem from "./book-list-item";

const StyledFlatList = createBox<Theme, FlatListProps<Book>>(FlatList)

const StyledBottomSheetFlatList = createBox<Theme, FlatListProps<Book>>(
    BottomSheetFlatList
)

type Props ={
    inBottomSheet?:boolean
    onPressItem:(bookId:string)=>void
    headerComponent?: React.FC<any>
} & ColorProps<Theme>

const BookList: React.FC<Props>=({
    onPressItem, 
    headerComponent, 
    color, 
    inBottomSheet})=>{

        return(<BookListItem {...item} ></BookListItem>)
    }

    export default BookList