function extractFile(str){
    // console.log('\\') pechata \  zastoto first \ is escape sign
    let index = str.lastIndexOf('.')
    let extension = str.substring(index + 1)
    let name = str.slice(str.lastIndexOf('\\' ) + 1, index)

    console.log(`File name: ${name}`)
    console.log(`File extension: ${extension}`)
}

extractFile("C:\\Internal\\training-internal\\Template.pptx")
//File name: Template
//File extension: pptx