import { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './style';
import { colors } from '@/styles/colors';
import { router } from 'expo-router';
import { Categories } from '@/components/Categories';
import { Input } from '@/components/input';
import { Button } from '@/components/button';

import { linkStorage } from '@/storage/link-storage';

export default function Add() {
    const [category,setCategory] = useState("")
    const [name,setName] = useState<string>()
    const [url,setUrl] = useState<string>("")

    async function handleAdd(){
        try{

            
            if (!category) {
                return Alert.alert('Categoria', 'Selecione uma categoria')
            }
    
            if (!name?.trim()) {
                return Alert.alert('Nome', 'Informe um nome')
            }
    
            if (!url?.trim()) {
                return Alert.alert('URL', 'Informe a URL')
            }

            await linkStorage.save({ 
                id: new Date().getTime().toString(),
                name,
                url,
                category,
              })

              Alert.alert("Sucesso", "Novo Link adicionado", [
                {
                  text: "OK",
                  onPress: () => router.back(),
                },
              ])



            } catch (error) {
              Alert.alert("Erro", "Não foi possível salvar o link")
              console.log(error)
            }
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name='arrow-back' size={32} color={colors.gray[200]} />
                </TouchableOpacity>

                <Text style={styles.title}>Novo</Text>
            </View>
            <Text style={styles.label}>Selecione uma categoria</Text>
            <Categories onChange={setCategory} selected={category} />

            <View style={styles.form}>
                <Input placeholder='Nome' onChangeText={setName} />
                <Input placeholder='URL' onChangeText={setUrl} autoCorrect={false} autoCapitalize='none'/>

                <Button title='Adicionar' onPress={handleAdd}/>
            </View>
        </View>
    )
}