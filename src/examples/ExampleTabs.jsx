import React from "react";
import Tab from "../components/Tabs/Tab";
import TabGroup from "../components/Tabs/TabGroup";
import TabPanel from "../components/Tabs/TabPanel";

export default function ExampleTabs() {
  return (
    <TabGroup>
      <Tab icon="home">Home</Tab>
      <Tab icon="settings">Settings</Tab>
      <Tab icon="info">About</Tab>

      <TabPanel>
        <p>Welcome to the Home tab!</p>
      </TabPanel>
      <TabPanel>
        <p>Adjust your settings here.</p>
      </TabPanel>
      <TabPanel>
        <p>Learn more about us on this tab.</p>
      </TabPanel>
    </TabGroup>
  );
}
