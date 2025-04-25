import React from "react";
import Menu from "../components/Menu/Menu";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowForward, PlayArrow } from "@mui/icons-material";

export default function ExampleMenus() {
    const generateMenuCode = () => {
        return `<Menu>
    <Menu.Button>Menu Button</Menu.Button>
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
            <div className="flex flex-wrap">
                <h2 className='text-4xl'>Menu</h2>
            </div>

            <div className="component-wrapper">
                <Menu>
                    <Menu.Button>Menu Button</Menu.Button>
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

            <div className='flex gap-6 my-6 flex-wrap'>
                <div className="flex flex-col">
                    <h4>Variant</h4>
                    <select className="border p-2">
                        <option value="primary">Primary</option>
                        <option value="secondary">Secondary</option>
                        <option value="ghost">Ghost</option>
                    </select>
                </div>
            </div>

            <div className="my-12 w-full">
                <SyntaxHighlighter language="jsx" style={oneDark}>
                    {generateMenuCode()}
                </SyntaxHighlighter>
            </div>
        </>
    );
}