import { useNavigation } from "@react-navigation/native";
import {
  Avatar,
  AvatarContainer,
  BackButton,
  BackIcon,
  ButtonIconTypeStyleProps,
  Container,
  Logo,
} from "./styles";

import logoImg from "@assets/logo.png";
import AvatarImg from "@assets/avatar.png";

type BackButtonProps = {
  isBackButtonVisible?: boolean;
  isLogoVisible?: boolean;
  isAvatarVisible?: boolean;
  type?: ButtonIconTypeStyleProps;
};

export function Header({
  type = "PRIMARY",
  isBackButtonVisible = false,
  isLogoVisible = false,
  isAvatarVisible = false,
}: BackButtonProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      {isBackButtonVisible && (
        <BackButton onPress={handleGoBack}>
          <BackIcon type={type} />
        </BackButton>
      )}

      {isLogoVisible && <Logo source={logoImg} />}

      {isAvatarVisible && (
        <AvatarContainer>
          <Avatar source={AvatarImg} />
        </AvatarContainer>
      )}
    </Container>
  );
}
