import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  formHeading: {
    marginTop: '8%',
    marginLeft: '10%',
    color: 'black',
    fontWeight: '500',
    fontSize: 35,
  },
  formInput: {
    marginVertical: '5%',
    paddingLeft: 10,
    fontSize: 15,
    backgroundColor: '#eae9e9',
  },

  formText: {
    fontSize: 22,
    fontWeight: '500',
    color: 'black',
  },

  imageSelectionPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '2%',
    height: 70,
  },
  imageSelectionButton: {
    paddingVertical: 8,
    justifyContent: 'center',
  },

  tableHeader: {
    textAlign: 'center',
    padding: 5,
    paddingBottom: 10,
    color: 'black',
    fontWeight: '600',
  },
});
