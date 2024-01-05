import { useEffect, useState } from 'react'
import './App.css'
import Profile from './Profile'
import Loading from './Loading'

function App() {
  const [profile, setProfile] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://api.github.com/users/dkoncius')
      const result = await resp.json()
      setProfile(result)
    }

    fetchData()
  }, [])

  return (
    <>
      {profile ? <Profile profile={profile}/> : <Loading profile={profile}/>}
    </>
  )
}

export default App
