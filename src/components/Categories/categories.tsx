import { FlatList } from "react-native";
import { styles } from "./style";
import { Category } from "@/components/Category";
import { categories } from "@/utils/categorys";

export function Categories() {
    return(
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Category name={item.name} icon={item.icon} isTVSelectable={false}/>
        } horizontal
        style={styles.container}
        contentContainerStyle={styles.content}
        showsHorizontalScrollIndicator={false}
        
        />
    )
}


