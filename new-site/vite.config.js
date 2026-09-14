import {defineConfig} from 'vite';
import {readFileSync} from 'node:fs';
export default defineConfig({esbuild:{jsx:'automatic'},plugins:[{name:'paper-lifecycle',enforce:'pre',load(id){
if(id.endsWith('/3d-paper-certificate.html?raw'))return 'export default '+JSON.stringify('<script>'+readFileSync('paper-runtime.js','utf8')+'</script>'+readFileSync(id.slice(0,-4),'utf8'));
}}]});