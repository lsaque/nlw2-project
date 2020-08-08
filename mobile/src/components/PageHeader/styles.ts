import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#8247E5',
  },

  topBar: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between"
  },

  title: {
    // fontFamily: 'Archivo_700Bold',
    fontWeight: '700',
    color: '#FFF',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40,
  },

});

export default styles;