import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Gallery from '../components/Gallery'
import DataJson from '../data/data.json'
import About from "../components/About"
import '../assets/css/custom.css'

const Data = DataJson[0];
const MetaData = Data.MetaData[0];

class HomeIndex extends React.Component {

  render() {
    const siteDescription = "Props Landing Page"

    return (
      <Layout>
        <Helmet
          link={[
            { rel: "icon", type: "image/png", sizes: "16x16", href: `` }
          ]}
        >
          <title>{MetaData.SiteName}</title>
          <meta name="description" content={MetaData.Description} />
        </Helmet>

        <div id="main">
          <About about={MetaData.About} />

          {<Gallery images={Data.Products.map(({ Name, Preco, Parcela, Imagem }) => ({
            Preco,
            Name,
            Parcela,
            Imagem
          }))} />}

        </div>

      </Layout>
    )
  }
}

export default HomeIndex