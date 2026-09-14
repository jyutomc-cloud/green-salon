import {mkdir,writeFile,readFile} from 'node:fs/promises';
import {dirname} from 'node:path';
import {createHash} from 'node:crypto';
const hashes={
"src/shaders/3d-paper/sources/3d-paper.html":"8ec1b71c0dbcafbadf908100ae2a08045d0a1087c00a09d28245ef19366c7353",
"src/shaders/3d-paper/sources/3d-paper-site-of-the-year.html":"fdef93fa96a3927430ef35411af70568c56b9488921aead8f36be36800689b7d",
"src/shaders/3d-paper/sources/3d-paper-japanese.html":"4e929b9c3feaa635c6bc45e5c556243395318d4d7feb4d6a85190768b3b9f738",
"src/shaders/3d-paper/sources/3d-paper-certificate.html":"0cb83da723e1a54f1a2e1124bc26a27d608afc3ba42ec0b116807e2e2ae5fb32",
"src/shaders/3d-paper/ThreeDPaper.tsx":"c2c8d1e9a0baf69c9e477e270ccde0254d6270918c106b62dffb5c7931223b20",
"src/shaders/threeui.css":"efe4447139f1358dd8e9be68edf6fa46cbefbd1de423a4d6c439ca61d2c8eccf"};
const r=await fetch('https://threeui.com/source-code/3d-paper.json',{signal:AbortSignal.timeout(30000)});
if(!r.ok)throw Error('Original ThreeUI source unavailable');
const bundle=await r.json();
for(const [path,hash] of Object.entries(hashes)){
const f=bundle.files.find(f=>f.path===path);
if(!f||createHash('sha256').update(f.code).digest('hex')!==hash)throw Error('ThreeUI source verification failed: '+path);
await mkdir(dirname(path),{recursive:true});await writeFile(path,f.code);
}
await mkdir('public/assets',{recursive:true});
try {await readFile('public/assets/botanical.webp')} catch {
const img=await fetch('https://raw.githubusercontent.com/jyutomc-cloud/green-salon/green-s-launch/new-site/public/assets/botanical.webp');
if(!img.ok)throw Error('Hero asset unavailable');
await writeFile('public/assets/botanical.webp',Buffer.from(await img.arrayBuffer()));
}
console.log('Verified all six original ThreeUI source files; botanical asset ready.');
