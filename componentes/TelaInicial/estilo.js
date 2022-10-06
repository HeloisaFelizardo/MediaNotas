import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  tela: {
    width: '100%',
    justifyContent: "center",
    alignItems: 'center',
  },

  titulo: {
    fontSize: 14,
    marginVertical: 30,
    paddingHorizontal: 20,
    textAlign: "center"
  },

  linhaInput: {
    flexDirection: 'row',
    alignItems: "center",
    marginBottom: 10
  },

  inputFocus: {
    borderWidth: 1,
    borderColor: '#1f4f66',
    borderRadius: 3,
    width: 100,
    paddingHorizontal: 5,
    marginLeft: 10
  },

  inputNormal: {
    borderWidth: 1,
    borderColor: '#d5d5d5',
    borderRadius: 3,
    width: 100,
    paddingHorizontal: 5,
    marginLeft: 10
  },

  boxNumero: {
    borderColor: '#13b0c5',
    backgroundColor: '#13b0c5',
    borderWidth: 5,
    height: 150,
    width: 150,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 0
  },

  numero: {
    fontSize: 50,
    color: '#fff'
  },
  boxBotao: {
    width: 200,
    marginTop: 20
  },
  resultado: {
    padding: 20,
    borderRadius: 5,
    fontWeight: '700',
    fontSize: 20,
    border: 1,
    //display: "none",
  },
  bgVerde: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 5,
    fontWeight: '700',
    fontSize: 20,
    //display: "block",

  },
  bgVermelho: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 5,
    fontWeight: '700',
    fontSize: 20,
    //display: "block",
  }
});

export default estilo;