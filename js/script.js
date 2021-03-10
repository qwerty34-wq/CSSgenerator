var box = document.getElementById("box")
var boxWidth = document.getElementById("boxWidth")
var boxHeight = document.getElementById("boxHeight")
var widthField = document.getElementById("widthField")
var heightField = document.getElementById("heightField")
var borderWidth = document.getElementById("borderWidth")
var borderWidthField = document.getElementById("borderWidthField")

var btnCopy = document.getElementById("btnCopy")
var codeField = document.getElementById("codeField")

var selectBorder = document.getElementById("selectBorder")

var boxBgColor = document.getElementById("boxBgColor")
var boxBgColorSpan = document.getElementById("boxBgColorSpan")

var borderColor = document.getElementById("borderColor")
var borderColorSpan = document.getElementById("borderColorSpan")

var btnGroup = document.getElementById("btnGroup")

var borderRadiusAll = document.getElementById("borderRadiusAll")
var borderRadiusAllField = document.getElementById("borderRadiusAllField")

var borderRadiusTopLeft = document.getElementById("borderRadiusTopLeft")
var borderRadiusTopLeftField = document.getElementById("borderRadiusTopLeftField")

var borderRadiusTopRight = document.getElementById("borderRadiusTopRight")
var borderRadiusTopRightField = document.getElementById("borderRadiusTopRightField")

var borderRadiusBottomLeft = document.getElementById("borderRadiusBottomLeft")
var borderRadiusBottomLeftField = document.getElementById("borderRadiusBottomLeftField")

var borderRadiusBottomRight = document.getElementById("borderRadiusBottomRight")
var borderRadiusBottomRightField = document.getElementById("borderRadiusBottomRightField")

var selectInset = document.getElementById("selectInset")

var xOffset = document.getElementById("xOffset")
var xOffsetField = document.getElementById("xOffsetField")

var yOffset = document.getElementById("yOffset")
var yOffsetField = document.getElementById("yOffsetField")

var blurInput = document.getElementById("blurInput")
var blurField = document.getElementById("blurField")

var stretching = document.getElementById("stretching")
var stretchingField = document.getElementById("stretchingField")

var shadowColor = document.getElementById("shadowColor")
var shadowColorSpan = document.getElementById("shadowColorSpan")

var scaleInput = document.getElementById("scaleInput")
var rotateInput = document.getElementById("rotateInput")

var translateX = document.getElementById("translateX")
var translateY = document.getElementById("translateY")

var skewX = document.getElementById("skewX")
var skewY = document.getElementById("skewY")

var propertyTransition = document.getElementById("property")
var duration = document.getElementById("duration")
var durationTime = document.getElementById("durationTime")
// 

var propeties = {
    "width": "400px",
    "height": "400px",
    "border": "3px solid black",
    "background-color": "grey"
}

var transform = [] 

function ClearRadius() {
    delete propeties["border-top-left-radius"]
    delete propeties["border-top-right-radius"]
    delete propeties["border-bottom-right-radius"]
    delete propeties["border-bottom-left-radius"]
}

function showAlert(params) {
    var elem = document.createElement("div")
    elem.className = "alert alert-success"
    elem.innerText = "Copied"
    elem.style.textAlign = "center"
    elem.style.margin = "0"
    elem.style.marginTop = "10px"

    btnGroup.insertBefore(elem, btnGroup.firstChild)
    setTimeout(() => {
        btnGroup.removeChild(elem)
    }, 1000)
}


function copyText() {
    codeField.select()
    document.execCommand("copy")
    document.getSelection().removeAllRanges()

    showAlert()
}

function createCSSTransform() {
    let res = ""
    for (let value of transform) {
        res += " " + value
    }
    res += ";"
    codeField.value += "transform:" + res
}

function createCSS() {
    let res = ""
    for (let key in propeties) {
        res += key + ": " + propeties[key] + ";\n" 
    }

    codeField.value = res

    if (transform.length != 0) {
        createCSSTransform()
    }
}

createCSS()

// Block Size
boxWidth.oninput = function() {
    box.style.width = this.value + "px"
    widthField.value = this.value

    propeties["width"] = this.value + "px"
    createCSS()
}

boxHeight.oninput = function() {
    box.style.height = this.value + "px"
    heightField.value = this.value

    propeties["height"] = this.value + "px"
    createCSS()
}

boxBgColor.oninput = function() {
    box.style.backgroundColor = this.value
    boxBgColorSpan.innerText = this.value
    propeties["background-color"] = this.value
    createCSS()
}


