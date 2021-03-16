import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectHeader from "../components/ProjectComponents/ProjectHeader/ProjectHeader"
import ProjectDescription from "../components/ProjectComponents/ProjectDescription/ProjectDescription"
import { graphql } from "gatsby"


const ProjectData = {
  location:"Испания, Гранада",
  price:"от 64 000 евро",
  area:"46-102 м2",
  bedrooms:"2-4",
  bathrooms:"1-2",
  facilities:["полностью меблирована","техника","перва линия моря","паркинг","детская площадка","терраса"],
  name: "Carrer de Mallorca, 401",
  description: "<p>Жилой комплекс City Tower строится на участке, площадью 3780 м2 и состоит из двух блоков по 8 этажей и 110 квартир.</p> <p>Это современные дома, возведение которых ведется по индивидуальному архитектурному проекту. Из окон квартир и с балконов открывается великолепный вид на море, горы и крепость Аланьи.</p> <p>В комплексе находится взрослый и детский бассейн, удобная беседка с местом для барбекю, детская площадка.</p> <p>На свободном участке земли  проектом предусмотрено декоративное озеленение: красивый газон, фикусовые деревья, экзотические цветы и растения, фонтаны.<p> В комплексе имеется большой крытый паркинг и открытая стоянка для автомобилей. Стоит сказать, что территория комплекса недоступна для посторонних, имеется круглосуточная охрана, видеонаблюдение, а автоматизированные системы безопасности обеспечивают надежную охрану жилых помещений. </p> В комплексе развитая социальная инфраструктура : крытый бассейн, зал для фитнеса, пилатеса и йоги, бильярд, настольный теннис, детская игровая комната, комнаты для переодевания и др.Проекты квартир предполагают, прежде всего, комфорт и уют.<p> Технические детали квартир: стальные двери, домофон, подвесные потолки со скрытым и точечным освещением, моющиеся стены, алюминиевые двойные стеклопакеты,. На полу 1-го класса - керамогранит. В кухне и ванной комнате - современные встроенные шкафы, разработанные дизайнером специально для данного проекта: лакированные кухонные шкафы МДФ, гранитная поверхность.</p> В ванной имеется электрический проточный нагреватель воды, душевая кабина и другое оборудование.В каждой квартире предусмотрена телефонная проводка.Наш проект предусмотрит все нюансы, чтобы   сделать проживание в этом комплексе очень комфортабельным и безопасным.</p>"
}

const ObjectPage = ({data}) => {
  
  return (
  <Layout>
      <SEO title="Elapce" keywords={[`Elapce`, `real estate`, `overseas`]} />
      <ProjectHeader images={data.allFile.edges} projectName={ProjectData.name} />
      <ProjectDescription 
        description={ProjectData.description} 
        location={ProjectData.location}
        price={ProjectData.price}
        area={ProjectData.area}
        bedrooms={ProjectData.bedrooms}
        bathrooms={ProjectData.bathrooms}
        facilities={ProjectData.facilities}
      />
  </Layout>
  )
}


export const query = graphql`
  query ProjectImages {
    allFile(filter: {relativeDirectory: {eq: "project"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ObjectPage
