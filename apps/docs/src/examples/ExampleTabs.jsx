import React from "react";
import { Tab, TabGroup } from "pres-start-core";
import { TabPanel } from "pres-start-core";
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Pres1 from "../assets/Pres-1.png";
import Pres2 from "../assets/Pres-2.png";
import Pres3 from "../assets/Pres-3.png";

export default function ExampleTabs() {
  const generateRadioGroupCode = () => {
    return `<TabGroup>
  <Tab icon={<HomeIcon />}>Home</Tab>
  <Tab icon={<SettingsIcon />}>Settings</Tab>
  <Tab icon={<InfoIcon />}>About</Tab>

  <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12">
      <img src="./src/assets/Pres-1.png" alt="" />

      <div className="md:col-span-2">
        <p>Presley, the stylish and spirited pup, could hardly contain his excitement as he pawed through his collection of bandanas, finally settling on one patterned with tiny guitars. Tonight was the big night: Medium Build was performing at the local outdoor amphitheater, and Presley had scored tickets for himself and his animal friends. He trotted over to the park, where Daisy the cat, sporting a leather jacket, and Hank the squirrel, strumming a makeshift acorn ukulele, were waiting. They greeted each other with wagging tails and purrs, ready for the adventure. As they made their way to the concert, Presley led the way with a confident bounce, his ears perked up to catch the distant sound checks.</p>
      </div>
    </div>
  </TabPanel>

  <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12">
      <div className="md:col-span-2">
        <p>The amphitheater was buzzing with energy when they arrived, lights twinkling in the dusk. Presley and his friends found a cozy spot near the front, where the grass was soft and the view was perfect. As Medium Build took the stage, Presley's tail wagged in rhythm with the first chords, and Daisy swayed her head coolly, pretending not to be too impressed. Hank, on the other hand, was already air-guitaring along, chittering excitedly. When the band launched into their hit song, Presley howled in pure joy, his soulful notes harmonizing surprisingly well with the lead singer's raspy voice. Fans around them cheered, charmed by the canine chorus.</p>
      </div>

      <img src="./src/assets/Pres-2.png" alt="" />
    </div>
  </TabPanel>

  <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12">
      <img src="./src/assets/Pres-3.png" alt="" />

      <div className="md:col-span-2">
        <p>As the night wore on, Presley's paws tapped to the beat, and he even got a nod from the bassist, who couldn't help but smile at the grooving pup. After the encore, the friends gathered under a nearby tree, recounting their favorite moments, still buzzing from the music. Presley couldn't help but feel proud of his little pack, knowing they’d shared a night of pure joy and rock 'n' roll. As they walked home under the starlit sky, Presley's heart was full, knowing that good music and great friends made life truly howl-worthy.</p>
      </div>
    </div>
  </TabPanel>
</TabGroup>`;
  };

  return (
    <>
      <div className="component-header">
        <h2 className="text-4xl">Tabs</h2>
      </div>

      <div className="component-wrapper">
        <TabGroup>
          <Tab icon={<HomeIcon />}>Home</Tab>
          <Tab icon={<SettingsIcon />}>Settings</Tab>
          <Tab icon={<InfoIcon />}>About</Tab>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12">
              <img src={Pres1} alt="" />

              <div className="md:col-span-2">
                <p>Presley, the stylish and spirited pup, could hardly contain his excitement as he pawed through his collection of bandanas, finally settling on one patterned with tiny guitars. Tonight was the big night: Medium Build was performing at the local outdoor amphitheater, and Presley had scored tickets for himself and his animal friends. He trotted over to the park, where Daisy the cat, sporting a leather jacket, and Hank the squirrel, strumming a makeshift acorn ukulele, were waiting. They greeted each other with wagging tails and purrs, ready for the adventure. As they made their way to the concert, Presley led the way with a confident bounce, his ears perked up to catch the distant sound checks.</p>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12">
              <div className="md:col-span-2">
                <p>The amphitheater was buzzing with energy when they arrived, lights twinkling in the dusk. Presley and his friends found a cozy spot near the front, where the grass was soft and the view was perfect. As Medium Build took the stage, Presley's tail wagged in rhythm with the first chords, and Daisy swayed her head coolly, pretending not to be too impressed. Hank, on the other hand, was already air-guitaring along, chittering excitedly. When the band launched into their hit song, Presley howled in pure joy, his soulful notes harmonizing surprisingly well with the lead singer's raspy voice. Fans around them cheered, charmed by the canine chorus.</p>
              </div>

              <img src={Pres2} alt="" />
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12">
              <img src={Pres3} alt="" />

              <div className="md:col-span-2">
                <p>As the night wore on, Presley's paws tapped to the beat, and he even got a nod from the bassist, who couldn't help but smile at the grooving pup. After the encore, the friends gathered under a nearby tree, recounting their favorite moments, still buzzing from the music. Presley couldn't help but feel proud of his little pack, knowing they’d shared a night of pure joy and rock 'n' roll. As they walked home under the starlit sky, Presley's heart was full, knowing that good music and great friends made life truly howl-worthy.</p>
              </div>
            </div>
          </TabPanel>
        </TabGroup>
      </div>

      <div className="component-code">
        <SyntaxHighlighter language="jsx" style={oneDark}>
          {generateRadioGroupCode()}
        </SyntaxHighlighter>
      </div>

      <div className="props-wrapper">
        <h3 className='text-2xl mb-6'>Props</h3>
        <table className="w-full border rounded-lg table-auto props">
          <thead className="props-header">
            <tr>
              <th className="props-cell">Name</th>
              <th className="props-cell">Details</th>
              <th className="props-cell">Default</th>
            </tr>
          </thead>

          <tbody>
            <tr className="props-row">
              <td className="props-cell"><code className="label-style">header</code></td>
              <td className="props-cell props-details">
                <code className="label-style">string</code>
                <span>The text displayed as the header of the modal. Just that - text.</span>
              </td>
              <td className="props-cell"><code className="label-style">NA</code></td>
            </tr>

            <tr className="props-row">
              <td className="props-cell"><code className="label-style">id</code></td>
              <td className="props-cell props-details">
                <code className="label-style">string</code>
                <span>A unique identifier for both the RadioGroup and the Radio components.</span>
              </td>
              <td className="props-cell"><code className="label-style">NA</code></td>
            </tr>

            <tr className="props-row">
              <td className="props-cell"><code className="label-style">onClose</code></td>
              <td className="props-cell props-details">
                <code className="label-style">callback function</code>
                <span>Toggles the modal by default. You can be clever here, it's your design system.</span>
              </td>
              <td className="props-cell"><code className="label-style">NA</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
