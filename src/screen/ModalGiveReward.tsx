import {useFormik} from 'formik';
import React, {Dispatch, FC, SetStateAction, useCallback} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import iconCloseSource from '../../assets/close.png';
import {useDispatch} from 'react-redux';
import {addReward} from '../store/actions/RewardsActions';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../components/Button';

interface Props {
  isShown: boolean;
  close: Dispatch<SetStateAction<boolean>>;
}

const initialValues = {
  to: '',
  amount: '',
  message: '',
};

const ModalGiveReward: FC<Props> = ({isShown, close}) => {
  const dispatch = useDispatch();
  const {handleChange, handleSubmit, values, resetForm} = useFormik<{
    to: string;
    amount: string;
    message: string;
  }>({
    initialValues,
    validateOnChange: false,
    onSubmit: (values, {resetForm}) => {
      const amount =
        Math.round(
          Number(
            values.amount
              .replace(/\,/g, '.')
              .replace(/[^.\d]+/g, '')
              .replace(/^([^\.]*\.)|\./g, '$1'),
          ) * 100,
        ) / 100;

      const newReward = {
        rewordedTo: values.to,
        amount: amount,
        message: values.message,
        data: new Date(),
      };

      dispatch(addReward(newReward));
      close(false);
      resetForm();
    },
  });

  const onCloseModal = useCallback(() => {
    close(false);
    resetForm();
  }, [close, resetForm]);

  return (
    <Modal
      animationType="slide"
      transparent
      visible={isShown}
      onRequestClose={onCloseModal}>
      <KeyboardAvoidingView
        enabled={Platform.OS === 'ios'}
        behavior="padding"
        style={styles.keyboard}>
        <View style={styles.firstView}>
          <View style={styles.constainer}>
            <ScrollView
              keyboardShouldPersistTaps={'handled'}
              contentContainerStyle={styles.scrollViewContainer}>
              <Text style={styles.modalText}>Give reward</Text>
              <View style={styles.modalView}>
                <Text style={styles.inputTitle}>To</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('to')}
                  value={values.to}
                />
                <Text style={styles.inputTitle}>Amount</Text>
                <TextInput
                  keyboardType="number-pad"
                  style={styles.input}
                  onChangeText={handleChange('amount')}
                  value={values.amount}
                />

                <Text style={styles.inputTitle}>Message</Text>

                <TextInput
                  style={styles.inputMessage}
                  multiline
                  onChangeText={handleChange('message')}
                  value={values.message}
                />
                <View style={styles.buttonContainer}>
                  <Button
                    onSubmit={handleSubmit}
                    disabled={Boolean(
                      values.amount && values.message && values.to,
                    )}
                  />
                </View>

                <View style={styles.iconContainer}>
                  <TouchableOpacity onPress={onCloseModal}>
                    <Image source={iconCloseSource} style={styles.icon} />
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
  scrollViewContainer: {
    backgroundColor: '#000000',
    flexGrow: 1,
  },
  constainer: {
    maxHeight: '82%',
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  firstView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    flex: 1,
    backgroundColor: '#000000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginTop: 30,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 22,
    color: '#FFFFFF',
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 2,
    borderColor: '#51473D',
    padding: 10,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  inputTitle: {
    color: '#51473D',
    fontSize: 16,
    marginVertical: 10,
  },
  inputMessage: {
    height: 100,
    width: '100%',
    borderWidth: 2,
    borderColor: '#51473D',
    padding: 10,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  icon: {
    tintColor: '#FFFFFF',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: 30,
  },
  addButton: {
    backgroundColor: '#51473D',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ModalGiveReward;