// Border Style
borderWidth.oninput = function() {
    let border = propeties["border"].split(" ")
    border[0] = this.value + "px"
    let res = border.join(" ")
    propeties["border"] = res
    box.style.border = res
    borderWidthField.value = this.value
    createCSS()
}

selectBorder.oninput = function() {
    let border = propeties["border"].split(" ")
    border[1] = this.options[this.selectedIndex].value
    let res = border.join(" ")
    propeties["border"] = res
    box.style.border = res
    createCSS()
}

borderColor.oninput = function() {
    let border = propeties["border"].split(" ")
    border[2] = this.value
    let res = border.join(" ")
    propeties["border"] = res
    box.style.border = res
    borderColorSpan.innerText = this.value
    createCSS()
}


borderRadiusAll.oninput = function() {
    box.style.borderRadius = this.value + "px"
    borderRadiusAllField.value = this.value

    if (this.value != 0) {
        propeties["border-radius"] = this.value + "px"
    }
    else{
        delete propeties["border-radius"]
    }
    
    //
    borderRadiusTopLeft.value = borderRadiusTopLeftField.value = this.value
    borderRadiusTopRight.value = borderRadiusTopRightField.value = this.value
    borderRadiusBottomLeft.value = borderRadiusBottomLeftField.value = this.value
    borderRadiusBottomRight.value = borderRadiusBottomRightField.value = this.value
    //

    ClearRadius()
    createCSS()
}


borderRadiusTopLeft.oninput = function() {
    box.style.borderTopLeftRadius = this.value + "px"
    borderRadiusTopLeftField.value = this.value

    if (this.value != 0) {
        propeties["border-top-left-radius"] = this.value + "px"
    }
    else{
        delete propeties["border-top-left-radius"]
    }

    createCSS()
}

borderRadiusTopRight.oninput = function() {
    box.style.borderTopRightRadius = this.value + "px"
    borderRadiusTopRightField.value = this.value

    if (this.value != 0) {
        propeties["border-top-right-radius"] = this.value + "px"
    }
    else{
        delete propeties["border-top-right-radius"]
    }

    createCSS()
}

borderRadiusBottomLeft.oninput = function() {
    box.style.borderBottomLeftRadius = this.value + "px"
    borderRadiusBottomLeftField.value = this.value

    if (this.value != 0) {
        propeties["border-bottom-left-radius"] = this.value + "px"
    }
    else{
        delete propeties["border-bottom-left-radius"]
    }

    createCSS()
}

borderRadiusBottomRight.oninput = function() {
    box.style.borderBottomRightRadius = this.value + "px"
    borderRadiusBottomRightField.value = this.value

    if (this.value != 0) {
        propeties["border-bottom-right-radius"] = this.value + "px"
    }
    else{
        delete propeties["border-bottom-right-radius"]
    }

    createCSS()
}

selectInset.oninput = function() {
    if (this.options[this.selectedIndex].value == "yes") {
        if ("box-shadow" in propeties) {
            let res = propeties["box-shadow"].split(" ")
            if (res[0] != "inset") {
                res.unshift("inset")
                res = res.join(" ")
                propeties["box-shadow"] = res
                box.style.boxShadow = propeties["box-shadow"]
            }
        }
        else{
            propeties["box-shadow"] = "inset 0 0 0 0 black"
            box.style.boxShadow = propeties["box-shadow"]
        }
    }
    else{
        if ("box-shadow" in propeties) {
            let res = propeties["box-shadow"].split(" ")
            if (res[0] == "inset") {
                res.shift()
                if (res[0] == "0" && res[1] == "0" && res[2] == "0" && res[3] == "0" && res[4] == "black") {
                    delete propeties["box-shadow"]
                }
                else{
                    res = res.join(" ")
                    propeties["box-shadow"] = res
                    box.style.boxShadow = propeties["box-shadow"]
                }
            }
        }
        else{
            delete propeties["box-shadow"]
        }
    }

    createCSS()
}

xOffset.oninput = function() {
    if ("box-shadow" in propeties) {
        let res = propeties["box-shadow"].split(" ")
        if (res[0] == "inset") {
            res[1] = this.value + "px"
        }
        else{
            res[0] = this.value + "px"
        }
        res = res.join(" ")
        propeties["box-shadow"] = res
        box.style.boxShadow = propeties["box-shadow"]
    }
    else{
        propeties["box-shadow"] = `${this.value}px 0 0 0 black`
        box.style.boxShadow = propeties["box-shadow"]
    }

    xOffsetField.value = this.value
    createCSS()
}

