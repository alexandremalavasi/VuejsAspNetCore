import CounterExample from 'components/counter-example'
import FetchData from 'components/fetch-data'
import HomePage from 'components/home-page'
import ListaPessoa from 'components/lista-pessoa'
import CamposDinamicos from 'components/campos-dinamicos'

export const routes = [
  { name: 'home', path: '/', component: HomePage, display: 'Home', icon: 'home' },
  { name: 'counter', path: '/counter', component: CounterExample, display: 'Counter', icon: 'graduation-cap' },
  { name: 'fetch-data', path: '/fetch-data', component: FetchData, display: 'Fetch data', icon: 'list' },
  { name: 'lista-pessoa', path: '/lista-pessoa', component: ListaPessoa, display: 'Lista Pessoa', icon: 'list' },
  { name: 'campos-dinamicos', path: '/campos-dinamicos', component: CamposDinamicos }
]
