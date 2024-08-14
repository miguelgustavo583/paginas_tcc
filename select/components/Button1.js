import * as React from "react";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Button1 = ({ labelText = "Label" }) => {
  return (
    <View style={[styles.stylefilledStateenabledS, styles.stateLayerFlexBox]}>
      <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
        <Text style={styles.labelText}>{labelText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stateLayerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelMedium,
    color: Color.schemesOnPrimary,
    textAlign: "center",
  },
  stateLayer: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
  },
  stylefilledStateenabledS: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.schemesPrimary,
    height: 40,
    overflow: "hidden",
  },
});

export default Button1;
