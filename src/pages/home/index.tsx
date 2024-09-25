import { Heading, Text } from '@ignite-ui/react'
import { Background, Container, Hero } from './style';

import Image from "next/image"

import BackgroundImage from '../../assets/backgroundImage.svg'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="lg">
          Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.
        </Text>
      </Hero>

      <Background>
        <Image
          src={BackgroundImage}
          height={400}
          quality={100}
          priority
          alt='Calendario simbolizando a aplicacao'
        />
      </Background>
    </Container>
  );
}
