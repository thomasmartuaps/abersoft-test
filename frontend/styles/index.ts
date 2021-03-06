import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    width: '100%',
    height: '100%',
    // padding: 24
  },
  gradientBg: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 375,
    height: '100%',
    padding: 24,
    paddingBottom: 0,
  },
  onboardBg: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 375,
    height: '100%',
    padding: 24,
  },
  buttonLoginRegister: {
    backgroundColor: '#3549FB',
    justifyContent: 'center',
    alignItems: 'center',
    width: 287, 
    height: 33,
    borderRadius: 25.5,
    marginTop: 22,
    marginBottom: 22,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 32,
  },
  buttonTextLoginReg: {
    color: '#FFF',
    fontWeight: '500',
    fontSize: 16.2587,
  },
  textInput: {
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#3549FB',
    width: 287,
    paddingBottom: 8,
    marginTop: 17,
    marginBottom: 17,
  },
  drawer: {
    position: "absolute",
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    bottom: 0,
    left: 0,
    width: 375,
    height: 400,
    backgroundColor: '#FFF',
    margin: 0,
    padding: 0,
    borderTopLeftRadius: 51,
    borderTopRightRadius: 51,
  },
  buttonLandingPage: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 287, 
    height: 33,
    borderRadius: 25.5,
    marginTop: 22,
    marginBottom: 22,
  },
  buttonText: {
    color: '#000',
    fontWeight: '500',
    fontSize: 16.2587,
  }
}) 

export default styles;
