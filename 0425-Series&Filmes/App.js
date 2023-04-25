import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BannerFilmes from './src/components/bannerFilmes';
import Filmes from './src/data/movies';
import Series from './src/data/series'
import Header from './src/components/header';
import SearchBar from './src/components/searchbar';
import CardFilmes from './src/components/cardFilmes/index';
import BannerTitulo from './src/components/bannerFilmes/style';

export default function App() {
  return (
    <View style={styles.container}>
     <Header></Header>
     <SearchBar></SearchBar>
     <BannerFilmes></BannerFilmes>

      <Text style = {BannerTitulo.textBanner}>Filmes</Text>
      <View style = {{width: '90%'}}>
      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data = {Filmes}
      keyExtractor = {(item) => item.id }
      renderItem = { ({item}) => (

        <CardFilmes
        
        titulo = {item.nome}
        nota = {item.nota}
        imagem = {item.imagem}

        />

    
      ) }

     />
    </View> 

      <Text style = {BannerTitulo.textBanner}>Series</Text>
      <View style = {{width: '90%'}}>
      <FlatList 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data = {Series}
      keyExtractor = {(item) => item.id}
      renderItem = { ({item}) => (

        <CardFilmes

        titulo = {item.nome}
        nota = {item.nota}
        imagem = {item.imagem}

        />

      ) }
     />
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#141a29',
    alignItems:"center"
  },
});
