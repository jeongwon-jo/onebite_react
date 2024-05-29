import { useState } from 'react'

// 부모로부터 받는 props가 변경되면 리렌더링됨
const Bulb = () => {
  const [light, setLight] = useState("OFF")
  return <div>
    {light === "ON" ?
      <h1 style={{
        backgroundColor: "orange"
      }}>ON</h1> :
      <h1 style={{
      backgroundColor: "gray"
      }}>OFF</h1>
    }
    <button onClick={() => {
          setLight(light === 'ON' ? "OFF" : "ON")
        }}>전구 { light === 'ON' ? "끄기" : "켜기" }</button>
  </div>
}

export default Bulb;