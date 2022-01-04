import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  body: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    width: '100%',
    height: '12%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#048BA8',
  },

  headingText: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 20,
    marginBottom: 5,
    color: '#2F2F2F',
    fontFamily: 'monospace',
  },

  bodyText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'monospace',
  },

  bgcolor: {
    backgroundColor: '#048BA8',
  },

  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 5,
  },

  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },

  input: {
    width: '70%',
    borderWidth: 2,
    padding: 8,
    fontSize: 17,
    borderRadius: 5,
    borderColor: '#2F2F2F',
    marginVertical: 7,
  },
});
