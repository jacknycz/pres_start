import React from "react";
import Pres from "../assets/Pres";
import PaletteGenerator from "../components/PaletteGenerator";

export default function Colors() {
    return (
        <>
            <div className="flex flex-col">
                <h2 className='text-4xl'>Menu</h2>
            </div>

            <div className="flex w-full">
                <PaletteGenerator />
            </div>
        </>
    );
}