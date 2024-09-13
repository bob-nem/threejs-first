"use client"

import {Canvas, useThree} from '@react-three/fiber'
import { Suspense } from 'react'
import Model from './model'
import { useProgress, Html, ScrollControls } from '@react-three/drei'

function Loader() {
    const { progress, active } = useProgress()
    return <Html center>{progress.toFixed(1)} % Loaded</Html>
}

export default function Scene () {
    return (
        <Canvas>
            <directionalLight position={[-5, -5, 5]} intensity={4} />
            <Suspense fallback={<Loader />}>
                <ScrollControls damping={0.6} pages={4}>
                    <Model />
                </ScrollControls>
            </Suspense>
        </Canvas>
    )
}