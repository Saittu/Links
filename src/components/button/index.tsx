import { styles } from "./styles";
import { Text, TouchableOpacity, type TouchableOpacityProps} from "react-native";

type Props = TouchableOpacityProps & {
    title: string;
}

export function Button({title, ...rest}: Props){
    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}