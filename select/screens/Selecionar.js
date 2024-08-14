import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import {
  Padding,
  Color,
  FontFamily,
  Border,
  FontSize,
  StyleVariable,
} from "../GlobalStyles";

const Selecionar = () => {
  return (
    <View style={styles.selecionar}>
      <LinearGradient
        style={styles.wrapper}
        locations={[0, 1]}
        colors={["rgba(65, 0, 2, 0)", "rgba(65, 0, 2, 0.5)"]}
      >
        <ImageBackground
          style={[styles.icon, styles.iconSpaceBlock]}
          resizeMode="cover"
          source={require("../assets/frame27.png")}
        >
          <View style={styles.selecioneParent}>
            <Text
              style={[styles.selecione, styles.piticoLayout]}
            >{`Selecione `}</Text>
            <Text style={[styles.pitico, styles.textTypo]}>{`Pitico `}</Text>
          </View>
          <View style={[styles.iconButton, styles.bpmParentPosition]}>
            <View style={[styles.container, styles.buttonFlexBox]}>
              <View style={styles.stateLayer}>
                <Image
                  style={styles.icon1}
                  contentFit="cover"
                  source={require("../assets/icon.png")}
                />
              </View>
            </View>
          </View>
          <Image
            style={styles.forwardIcon}
            contentFit="cover"
            source={require("../assets/forward.png")}
          />
          <Image
            style={styles.forwardIcon1}
            contentFit="cover"
            source={require("../assets/forward1.png")}
          />
        </ImageBackground>
      </LinearGradient>
      <View style={[styles.bpmParent, styles.parentSpaceBlock]}>
        <Text style={[styles.bpm, styles.bpmClr]}>BPM</Text>
        <Text style={[styles.text, styles.bpmClr]}>0</Text>
      </View>
      <View
        style={[
          styles.certifiqueSeOEquipamentoEsParent,
          styles.parentSpaceBlock,
        ]}
      >
        <Text style={[styles.certifiqueSeOEquipamento, styles.bpmClr]}>
          Certifique-se o equipamento está devidamente equipado.
        </Text>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <View style={styles.stateLayer1}>
            <Text style={[styles.labelText, styles.labelTypo]}>
              Medir Frequência
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buildingBlocksHeadline}>
        <Text style={[styles.title, styles.titleLayout]}>Medidor</Text>
      </View>
      <Image
        style={styles.noisyGradientsIcon}
        contentFit="cover"
        source={require("../assets/noisygradients.png")}
      />
      <View style={[styles.navigationBar, styles.navigationPosition]}>
        <View style={styles.segmentFlexBox}>
          <View style={[styles.iconContainer, styles.iconContainerFlexBox]}>
            <View style={[styles.stateLayer2, styles.iconSpaceBlock]}>
              <Image
                style={styles.icon1}
                contentFit="cover"
                source={require("../assets/home.png")}
              />
            </View>
          </View>
          <Text style={[styles.labelText1, styles.labelFlexBox]}>Inicio</Text>
        </View>
        <View style={[styles.segment2, styles.segmentFlexBox]}>
          <View style={[styles.iconContainer1, styles.iconContainerFlexBox]}>
            <View style={[styles.stateLayer2, styles.iconSpaceBlock]}>
              <Image
                style={styles.icon1}
                contentFit="cover"
                source={require("../assets/cardiology.png")}
              />
            </View>
          </View>
          <Text style={[styles.labelText2, styles.labelFlexBox]}>Medidor</Text>
        </View>
        <View style={[styles.segment2, styles.segmentFlexBox]}>
          <View style={[styles.iconContainer1, styles.iconContainerFlexBox]}>
            <View style={[styles.stateLayer2, styles.iconSpaceBlock]}>
              <Image
                style={styles.icon1}
                contentFit="cover"
                source={require("../assets/pet-supplies.png")}
              />
            </View>
          </View>
          <Text style={[styles.labelText2, styles.labelFlexBox]}>Conta</Text>
        </View>
      </View>
      <View style={[styles.navigationBar1, styles.navigationPosition]}>
        <View style={styles.segmentFlexBox}>
          <View style={[styles.iconContainer, styles.iconContainerFlexBox]}>
            <View style={[styles.stateLayer2, styles.iconSpaceBlock]}>
              <Image
                style={styles.icon1}
                contentFit="cover"
                source={require("../assets/home.png")}
              />
            </View>
          </View>
          <Text style={[styles.labelText1, styles.labelFlexBox]}>Inicio</Text>
        </View>
        <View style={[styles.segment2, styles.segmentFlexBox]}>
          <View style={[styles.iconContainer1, styles.iconContainerFlexBox]}>
            <View style={[styles.stateLayer2, styles.iconSpaceBlock]}>
              <Image
                style={styles.icon1}
                contentFit="cover"
                source={require("../assets/cardiology.png")}
              />
            </View>
          </View>
          <Text style={[styles.labelText2, styles.labelFlexBox]}>Medidor</Text>
        </View>
        <View style={[styles.segment2, styles.segmentFlexBox]}>
          <View style={[styles.iconContainer1, styles.iconContainerFlexBox]}>
            <View style={[styles.stateLayer2, styles.iconSpaceBlock]}>
              <Image
                style={styles.icon1}
                contentFit="cover"
                source={require("../assets/pet-supplies.png")}
              />
            </View>
          </View>
          <Text style={[styles.labelText2, styles.labelFlexBox]}>Conta</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
  },
  piticoLayout: {
    width: 196,
    letterSpacing: 1,
    color: Color.schemesOnPrimary,
  },
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 16,
  },
  bpmParentPosition: {
    zIndex: 1,
    justifyContent: "center",
  },
  buttonFlexBox: {
    backgroundColor: Color.palettesPrimary40,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  parentSpaceBlock: {
    marginTop: 48,
    alignSelf: "stretch",
  },
  bpmClr: {
    color: Color.colorBlack,
    letterSpacing: 1,
  },
  labelTypo: {
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
  },
  titleLayout: {
    lineHeight: 20,
    letterSpacing: 0,
  },
  navigationPosition: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    height: 80,
    borderTopWidth: 1,
    borderColor: Color.overlaysDefault,
    bottom: 0,
    width: 360,
    borderStyle: "solid",
    backgroundColor: Color.schemesOnPrimary,
    left: 0,
    position: "absolute",
    flexDirection: "row",
  },
  iconContainerFlexBox: {
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
  },
  labelFlexBox: {
    marginTop: 4,
    color: Color.schemesOnErrorContainer,
    textAlign: "center",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.m3LabelMedium_size,
    alignSelf: "stretch",
  },
  segmentFlexBox: {
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  selecione: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 16,
    fontSize: FontSize.m3LabelMedium_size,
    letterSpacing: 1,
  },
  pitico: {
    marginTop: 8,
    fontSize: FontSize.size_base,
    textAlign: "left",
    width: 196,
    letterSpacing: 1,
    color: Color.schemesOnPrimary,
  },
  selecioneParent: {
    justifyContent: "center",
    zIndex: 0,
  },
  icon1: {
    width: 24,
    height: 24,
  },
  stateLayer: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
  },
  iconButton: {
    width: 48,
    height: 48,
    padding: Padding.p_9xs,
    marginLeft: 10,
    alignItems: "center",
  },
  forwardIcon: {
    right: 10,
    zIndex: 2,
    height: StyleVariable.iconSmall,
    width: StyleVariable.iconSmall,
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  forwardIcon1: {
    left: 10,
    zIndex: 3,
    height: StyleVariable.iconSmall,
    width: StyleVariable.iconSmall,
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  icon: {
    height: "100%",
    paddingVertical: 25,
    backgroundColor: "transparent",
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_base,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  wrapper: {
    height: 270,
    zIndex: 0,
  },
  bpm: {
    fontSize: 22,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 16,
    alignSelf: "stretch",
  },
  text: {
    fontSize: 72,
    marginTop: 16,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 16,
  },
  bpmParent: {
    zIndex: 1,
    justifyContent: "center",
  },
  certifiqueSeOEquipamento: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  labelText: {
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.m3LabelMedium,
  },
  stateLayer1: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  button: {
    height: 40,
    marginTop: 24,
    alignSelf: "stretch",
  },
  certifiqueSeOEquipamentoEsParent: {
    zIndex: 2,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#1e1e1e",
    display: "flex",
    width: 297,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    alignItems: "center",
  },
  buildingBlocksHeadline: {
    borderColor: "rgba(202, 196, 208, 0.5)",
    borderBottomWidth: 1,
    height: 100,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    borderStyle: "solid",
    backgroundColor: Color.schemesOnPrimary,
    width: 360,
    left: 0,
    top: 0,
    zIndex: 3,
    position: "absolute",
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  noisyGradientsIcon: {
    display: "none",
    zIndex: 4,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    height: 800,
  },
  stateLayer2: {
    width: 64,
    height: 32,
    paddingVertical: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: Color.surfacesSurfaceTint8,
    justifyContent: "center",
    overflow: "hidden",
  },
  labelText1: {
    fontWeight: "600",
    fontFamily: FontFamily.m3LabelMediumProminent,
  },
  iconContainer1: {
    width: 32,
    justifyContent: "center",
    flexDirection: "row",
  },
  labelText2: {
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
  },
  segment2: {
    marginLeft: 8,
  },
  navigationBar: {
    zIndex: 5,
  },
  navigationBar1: {
    zIndex: 6,
  },
  selecionar: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.schemesBackground,
    width: "100%",
    paddingHorizontal: StyleVariable.space800,
    paddingTop: 120,
    paddingBottom: 40,
    alignItems: "center",
    overflow: "hidden",
    height: 800,
    flex: 1,
  },
});

export default Selecionar;
