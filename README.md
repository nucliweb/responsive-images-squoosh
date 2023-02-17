# responsive-images-squoosh

Generate responsive images and next-gen image formats with [`squoosh-cli`](https://github.com/GoogleChromeLabs/squoosh/tree/dev/cli)

## Install

> You need [Node.js](https://nodejs.org/) in your system to use this project.

Run the next command to install dependencies, you can use `npm` (used in the example) or `yarn`.

```bash
npm install
```

## Usage

The `npm run compress` command gets all images in the `originals` folder and generate optimized and responsive images into the folder `images` following the FORMATS defined in the [config file](src/config.js).

## Photos and credits

<picture>
  <source type="image/avif" srcset="assets/Photos.avif">
  <source type="image/webp" srcset="assets/Photos.webp">
  <img src="assets/Photos.jpg" alt="Photos">
</picture>

<details>
  <summary>Photos by</summary>
  <ul>
    <li><a href="https://unsplash.com/@shotbymax?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Max</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li><a href="https://unsplash.com/@anna7de?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anna Delliou</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li><a href="https://unsplash.com/@eugene_1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eugen Sacalî</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li><a href="https://unsplash.com/@irfanncc_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Megat Irfan</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li><a href="https://unsplash.com/@alemagnone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexis Magnone</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li><a href="https://unsplash.com/@hanielespinalmedia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Haniel Espinal</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li><a href="https://unsplash.com/@ibuzn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ibrahim Uzun</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li><a href="https://unsplash.com/@marius_otohpgraphy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mario Esposito</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li><a href="https://unsplash.com/@borkography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Adam Borkowski</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li><a href="https://unsplash.com/@hanielespinalmedia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Haniel Espinal</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li><a href="https://unsplash.com/@borkography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Adam Borkowski</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li><a href="https://unsplash.com/@borkography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Adam Borkowski</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li><a href="https://unsplash.com/@pulse_thekidd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tyler Sakil</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li><a href="https://unsplash.com/@real_jansen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">real_ jansen</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li><a href="https://unsplash.com/@real_jansen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">real_ jansen</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li><a href="https://unsplash.com/es/@takeshi2?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">wu yi</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li><a href="https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Spiske</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li><a href="https://unsplash.com/@0x0red?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">othmane ferrah</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li><a href="https://unsplash.com/@0x0red?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">othmane ferrah</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    <li><a href="https://unsplash.com/@ricovandevoorde?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rico Van de Voorde</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
  </ul>
</details>