yOffset.oninput = function() {
    if ("box-shadow" in propeties) {
        let res = propeties["box-shadow"].split(" ")
        if (res[0] == "inset") {
            res[2] = this.value + "px"
        }
        else{
            res[1] = this.value + "px"
        }
        res = res.join(" ")
        propeties["box-shadow"] = res
        box.style.boxShadow = propeties["box-shadow"]
    }
    else{
        propeties["box-shadow"] = `0 ${this.value}px 0 0 black`
        box.style.boxShadow = propeties["box-shadow"]
    }

    yOffsetField.value = this.value
    createCSS()
}

blurInput.oninput = function() {
    if ("box-shadow" in propeties) {
        let res = propeties["box-shadow"].split(" ")
        if (res[0] == "inset") {
            res[3] = this.value + "px"
        }
        else{
            res[2] = this.value + "px"
        }
        res = res.join(" ")
        propeties["box-shadow"] = res
        box.style.boxShadow = propeties["box-shadow"]
    }
    else{
        propeties["box-shadow"] = `0 0 ${this.value}px 0 black`
        box.style.boxShadow = propeties["box-shadow"]
    }

    blurField.value = this.value
    createCSS()
}



stretching.oninput = function() {
    if ("box-shadow" in propeties) {
        let res = propeties["box-shadow"].split(" ")
        if (res[0] == "inset") {
            res[4] = this.value + "px"
        }
        else{
            res[3] = this.value + "px"
        }
        res = res.join(" ")
        propeties["box-shadow"] = res
        box.style.boxShadow = propeties["box-shadow"]
    }
    else{
        propeties["box-shadow"] = `0 0 0 ${this.value}px black`
        box.style.boxShadow = propeties["box-shadow"]
    }

    stretchingField.value = this.value
    createCSS()
}

shadowColor.oninput = function() {
    if ("box-shadow" in propeties) {
        let res = propeties["box-shadow"].split(" ")
        if (res[0] == "inset") {
            res[5] = this.value
        }
        else{
            res[4] = this.value
        }
        res = res.join(" ")
        propeties["box-shadow"] = res
        box.style.boxShadow = propeties["box-shadow"]
    }
    else{
        propeties["box-shadow"] = `0 0 0 0 ${this.value}`
        box.style.boxShadow = propeties["box-shadow"]
    }

    shadowColorSpan.innerText = this.value
    createCSS()
}

//
// Transform
//

function clearTransitionBlock() {
    zap = 0
    propertyTransition.options.selectedIndex = -1
}

function transformBox() {
    clearTransitionBlock()
    box.style.transitionProperty = "transform"
    box.style.transitionDuration = "2s"
    let res = ""
    for (let value of transform) {
        res += value
    }
    box.style.transform = res
}


function deleteScale() {

    let pattern = /scale.*/
    let res = transform.find(value => pattern.test(value))

    if (res != undefined) {
        let index = transform.indexOf(res)
        transform.splice(index, 1)
    }
}

scaleInput.oninput = function() {

    if (this.value == "" || this.value == "0" || +this.value == 0) {
        deleteScale()
        transformBox()
        createCSS()
        return
    }
    if (transform.length != 0) {
        let pattern = /scale.*/
        let res = transform.find(value => pattern.test(value))
        if (res != undefined) {
            let index = transform.findIndex(value => value == res)
            transform[index] = `scale(${this.value})`
            transformBox()
        }
        else{
            transform.push(`scale(${this.value})`)
            transformBox()
        }
    }
    else{
        transform.push(`scale(${this.value})`)
        transformBox()
    }

    createCSS()
}



function deleteRotate() {
    let pattern = /rotate.*/
    let res = transform.find(value => pattern.test(value))
    if (res != undefined) {
        let index = transform.findIndex(value => value == res)
        transform.splice(index, 1)
    }
}

rotateInput.oninput = function() {
    
    if (this.value == "" || this.value == "0" || +this.value == 0) {
        deleteRotate()
        createCSS()
        transformBox()
        return
    }

    if (transform.length != 0) {
        let pattern = /rotate.*/
        let res = transform.find(value => pattern.test(value))
        if (res != undefined) {
            let index = transform.findIndex(value => value == res)
            transform[index] = `rotate(${this.value}deg)`
            transformBox()
        }
        else{
            transform.push(`rotate(${this.value}deg)`)
            transformBox()
        }
    }
    else{
        transform.push(`rotate(${this.value}deg)`)
        transformBox()
    }

    createCSS()
}








