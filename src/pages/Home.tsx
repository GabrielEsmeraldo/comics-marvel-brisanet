import { useEffect, useState } from "react"
import axios from 'axios'
import { ComicContainer, ComicsSection, Input, InputContainer, MainContainer, SearchButton, SearchSection, Title } from "../styles/Home"
import { Modal } from "../components/Modal"
import { Header } from "../components/Header"
import { MagnifyingGlass } from 'phosphor-react'
import { Card } from "../components/Card"
import { Footer } from "../components/Footer"
import { ModalMap } from "../components/ModalMap"


export function Home() {
  const timeStamp = '1673288918'
  const apiKey = 'de94a34d9a3ecdb701dd529e49207740'
  const md5 = '1ffb982e364b2171dd859f902c8effea'

  const [comicsData, setComicsData] = useState<any[]>([])
  const [modal, setModal] = useState(false)
  const [selectedComic, setSelectedComic] = useState(Number)
  const [keyWords, setKeyWords] = useState('')
  const [modalMap, setModalMap] = useState(false)

  console.log(comicsData)

  function handleModalMap() {
    console.log('Hello')
    setModalMap(true)
    setModal(false)
  }

  useEffect(() => {
    axios
      .get(`http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`)

      .then(response => {
        const data = response.data.data.results
        setComicsData(data)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [])

  function handleModal(id: number) {
    const comicId = id

    setModal(true)
    setSelectedComic(comicId)
  }

  function handleSearch(event: any) {
    event.preventDefault()

    setKeyWords(event.target.searchInput.value)
  }

  function handleSend(){
    setModal(false)
    setModalMap(false)
  }

  return (
    <MainContainer>
      <Header />

      <SearchSection>
        <InputContainer onSubmit={handleSearch}>
          <MagnifyingGlass />
          <Input type="text" placeholder="Pesquise por quadrinhos..." name="searchInput" />
          <SearchButton type="submit">Buscar</SearchButton>
        </InputContainer>
      </SearchSection>

      <ComicsSection>
        <Title>Quadrinhos</Title>

        <ComicContainer >
          {keyWords === '' ?
            comicsData.map((comic) => {
              return (
                <Card key={comic.id} id={comic.id} title={comic.title} image={comic.thumbnail.path + '.' + comic.thumbnail.extension} price={comic.prices[0].price === 0 ? 'Sem Estoque' : 'USD ' + comic.prices[0].price} handleModal={handleModal} />
              )
            }) :

            comicsData.map((comic) => {
              const title = comic.title.toLowerCase()
              const result = title.includes(keyWords.toLowerCase())

              if (result) {
                return (
                  <Card key={comic.id} id={comic.id} title={comic.title} image={comic.thumbnail.path + '.' + comic.thumbnail.extension} price={comic.prices[0].price} handleModal={handleModal} />
                )
              }

            })
          }

          {modal && <Modal setModal={setModal} comicsData={comicsData} selectedComic={selectedComic} handleModalMap={handleModalMap} />}
          {modalMap && <ModalMap setModalMap={setModalMap} handleSend={handleSend}/>}
        </ComicContainer>
      </ComicsSection>

      <Footer />

    </MainContainer>
  )
}