import React from 'react'
import './Card.scss';

const Card = () => {
    const items = [
        { title: "Sitting Room", image: "https://s3-alpha-sig.figma.com/img/ed09/1380/d20459a597de1af649814da8ea30ed27?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D6iRknvT0GEE3frMfXRAzrXmqfl5Q2FexulgdJ4BHT4aOmzanr-K-HnzxvXX4cHN3GSy~c4LlmfBSUm8Qfue1hS9qg7JRUeOan8C3AeZTY8lpSes2tenifGaiR-33-QRAJpYzfgtnozStRygeOTg35mmhWrquJmk2QZdzBNJdKlG6cwEcZX6HzK7vsu32owiMfUAXCpsEUMBHIXBPDCiFWU2FlWNYNCv2rDeO6K3GIvcuZ1-wEpjHjNQiTkIxybBKzjdWRLnEWJO79C6nUiTJKuITfl9qY-GlGcVfCl9iwfuLeO3Ym7GAeGbB2WfDktMnyu0SRCL13xGJ6AviSAGiA__" },
        { title: "Kitchen", image: "https://s3-alpha-sig.figma.com/img/c549/9c6e/e953325d257f2d30b016a2ba317cba50?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gUOUfXlWA8pf4kjDUY2k7R9XvlNhlQFobVMTQ9hdHU6hb-JDUTNAFuGF3dROL5ROtazkKYtwCfJ0q6jOEHAFSR7G7FANSupyuFNrhVynvpl69bzTiV5jco7uvi68XUFbmUMY8LPQrgLxga81Wven1TuX~beM62z4foh690TXEXZKTFcDOaR4Jnry9Bd9F9xfK-rFX~Y8hyEctob36AAGaS2GL3JvOqDDDogKXZltgxf81A45hXBKBg8Kl0Ic9hUUEzB2iukj~tTeDYbuFqoCTjFVW8P4eLFo1sGisnoN-q2-8Nb9hp45yLgZz88XJ-ZPdIn5WbkVFuv60ztYmJjf3w__" },
        { title: "Accessories", image: "https://s3-alpha-sig.figma.com/img/e967/ef7d/0d4e10d7b91d322f0505e9604ca08842?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jZDKpnYHQBbU6ljechCAvddE3IrI5RSu6zA5WodB5rr9gNPnQznqnYzAjn2odq8XQgFWGdmd~Pc6h~cbjFeL~Fo0INAEmeoZZiWZe4uLVto1RKUEVuHHw2HSSE~kD--rCPMOx8nBOpTBKAiIf9ngs4YKMwilQPZcJJ~owhEyRHQq5ppASt4UDKlBW1LYSwcqLUf4OCDESuHLF0EiNEwImpo~ZH2aC5dIt6yzoCZqWIWsOemOJC5h2pSW27dUENEu7-WBXFjtom7xPmVGgjjDF2k~R1vnFk1juZdJfs0L1YfS-GKK1Yax2MSbHSGbXuxJAJBIJREJOZAjvI6PfVlUiQ__" },
        { title: "Bedroom", image: "https://s3-alpha-sig.figma.com/img/71b4/7c6d/057b9d8e7ddb437d6566e16614c11959?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=B6-MASAUXx9331vmtv2XE4oBToDz~HWO8YD2J0v18SxwpfRYPQEId1rJwbFYtIEoFGAjwpXcEuySaM8Umg7vzPd4Z3xdlLFJSjxOvXWMaqNUYJlhnp-OWFmUOj2KEFo7iY8aL4eYRmPmw4wnGx5CGW3X-wF-MPPGoktaJdpVFRDO8cY9mYwrFK841pPmSUMNI7qlejBUzFH9cZnPrlaPMusmJReoJ-GIQHiaW3WwXtXMQQA7AW0mvNV3g5gzcDLN8FowUJnWfKZSIC26W18M20-Tsg8Gg85ENbNwKnU4wISNDoipMBcAEbDmygLUDeyL5nQj3YK5ANlTm3~F6qJVJg__" },
      ];
  return (
    <div>
      <div className="grid-container">
      {items.map((item, index) => (
        <div className="grid-item" key={index}>
          <div className="image-container">
            <img src={item.image} alt={item.title} />
          </div>
          <h2>{item.title}</h2>
          <button>Shop Now →</button>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Card
