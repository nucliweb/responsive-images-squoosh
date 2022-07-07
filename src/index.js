import fs from 'fs'
import { exec } from 'child_process'

import {
  ENCODE_OPTIONS,
  FORMATS,
  IMAGES,
  ORIGINALS,
  PATTERN,
} from './config.js'

const imagePattern = new RegExp(PATTERN, 'i')
const ORIGINAL_IMAGES = fs.readdirSync(ORIGINALS)

// Remove images folder to delete previous optimized images
if (fs.existsSync(IMAGES)) {
  fs.rmSync(IMAGES, { recursive: true })
}

const encodeImage = ({image}, cb) => {
  const isImageFile = imagePattern.test(image)
  
  if (isImageFile) {
    getFormatImages({image}, cb)
    cb()
  }
}

const encodeFormatImage = ({ image, formats }, cb) => {
  const { width, format, suffix } = formats
  const originalImage = `${ORIGINALS}${image}`
  const command = `squoosh-cli --resize '{"width":${width}}' --${format} '${ENCODE_OPTIONS[format]}' --output-dir '${IMAGES}' --suffix '${suffix}' ${originalImage}`

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.message}`)
      return
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`)
      cb()
      return
    }
    console.log(`stdout: ${stdout}`)
    cb()
  })
}

const getFormatImages = ({image},  cb) => {
  FORMATS.reduce((promiseChain, formats) => {
    return promiseChain.then(() => new Promise((resolve) => {
      encodeFormatImage({image, formats}, resolve)
      cb()
    }))
  }, Promise.resolve())
} 

const getResponsiveImages = ORIGINAL_IMAGES.reduce((promiseChain, image) => {
  return promiseChain.then(() => new Promise((resolve) => {
    encodeImage({image: image}, resolve)
  }))
}, Promise.resolve())

getResponsiveImages
  .then(() => console.log('...'))
  .catch(err => { console.log(`❌ ERROR: ${err}`) });