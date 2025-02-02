import { View, Image, TouchableOpacity } from "react-native";

import { style } from "./style";

import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/Categories/categories";
import { Link } from "@/components/link";

export default function Index() {
  const handleDetails = () => {
    console.log("teste")
  };
  return (
    <View style={style.container}>
      <View style={style.header}>
          <Image source={require("@/assets/logo.png")} style={style.logo} />
          <TouchableOpacity>
            <MaterialIcons name='add' size={32} color={colors.green[300]} />
          </TouchableOpacity>
                    
      </View>

        <Categories />

        <Link name="RocketSeat" url="https://teste.com" onDetails={handleDetails}/>

    </View>
  )
}



