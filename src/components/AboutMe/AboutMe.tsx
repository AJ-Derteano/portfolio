import { Image } from 'antd-mobile';
import React from 'react';
import styled from 'styled-components';
import isMobile from 'ismobilehook';
import avatarImg from '@/assets/Avatar.jpeg';

const AboutMe: React.FC = () => {
  return (
    <AboutMeStyle>
      {isMobile() && <Image src={avatarImg} />}
      {isMobile() && <h1>Hola!. Soy Andrés Derteano</h1>}

      <section>
        <p>
          <h1>Hola!. Soy Andrés Derteano</h1>
          "¡Hola! Soy un apasionado desarrollador de software de 25 años, con un
          enfoque especializado en entornos Node.js. Mi experiencia abarca el
          espectro completo, desde la creación de aplicaciones web con React y
          TypeScript hasta el desarrollo de backend sólido con Nest.js. Además,
          he incursionado en el mundo de las aplicaciones móviles utilizando
          React Native. A lo largo de mi trayectoria, he contribuido
          significativamente en diversos proyectos y colaborado con varias
          empresas para ofrecer soluciones tecnológicas innovadoras y
          eficientes. Mi dedicación a la excelencia técnica y la resolución
          creativa de problemas me impulsa a seguir creciendo en el emocionante
          campo del desarrollo de software."
        </p>
        <Image src='./public/Code typing-rafiki.png' />
      </section>
    </AboutMeStyle>
  );
};

export const AboutMeStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  img {
    width: 60%;
    border-radius: 50%;
    margin: 0 auto;
  }

  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    p {
      text-align: justify;
      font-size: 1.2rem;
    }

    img {
      transform: scaleX(-1);
    }
  }
`;

export default AboutMe;
