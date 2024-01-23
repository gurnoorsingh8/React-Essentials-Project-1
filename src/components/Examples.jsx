import { CORE_CONCEPTS, EXAMPLES } from "../data.js"
import Section from "./Section.jsx";
import Tab from "./Tab.jsx";
import TabButton from "./TabButton.jsx"
import { useState } from "react"


export default function Examples({ }) {
    const [tabContent, setTabContent] = useState();
    // const tabContent = "Please"

    function handleSelect(content) {
        console.log(content);
        setTabContent(content)
    }

    return (
        <Section title="Examples" id="examples">
            <Tab
                buttonsContainer="menu"
                button={<>
                    <TabButton isSelected={tabContent === 'components'} onClick={() => handleSelect('components')}>
                        {CORE_CONCEPTS[0].title}
                    </TabButton>
                    <TabButton isSelected={tabContent === 'jsx'} onClick={() => { handleSelect('jsx') }}>
                        {CORE_CONCEPTS[1].title}
                    </TabButton>
                    <TabButton isSelected={tabContent === 'props'} onClick={() => { handleSelect('props') }}>
                        {CORE_CONCEPTS[2].title}
                    </TabButton>
                    <TabButton isSelected={tabContent === 'state'} onClick={() => { handleSelect('state') }}>
                        {CORE_CONCEPTS[3].title}
                    </TabButton>
                </>}>
                {!tabContent && <p>Please Select a Topic</p>}
                {tabContent && (
                    <div>
                        <h3>
                            {EXAMPLES[tabContent].title}
                        </h3>
                        <p>
                            {EXAMPLES[tabContent].description}
                        </p>
                        <pre>
                            {EXAMPLES[tabContent].code}
                        </pre>
                    </div>
                )}
            </Tab>
        </Section>
    );
}