import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Cabecalho from './src/components/cabecalho';
import DADOS from './src/dados/dadosJogos';
import Jogos from './src/components/jogos';
import Jogos2 from './src/components/jogos';
import Destaques from './src/components/destaque';
import NOVOS from './src/dados/novosJogos';
import Novos from './src/components/novos'
import Lancamentos from './src/lancamentos';
import BANNER from './src/dados/banner';
import Banner from './src/components/banner';
import Jordan from './src/components/jordan';
import Air from './src/components/airforce';
import AIR from './src/dados/dadoair';
import Dunk from './src/components/dunk';
import DUNK from './src/dados/dadosdunk';

export default function App() {
  return (
    <View style={{backgroundColor:'#d3d3d3'}} >
      <Cabecalho></Cabecalho>
      
     <View>
      <Banner
        imagem={"Banner1.png"}
        />
     </View> 
      
     <Jordan></Jordan>
<FlatList
      horizontal = {true}
      data = {DADOS}
      keyExtractor = {(item) => item.id}
      renderItem = { ({item}) => (

        <Jogos
        titulo={item.nome}
        imagem={item.imagem}
        valor={item.valor}
        />
      )}
      />
      <Air></Air>
      <FlatList
      horizontal = {true}
      data = {AIR}
      keyExtractor = {(item) => item.id}
      renderItem = { ({item}) => (

        <Jogos
        titulo={item.nome}
        imagem={item.imagem}
        valor={item.valor}
        />
      )}
      />
      <Dunk></Dunk>
      <FlatList
      horizontal = {true}
      data = {DUNK}
      keyExtractor = {(item) => item.id}
      renderItem = { ({item}) => (

        <Jogos
        titulo={item.nome}
        imagem={item.imagem}
        valor={item.valor}
        />
      )}
      />
    <Lancamentos></Lancamentos>  
    <FlatList
      horizontal = {true}
      data = {NOVOS}
      keyExtractor = {(item) => item.id}
      renderItem = { ({item}) => (

        <Novos
        titulo={item.nome}
        imagem={item.imagem}
        valor={item.valor}
        />
      )}
      />

    </View>
  );
}