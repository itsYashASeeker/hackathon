import React from "react";

export default function ModelC() {
    return (
        <mesh>
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="geometry" />
        </mesh>
    )
}