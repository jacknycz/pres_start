import React from "react";
import { Menu } from "pres-start-core";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowForward, PlayArrow, Add } from "@mui/icons-material";

export default function ExampleMenus() {
    const generateMenuCode = () => {
        return `<Menu>
    <Menu.Button 
        variant="ghost"
    >
        Menu Button
    </Menu.Button>
    
    <Menu.Dropdown>
        <Menu.Item>
            <PlayArrow className="mr-2" />
            Menu Item 1
        </Menu.Item>
        <Menu.Item>Menu Item 1</Menu.Item>
        <Menu.Item>Menu Item 1</Menu.Item>
    </Menu.Dropdown>
</Menu>`;
    }
    return (
        <>
            <div className="component-header">
                <h2 className="text-4xl">Menu</h2>
            </div>

            <div className="component-wrapper">
                <Menu>
                    <Menu.Button 
                        variant="ghost"
                    >
                        Menu Button
                    </Menu.Button>

                    <Menu.Dropdown>
                        <Menu.Item>
                            <PlayArrow className="mr-2" />
                            Menu Item 1
                        </Menu.Item>
                        <Menu.Item>Menu Item 1</Menu.Item>
                        <Menu.Item>Menu Item 1</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </div>
            
            <div className="component-wrapper">
                <Menu>
                    <Menu.Button as="icon-button"
                        variant="ghost"
                        icon={<Add />}
                    />

                    <Menu.Dropdown>
                        <Menu.Item>
                            <PlayArrow className="mr-2" />
                            Menu Item 1
                        </Menu.Item>
                        <Menu.Item>Menu Item 1</Menu.Item>
                        <Menu.Item>Menu Item 1</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </div>

            <div className="component-code">
                <SyntaxHighlighter language="jsx" style={oneDark}>
                    {generateMenuCode()}
                </SyntaxHighlighter>
            </div>

            <div className="props-wrapper">
                <h3 className='text-2xl mb-1'>Sub-components</h3>
                <p className="text-gray-700 mb-6">Not so much the props this time, but how it works</p>
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
                            <td className="props-cell"><code className="label-style">Menu</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">primary | secondary | ghost | destructive</code>
                                <span>Controls the color, no affect on operation.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">primary</code></td>
                        </tr>

                        <tr className="props-row">
                            <td className="props-cell"><code className="label-style">Menu.Button</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">small | default | large</code>
                                <span>Probably not the first time you'll see "basic options, add more" and it's easy.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">default</code></td>
                        </tr>

                        <tr className="props-row">
                            <td className="props-cell"><code className="label-style">Menu.Dropdown</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">default | small | pill | square</code>
                                <span>Select your shape - normally a tightly rounded corner.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">default</code></td>
                        </tr>

                         <tr className="props-row">
                            <td className="props-cell"><code className="label-style">Menu.Item</code></td>
                            <td className="props-cell props-details">
                                <code className="label-style">MaterialIconName</code>
                                <span>Right now it's setup to just take the name of the Material Icon you want to use. Can be updated to use whatever icons you want.</span>
                            </td>
                            <td className="props-cell"><code className="label-style">NA</code></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}