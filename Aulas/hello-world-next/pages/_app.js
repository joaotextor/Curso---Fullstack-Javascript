import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <>
    <h1>FIXED TITLE</h1>
    <Component {...pageProps} />
  </>

  )
}
