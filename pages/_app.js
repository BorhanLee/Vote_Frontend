import '../styles/globals.css'
import React, { useEffect, useState } from "react";
import AppContext from '../context/AppContext';
import styles from '../styles/Home.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head'
import { Alert, Navbar, Nav } from 'react-bootstrap'
import VoteData from "../public/voteData.json"
import Link from 'next/link'
import { useRouter } from 'next/router'

const base = process.env.NODE_ENV === 'production' ? "." : "";

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [result, setResult] = useState(VoteData)
  const [shares, setShares] = useState(2)
  const [role, setRole] = useState(null)
  const [voting, setVoting] = useState(false)
  const [ownedVotes, setOwnedVotes] = useState([])

  function logout(message) {
    setRole(null)
    setUser(null)
    toast(message)    
    router.push("/")
  }

  return (
    <AppContext.Provider value={{
      user: user,
      setUser: setUser,
      role: role,
      setRole: setRole,
      voting: voting,
      result: result,
      ownedVotes: ownedVotes,
      setOwnedVotes: setOwnedVotes,
      logout: logout
    }}>
      <Head>
        <title>De.Vote</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous" />
      </Head>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
        <picture>
          <img
            alt=""
            src={`${base}/devotelogo.png`}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          </picture>
          {' '}
          Devote
        </Navbar.Brand>
        <Nav>
          <Nav.Item style={{ marginRight: "10%" }}>
            <Link href="/" as={"/Vote_Frontend"} ><a style={{ color: "white" }}>Home</a></Link>
          </Nav.Item>
          {(!user) ?
            <Nav.Item style={{ marginRight: "10%" }}>
              <Link href="/Vote_Frontend/login" ><a style={{ color: "white" }}>Login</a></Link>
            </Nav.Item>
            :
            <Nav.Item style={{ marginRight: "10%" }}>
              <a style={{ color: "white" }} onClick={(e)=>{e.preventDefault();logout("Log out successfully")}}>Logout</a>
            </Nav.Item>
          }
        </Nav>
      </Navbar>
      <ToastContainer position="top-center"
        autoClose={500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