function deleteTranslate() {
    let pattern = /translate.*/
    let res = transform.find(value => pattern.test(value))
    if (res != undefined) {
        let index = transform.findIndex(value => value == res)
        transform.splice(index, 1)
    }
}


function parseTranslateX(str, thisX) {
    str = str.split("(")  
    let values = str[1]
    values = values.split(", ")
    let x = values[0]
    values[1] = values[1].slice(0, -1)
    let y = values[1]
    if (thisX != "") {
        x = thisX + "px"
    }
    else{
        x = "0"
    }
    let res = `translate(${x}, ${y})`
    return res
}


translateX.oninput = function() {

    if (this.value == "" || this.value == "0" || +this.value == 0) {

        if (translateY.value == "" || translateY.value == "0") {
            deleteTranslate()
        }
        else{
            let pattern = /translate.*/
            let res = transform.find(value => pattern.test(value))
            if (res != undefined) {
                let index = transform.findIndex(value => value == res)
                let data = parseTranslateX(res, this.value)
               
                transform[index] = data
            }
            else{
                transform.push(`translate(${this.value}px, 0)`)
            }
        }

        createCSS()
        transformBox()
        return
    }

    if (transform.length != 0) {
        let pattern = /translate.*/
        let res = transform.find(value => pattern.test(value))
        if (res != undefined) {
            let index = transform.findIndex(value => value == res)
            let data = parseTranslateX(res, this.value)
            transform[index] = data
        }
        else{
            transform.push(`translate(${this.value}px, 0)`)
        }
    }
    else{
        transform.push(`translate(${this.value}px, 0)`)
    }

    createCSS()
    transformBox()
} 






function parseTranslateY(str, thisY) {
    str = str.split("(")  
    let values = str[1]
    values = values.split(", ")
    let x = values[0]
    values[1] = values[1].slice(0, -1)
    let y = values[1]
    if (thisY != "") {
        y = thisY + "px"
    }
    else{
        y = "0"
    }
    let res = `translate(${x}, ${y})`
    return res
}


translateY.oninput = function() {

    if (this.value == "" || this.value == "0" || +this.value == 0) {

        if (translateX.value == "" || translateX.value == "0") {
            deleteTranslate()
        }
        else{
            let pattern = /translate.*/
            let res = transform.find(value => pattern.test(value))
            if (res != undefined) {
                let index = transform.findIndex(value => value == res)
                let data = parseTranslateY(res, this.value)
               
                transform[index] = data
            }
            else{
                transform.push(`translate(0, ${this.value}px)`)
            }
        }

        createCSS()
        transformBox()
        return
    }

    if (transform.length != 0) {
        let pattern = /translate.*/
        let res = transform.find(value => pattern.test(value))
        if (res != undefined) {
            let index = transform.findIndex(value => value == res)
            let data = parseTranslateY(res, this.value)
            transform[index] = data
        }
        else{
            transform.push(`translate(0, ${this.value}px)`)
        }
    }
    else{
        transform.push(`translate(0, ${this.value}px)`)
    }

    createCSS()
    transformBox()
} 



//

function deleteSkew() {
    let pattern = /skew.*/
    let res = transform.find(value => pattern.test(value))
    if (res != undefined) {
        let index = transform.findIndex(value => value == res)
        transform.splice(index, 1)
    }
}

function parseSkewX(str, thisX) {
    str = str.split("(")  
    let values = str[1]
    values = values.split(", ")
    let x = values[0]
    values[1] = values[1].slice(0, -1)
    let y = values[1]
    if (thisX != "") {
        x = thisX + "deg"
    }
    else{
        x = "0"
    }
    let res = `skew(${x}, ${y})`
    return res
}


skewX.oninput = function() {

    if (this.value == "" || this.value == "0" || +this.value == 0) {

        if (skewY.value == "" || skewY.value == "0") {
            deleteSkew()
        }
        else{
            let pattern = /skew.*/
            let res = transform.find(value => pattern.test(value))
            if (res != undefined) {
                let index = transform.findIndex(value => value == res)
                let data = parseSkewX(res, this.value)
               
                transform[index] = data
            }
            else{
                transform.push(`skew(${this.value}deg, 0)`)
            }
        }

        createCSS()
        transformBox()
        return
    }

    if (transform.length != 0) {
        let pattern = /skew.*/
        let res = transform.find(value => pattern.test(value))
        if (res != undefined) {
            let index = transform.findIndex(value => value == res)
            let data = parseSkewX(res, this.value)
            transform[index] = data
        }
        else{
            transform.push(`skew(${this.value}deg, 0)`)
        }
    }
    else{
        transform.push(`skew(${this.value}deg, 0)`)
    }

    createCSS()
    transformBox()
} 








