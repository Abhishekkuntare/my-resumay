import { useRouter } from 'next/router'
import { Button, Container, Flex, Heading, Input } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Myaccount = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')
  const [user, setUser] = useState({ value: null })

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('myuser'))
    if (!user) {
      router.push('/')
    }
    if (user && user.token) {
      setUser(user)
      setEmail(user.email)
    }
  })

  // const handleUserSubmit = async () => {
  //   let data = { token: user.token }
  //   let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
  //   let responce = await res.json()
  //   console.log(responce)
  // }

  const handleChange = e => {
    if (e.target.name == 'name') {
      setName(e.target.value)
    } else if (e.target.name == 'password') {
      setPassword(e.target.value)
    } else if (e.target.name == 'cPassword') {
      setCPassword(e.target.value)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const data = { name, email, password }
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    let responce = await res.json()
    console.log(responce)
    setEmail('')
    setPassword('')
    if (responce.success) {
      localStorage.setItem(
        'myuser',
        JSON.stringify({
          token: responce.token,
          email: responce.email
        })
      )
      toast.success('You are successfully loged in!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
      setTimeout(() => {
        router.push(process.env.NEXT_PUBLIC_HOST)
      }, 1000)
    } else {
      toast.error(responce.error, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
  }

  return (
    <div>
      {' '}
      <Container>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Flex
          border={0.5}
          borderRadius="gray.200"
          alignItems="center"
          justifyContent="center"
        >
          <Flex direction="column" p={12} rounded={6}>
            <Heading mb={6}>My Account</Heading>

            <form method="POST" onSubmit={handleSubmit}>
              <Input
                value={name}
                onChange={handleChange}
                name="name"
                type="text"
                placeholder=" your name"
                variant="filled"
                mb={3}
                required
              />
              {user && user.token ? (
                <Input
                  value={user.email}
                  name="email"
                  type="email"
                  required
                  placeholder="xyz.@.com"
                  variant="filled"
                  mb={3}
                  readOnly
                />
              ) : (
                <Input
                  value={email}
                  onChange={handleChange}
                  name="email"
                  type="email"
                  required
                  placeholder="xyz.@.com"
                  variant="filled"
                  mb={3}
                />
              )}
              <Input
                value={password}
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="*********"
                variant="filled"
                mb={4}
                required
              />
              <Input
                value={cPassword}
                onChange={handleChange}
                name="cPassword"
                type="password"
                placeholder="confirm password "
                variant="filled"
                mb={4}
                required
              />
              <Button
                // onClick={handleUserSubmit}
                width={[250, 400, 400, 500]}
                type="submit"
                colorScheme="teal"
              >
                Update
              </Button>
            </form>
          </Flex>
        </Flex>
      </Container>
    </div>
  )
}

export default Myaccount
