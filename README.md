# hackathon--greenit

## How to launch this project ?

Install and Minify all ***src*** files :

```shell
npm i minify -g
minify src/index.css > dist/index.min.css
minify src/index.html > dist/index.min.html
minify src/products.html > dist/products.min.html
```

Install and compress with ***brotli*** all ***dist*** files :

```shell
npm install
npm run compress
```

Install and run ***http-server*** :

```shell
npm install -g local-web-server
ws --http2 
```