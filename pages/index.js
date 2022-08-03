import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLinkSharp, IoCodeSharp } from 'react-icons/io5'
import { BiCodeCurly } from 'react-icons/bi'
const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Abhishek Kuntare
          </Heading>
          <p>Software Engineer ( Web / App / Developer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/Abhishek.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Intro
        </Heading>
        <Paragraph>
          My self Abhishek pravin Kuntare. Im a Software Developer from
          Amravati. Im a quick learner and ready to take new challenges. I use
          Java,C++,C ,Python as a Programming language.I know the little bit
          Technology language such as HTML , CSS , Tailwind css, Chakara Ui
          ,BootStrap for Styling, for Develping React js , Next js, Node js
          ,Express js .Database i use MongoDB. For Developing Android/Web/Ios
          app ill use the React Native as a Programming language.
        </Paragraph>
        <NextLink href="/works/inkdrop">
          <Link>Astro</Link>
        </NextLink>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Amravati, Maharashtra.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completed the School From Shree Ram Krushna Krida Vidyalaya.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed the 12th From Rural institute of JR College.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Engineering From Prof Ram Meghe institute Of Technology and Research.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>Programming, Solving Cubes, Playing Football</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/abhishek-kuntare-65662421b/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLinkSharp} />}
              >
                @Linkdin
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://github.com/Abhishekkuntare" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @GitHub
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://leetcode.com/Abhishekkuntare/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={BiCodeCurly} />}
              >
                @LitCode
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link
              href="https://www.codechef.com/users/abhishek_0210"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoCodeSharp} />}
              >
                @CodeChef
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
