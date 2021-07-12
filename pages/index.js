import MainGrid from "../src/componentes/MainGrid"
import Box from "../src/componentes/Box"


export default function Home() {
  return (
    <MainGrid>
      <div className= "profileArea" style={{ gridArea: 'profileArea' }}>
         <Box>
          <img src="https://github.com/netomachado.png"/>
        </Box>
      </div>
      <div className= "welcomeArea" style={{ gridArea: 'welcomeArea' }}>
         <Box>
          Bem Vindo
         </Box>
      </div>
      <div className= "profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
         <Box>
          Pessoas da Comunidade
         </Box>
         <Box>
          Comunidades
         </Box>
      </div>
    </MainGrid>
    )
}
