import { StyleSheet, Text, View } from "react-native";
import CartCard from "../components/CartCard";

const CartSreen = () => {
  return (
    <View style={styles.cartSreen}>
     
      <CartCard />
    </View>
  );
};

export default CartSreen;

const styles = StyleSheet.create({
  cartScreen: {},
});
