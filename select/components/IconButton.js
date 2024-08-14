import * as React from "react";
import { Padding, Border, Color } from "../GlobalStyles";

const IconButton = () => {
  return (
    <View style={styles.stylefilledStateenabled}>
      <View style={[styles.container, styles.containerFlexBox]}>
        <View style={[styles.stateLayer, styles.containerFlexBox]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  stateLayer: {
    padding: Padding.p_5xs,
  },
  container: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.schemesPrimary,
    overflow: "hidden",
  },
  stylefilledStateenabled: {
    width: 48,
    height: 48,
    padding: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconButton;
