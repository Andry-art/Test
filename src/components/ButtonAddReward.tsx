import React, {Dispatch, FC, SetStateAction, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  open: Dispatch<SetStateAction<boolean>>;
}

const ButtonAddReward: FC<Props> = ({open}) => {
  const onPress = useCallback(() => {
    open(true);
  }, [open]);
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.plus}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000000',
    width: 70,
    height: 55,
    borderRadius: 50,
    position: 'absolute',
    bottom: 50,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    color: '#FFFFFF',
    fontSize: 30,
    lineHeight: 30,
    textAlign: 'center',
  },
});

export default ButtonAddReward;
