import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8257E5',
    flex: 1,
    justifyContent: 'center',
    padding: 40
  },
  
  content: {
    flex:1,
    justifyContent: "center",
  },

  title: {
    // fontFamily: 'Archivo_700Bold',
    fontWeight: '700',
    color: '#FFF',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },

  description: {
    // fontFamily: 'Poppins_400Regular',
    marginTop: 24,
    color: '#D4C2FF',
    fontSize: 16,
    lineHeight: 26,
    maxWidth: 230,
  },

  okButton: {
    marginVertical: 40,
    backgroundColor: '#04D361',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  okButtonText: {
    // fontFamily: 'Archivo_700Bold'
    fontWeight: '700',
    color: '#FFF',
    fontSize: 16,
  }

});

export default styles;
