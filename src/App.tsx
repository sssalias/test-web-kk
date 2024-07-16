import { useKeycloak } from "@react-keycloak/web"

const App = () => {

  const {keycloak} = useKeycloak()

  return (
    <div>
      <button onClick={() => keycloak.logout()}>Выйти</button>
    </div>
  )
}

export default App