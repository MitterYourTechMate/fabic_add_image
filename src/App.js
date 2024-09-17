import logo from "./logo.svg"
import "./App.css"
import * as fabric from "fabric"
import { useRef } from "react"

function App() {
  const canvasref = useRef()
  const handleAddImage = (e) => {
    const canvas = new fabric.Canvas(canvasref.current)
    let imgObj = e.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(imgObj)
    reader.onload = (e) => {
      let imageUrl = e.target.result
      let imageElement = document.createElement("img")
      imageElement.src = imageUrl
      imageElement.onload = function () {
        let image = new fabric.Image(imageElement)
        image.set({
          left: 0,
          top: 0,
          scaleY: 0.1,
          scaleX: 0.1,
        })
        canvas.add(image)
        canvas.centerObject(image)
        canvas.setActiveObject(image)
      }
    }
  }
  return (
    <div className="container">
      <input
        type="file"
        accept="image/*"
        label="Add Image"
        style={{
          position: "absolute",
          top: "25%",
          left: "30%",
        }}
        onChange={handleAddImage}
      />
      <canvas
        width="300"
        height="300"
        style={{
          border: "1px dotted white",
          position: "absolute",
          top: "30%",
          left: "30%",
        }}
        ref={canvasref}
      />
    </div>
  )
}

export default App
