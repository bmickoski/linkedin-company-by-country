import { ActivityIndicator, StyleSheet, View } from "react-native";
import colors from "../styles/colors";

export const LoadingOverlay: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
});
