import React, {FC, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  onSubmit: () => void;
  disabled?: boolean;
}

const Button: FC<Props> = ({onSubmit, disabled}) => {
  const onPress = useCallback(() => {
    onSubmit();
  }, [onSubmit]);
  console.log(disabled);
  return (
    <TouchableOpacity
      disabled={!disabled}
      style={!disabled ? styles.buttonDisabled : styles.button}
      onPress={onPress}>
      <Text style={styles.text}>Give</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 250,
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    height: 50,
    width: 250,
    backgroundColor: '#FFFFFF80',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default Button;
