import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>

        <Image
          style={styles.avatar}
          source={{ uri: 'https://scontent.fgru8-1.fna.fbcdn.net/v/t1.0-9/89998776_1757906744361116_6020552033021460480_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=W4MvE9eSF2sAX-wV02n&_nc_ht=scontent.fgru8-1.fna&oh=a6ca0143ec887268cd91623aa73636bf&oe=5F55881F' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Isaque Souza</Text>
          <Text style={styles.subject}>Química</Text>

        </View>
      </View>

      <Text style={styles.bio}>
        Entusiasta das melhores tecnologias de quimica avançada.
        {'\n'}{'\n'}
        Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
      </Text>

      <View style={styles.footer}>
        
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 140,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>

          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>

        </View>

      </View>

    </View>
  );
}

export default TeacherItem;