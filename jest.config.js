module.exports={
    testEnvironment:'node',//Indica que Jest debe ejecutar pruebas en entorno simulado de  node
    testMatch:['**/_test_/**/*.js','**/?(*.)+(spec|test).js'],//defien patrones de archivos quqe jest buscara para ejecutar (_test_,.spec.js,.test.js)
    collectCoverage:true,//Al ejecutar las pruebas se debe monitorear el codigo de la app,determinando que lineas funcionan  y han sido ejecutadas por alguna prueba
    coverageDirectory:'coverage',//Indica dodne guardar los resultados de la cobertura que se acaban de calcular

    transformIgnorePatterns: [
        'node_modules/(?!uuid)'
    ]
}
