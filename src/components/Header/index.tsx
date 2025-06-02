import { useNavigation } from "@react-navigation/native";
import {
  Avatar,
  AvatarContainer,
  BackButton,
  BackIcon,
  Container,
  Logo,
} from "./styles";

import logoImg from "@assets/logo.png";
import AvatarImg from "@assets/avatar.png";

type BackButtonProps = {
  isBackButtonVisible?: boolean;
  isLogoVisible?: boolean;
  isAvatarVisible?: boolean;
};

export function Header({
  isBackButtonVisible,
  isLogoVisible = true,
  isAvatarVisible = true,
}: BackButtonProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      {isBackButtonVisible && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
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
