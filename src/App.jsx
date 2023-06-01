import * as THREE from "three"
import React, { Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { EffectComposer, ASCII } from "@react-three/postprocessing"
import { Route, Switch } from "wouter"
import Model from "./Model"
import "./App.css"
import Full from "./Full.jsx"
import Ascii from "./Ascii"

function App() {
  return (
    <Switch>
      <Route path="/" component={Ascii} />
      <Route path="/full" component={Full} />
      <Route>404, Not Found!</Route>
    </Switch>
  )
}

function Rig() {
  return useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      1.5 + state.mouse.x / 4,
      0.075
    )
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      1.5 + state.mouse.y / 4,
      0.075
    )
  })
}

export default App