function parseSkewY(str, thisY) {
    str = str.split("(")  
    let values = str[1]
    values = values.split(", ")
    let x = values[0]
    values[1] = values[1].slice(0, -1)
    let y = values[1]
    if (thisY != "") {
        y = thisY + "deg"
    }
    else{
        y = "0"
    }
    let res = `skew(${x}, ${y})`
    return res
}


skewY.oninput = function() {

    if (this.value == "" || this.value == "0" || +this.value == 0) {

        if (skewX.value == "" || skewX.value == "0") {
            deleteSkew()
        }
        else{
            let pattern = /skew.*/
            let res = transform.find(value => pattern.test(value))
            if (res != undefined) {
                let index = transform.findIndex(value => value == res)
                let data = parseSkewY(res, this.value)
               
                transform[index] = data
            }
            else{
                transform.push(`skew(0, ${this.value}deg)`)
            }
        }

        createCSS()
        transformBox()
        return
    }

    if (transform.length != 0) {
        let pattern = /skew.*/
        let res = transform.find(value => pattern.test(value))
        if (res != undefined) {
            let index = transform.findIndex(value => value == res)
            let data = parseSkewY(res, this.value)
            transform[index] = data
        }
        else{
            transform.push(`skew(0, ${this.value}deg)`)
        }
    }
    else{
        transform.push(`skew(0, ${this.value}deg)`)
    }

    createCSS()
    transformBox()
} 




var zap = 0


propertyTransition.oninput = function() {
    
    let res = this.options[this.selectedIndex].value

    if (res != "none") {
        propeties["transition-property"] = res
        box.style.transitionProperty = res

        if (duration.value != "" && +duration.value != 0) {
            res = durationTime.options[durationTime.selectedIndex].value
            duration.value = Math.abs(+duration.value)
            propeties["transition-duration"] = duration.value + res
            box.style.transitionDuration = propeties["transition-duration"]
            zap = 1
        }
    }
    else{
        delete propeties["transition-property"]
        delete propeties["transition-duration"]
        box.style.transitionProperty = ""
        box.style.transitionDuration = ""
        duration.value = ""
        zap = 0
    }

    createCSS()
}


function durationMethod() {
    if (duration.value != "" && +duration.value != 0) {

        let i = propertyTransition.options.selectedIndex
        if (i == -1) {
            return
        }
        
        let transProp = propertyTransition.options[propertyTransition.selectedIndex].value
        if (transProp == "" || transProp == "none") {
            return
        }

        res = durationTime.options[durationTime.selectedIndex].value
        duration.value = Math.abs(+duration.value)
        propeties["transition-duration"] = duration.value + res
        box.style.transitionDuration = propeties["transition-duration"]

        zap = 1
    }
    else{
        delete propeties["transition-duration"]
        zap = 0
    }


    let i = propertyTransition.options.selectedIndex
    if (i != -1) {
        createCSS()
    }

}

duration.oninput = function() {
   durationMethod()
}

durationTime.oninput = function() {
    durationMethod()
}

box.onmouseover = () =>{
    if (zap == 0) {
        return
    }

    let prop = propertyTransition.options[propertyTransition.selectedIndex].value
    if (prop == "") {
        return
    }

    if (prop == "background-color") {
        box.style.backgroundColor = "#c2c2c2"
    }
    else if(prop == "width"){
        box.style.width = parseInt(propeties["width"]) + 40 + "px"
    }
    else{
        box.style.height = parseInt(propeties["height"]) + 40 + "px"
    }
}

box.onmouseleave = () =>{
    if (zap == 0) {
        return
    }

    let prop = propertyTransition.options[propertyTransition.selectedIndex].value
    if (prop == "") {
        return
    }

    if (prop == "background-color") {
        box.style.backgroundColor = propeties["background-color"]
    }
    else if(prop == "width"){
        box.style.width = propeties["width"]
    }
    else{
        box.style.height = propeties["height"]
    }
}

// BtnCopy

btnCopy.onclick = () => {
    copyText()
}