import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { Button,Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps < any, any> {};


export const Home = ( {navigation}: Props ) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}> Hola desde Home</Text>
        <Button
        title = "Ir a pagina Notificaciones"
        onPress = { () => navigation.navigate('Notifications')}
        />
    </View>
  )
}
