import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import Astro from '../public/images/works/Astro.png'
import fortnite from '../public/images/works/fortnite.png'
import DisneyPlus from '../public/images/works/DisneyPlus.png'
import tesla from '../public/images/works/tesla.png'
import netflix from '../public/images/works/netflix.png'
import weather from '../public/images/works/weather.png'
import textutilis from '../public/images/works/textutilis.png'
import univercity from '../public/images/works/univercity.png'
import lambo from '../public/images/works/lambo.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="astro" title="Astro" thumbnail={Astro}>
            A Astro is E-Commerce website. At Astro, we strive to deliver the
            best quality products.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="lambo" title="Lamborgihini" thumbnail={lambo}>
            Lamborgihini clone is very price less for me. I included the login
            and logout funtionaliy...
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="fortnite" title="Fortnite" thumbnail={fortnite}>
            Fortnite is a Gaming Website.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="disney"
            title="Disney + Plus "
            thumbnail={DisneyPlus}
          >
            Disney+ is the streaming home of Disney, Pixar, Marvel, Star Wars,
            National Geographic, and more.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="tesla" thumbnail={tesla} title="Tesla">
            Tesla is accelerating the transition to sustainable energy with
            electric car.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="netflix" thumbnail={netflix} title="Netflix">
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of ...
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="weather" thumbnail={weather} title="Weather">
            Weather Forecast including feels like temperature, wind gust and
            chance of rain or just search and get details
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="testUtilis"
            thumbnail={textutilis}
            title="TextUtilis"
          >
            TextUtils can help you generate text or numbers. · Number Formatting
            TextUtils
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="univercity"
            thumbnail={univercity}
            title="Univercity"
          >
            Univercity website
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
