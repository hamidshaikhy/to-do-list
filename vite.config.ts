import { defineConfig } from 'vite';
export default defineConfig({build:{target:['es2020','safari14'],outDir:'dist'},server:{host:'0.0.0.0'}});
