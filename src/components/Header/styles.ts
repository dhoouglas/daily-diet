import styled, { useTheme } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

export type ButtonIconStyleProps = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled.View`
  width: 100%;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(ArrowLeft).attrs<ButtonIconStyleProps>(
  ({ type }: ButtonIconStyleProps) => ({
    size: 36,
    color:
      type === "PRIMARY"
        ? useTheme().COLORS.GREEN_700
        : useTheme().COLORS.RED_700,
  })
)``;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const AvatarContainer = styled.View`
  justify-items: center;
  align-items: center;

  width: 55px;
  height: 55px;
  border-color: ${() => useTheme().COLORS.GRAY_600};
  border: 3px;
  border-radius: 100px;
  box-sizing: border-box;
  object-fit: cover;
`;
export const Avatar = styled.Image`
  width: 49px;
  height: 49px;
  border-radius: 100px;
`;
