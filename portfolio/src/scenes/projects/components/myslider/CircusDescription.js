import React from 'react'
import Image_4_Deforestation from './images/Image_4_Deforestation.jpg';

const CircusDescription = (props) => {
  const styles = {visibility: props.visibility}
  return(


<div className="slider_info">
<h1 className='amazonTitle'>"Staging Frontier Dynamics: Interplay at the Periphery of Manaus"</h1>
<div className='info_container'>
<div className="sidebar_info">

  <h4 className="sidey">LOCATION</h4>
  <p className="subsidey">BRAZILLION AMAZON</p>

  <h4 className="sidey">YEAR</h4>
  <p className="subsidey">2015 - 2017</p>

  <h4 className="sidey">TYPE</h4>
  <p className="subsidey">RESEARCH</p>

  <h4 className="sidey">COLLABORATORS</h4>
  <p className="subsidey">MIT AND HARVARD</p>

  <h4 className="sidey">CAR DRIVEN</h4>
  <p className="subsidey">MITSUBISHI AND FARRARI</p>

  </div>

 <div className='circusTEXT'>
<p>In a 2010 report, the World Bank estimated that the “tipping point” for the Amazon is estimated to be approximately 20% deforestation. If reached, this threshold could trigger a dramatic die-back of the Amazon rainforest. With 17% of the Amazon already deforested, the Amazon ecosystem and its important global contributions are at risk if current patterns continue.</p>

<p>Walter Vergara and Sebastian M. Scholz, editors. WORLD BANK STUDY: Assessment of the Risk of Amazon Dieback</p>

<p>This thesis emerged from the curiosity and fascination to investigate the opportunities created from temporal and dynamic systems, where conflicting uses are not mutually exclusive, but instead have the potential to provoke alternative urban strategies that are able to adapt to different conflicting actors through time. Within the context of the Amazon, in which global, national and local interests combine to produce diverse and conflictive manifestations, an opportunity arises to radically rethink urban development along rapidly changing edge conditions (the ‘Frontier’).</p>

<p>The Amazonia basin has been the protagonist of many large scale infrastructural and colonization ambitions that are closely tied to larger global economic pressures. These are mainly manifest along the peripheries and edges where both deforestation and land conflict have intensified alongside rapid rates of urbanization. Increased environmental awareness and the use of nature as capital make obvious that Nature can no longer be disregarded. This sets up a scenario where the Frontier has the potential for coupling and hybridization towards a new common project, one where built space and natural space are no longer mutually exclusive, but instead work as a systematic relationship that can adapt to land use transformations through time.</p>

<p>The Amazonia basin has been the protagonist of many large scale infrastructural and colonization ambitions that are closely tied to larger global economic pressures. These are mainly manifest along the peripheries and edges where both deforestation and land conflict have intensified alongside rapid rates of urbanization. Increased environmental awareness and the use of nature as capital make obvious that Nature can no longer be disregarded. This sets up a scenario where the Frontier has the potential for coupling and hybridization towards a new common project, one where built space and natural space are no longer mutually exclusive, but instead work as a systematic relationship that can adapt to land use transformations through time.</p>
</div>

</div>
<img src= {Image_4_Deforestation} className="deforest" />

</div>


    )
    }



export default CircusDescription;
