import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import HeroSection from "../components/HeroSections/HeroSection"
import TrustBar from "../components/TrusBar/TrustBar"
import ProductWorkflow from "../components/ProductWorkflow/ProductWorkflow"
import ProductReviews from "../components/ProductReviews/ProductReviews"
import BestOptions from "../components/BestOptions/BestOptions"

const heroIndexData = {
  contentData:{
    title:"ELAPCE - ваш гид по миру зарубежной недвижимости",
    text:"Предлагаем две стратегии инвестирования: простая аренда с доходностью до 7% годовых и проекты добавленной стоимости с доходностью до 15% годовых.",
    ctaText:"Искать",
    ctaInfo:"более 5000 объектов в 32 странах мира",
    textTrial:""
  },
}

const BestOptionsData = {
  title:"Лучшие предложения",
  text:"Нашей приоритетной целью является предоставление полной и прозрачной информации нашим клиентам. С другой стороны дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки дальнейших направлений развития. Равным образом дальнейшее развитие различных форм деятельности позволяет оценить значение модели развития.",
}

const trustBarData = {
  headline:"The world’s most ambitious startup and SMB sales teams accelerate their growth with Close",
  logoImages:[
    "./500startups-logo-mono.svg","/zapier-logo-mono.svg","/customerio-logo-mono.svg","/toggl-logo-mono.svg","/naturebox-logo-mono.svg","/domo-logo-mono.svg"
  ]
}

const WorkflowData = {
  titleWorkflow:"Win more deals with industry-leading, intuitive sales tools",
  descriptionWorkflow:"Close’s next-level automation and outreach helps you grow revenue right away.",
  stepsWorkflow:[
    {
      stepVisual:"/sales-crm-with-lead-activity.png",
      stepVisualType:"image",
      stepName:"SELL",
      stepTitle:"Never miss a hot lead",
      stepText:"A deal rarely goes from start to finish over email—you need a multi-channel sales outreach approach. With Close, bring calling, SMS, and video into one inbox. Streamline your stack and sell more with multi-channel outreach at scale.",
      testimonialStepText:"The email sequences on Close have been invaluable. They have enabled us to streamline our workflows and have allowed me to improve my productivity by at least 50%.",
      testimonialStepAuthorName:"Conal Maguire",
      testimonialStepAutorPosition:"Head of Business Operations at TalentPool",
      testimonialAuthorIcon:"/conal.jpg",
      stepReverse:false
    },
    {
      stepVisual:"/crm-power-dialer.mp4",
      stepVisualType:"video",
      stepName:"OPTIMIZE",
      stepTitle:"Get an hour back in every day",
      stepText:"Multiple tabs and apps disrupt your day. Get full context on every deal with communication, tasks, and reminders in one central sales hub. With automatic logging and syncing, you’ll spend less time filling out notes and more time closing deals.",
      testimonialStepText:"We didn’t start getting traction until we started using Close. I don’t know if the company would still be here if we hadn’t implemented it.",
      testimonialStepAuthorName:"Tim Griffin",
      testimonialStepAutorPosition:"CEO of Cloosiv",
      testimonialAuthorIcon:"/tim-griffin.jpg",
      stepReverse:true
    },
    {
      stepVisual:"/crm-with-sms.mp4",
      stepVisualType:"video",
      stepName:"GROW",
      stepTitle:"Stay focused on the deals that matter most",
      stepText:"Turn data into insights with powerful, intuitive reporting. Close dynamically tracks all sales activities—from time spent on calls to revenue generated—to provide visibility into your most valuable opportunities.",
      testimonialStepText:"I love Close. It has helped me 4x my outreach volume and new deals.",
      testimonialStepAuthorName:"Gary Brown",
      testimonialStepAutorPosition:"New Business Development, Oxford Road",
      testimonialAuthorIcon:"/garybrown.jpg",
      stepReverse:false
    },
  ]
}

const productReviewsData = {
  titleReview:"Onboard in minutes–start selling today",
  descriptionReview:"Some CRMs take months to implement. With Close, you can set up or migrate in under 10 minutes. We even import past emails from G Suite so you don’t skip a beat.",
  ratings:[
    {
      logo:"/software-advice-logo.png",
      ratingScore:"5",
      ratingStar:5,
    },
    {
      logo:"/g2crowd-logo.svg",
      ratingScore:"4.3",
      ratingStar:4,
    },
    {
      logo:"/capterra-logo.svg",
      ratingScore:"5",
      ratingStar:5,
    },
    {
      logo:"/getapp-logo.svg",
      ratingScore:"4.8",
      ratingStar:5,
    }
  ]
}

const IndexPage = () => {
  
  const buildings = useStaticQuery(graphql`
    query {
        file(absolutePath: {regex: "/buildings.png/"}) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return (
  <Layout>
      <SEO title="Elapce" keywords={[`Elapce`, `real estate`, `overseas`]} />
      <HeroSection 
        heroImage={buildings.file.childImageSharp}
        title={heroIndexData.contentData.title}
        text={heroIndexData.contentData.text}
        ctaText={heroIndexData.contentData.ctaText}
        ctaInfo={heroIndexData.contentData.ctaInfo}
      />
      <BestOptions 
        reversed={true}
        title={BestOptionsData.title}
        text={BestOptionsData.text}
      />
      <TrustBar 
        headline={trustBarData.headline}
        logoImages={trustBarData.logoImages}
      />
      <ProductWorkflow 
        titleWorkflow={WorkflowData.titleWorkflow}
        descriptionWorkflow={WorkflowData.descriptionWorkflow}
        stepsData={WorkflowData.stepsWorkflow}
      />
      <ProductReviews 
        titleReview={productReviewsData.titleReview}
        descriptionReview={productReviewsData.descriptionReview}
        reviewsData={productReviewsData.ratings}
      />
  </Layout>
  )
}


export default IndexPage
