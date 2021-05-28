const HtmlWebPackPlugin = require('html-webpack-plugin'); //require es una manera que tiene node para cargar estos archivos o
const MiniCssExtract = require('mini-css-extract-plugin');  //uotros archivos de otro paquetes
const CopyPlugin = require("copy-webpack-plugin");
                                                        
const MiniCssExtractPlugin = require('mini-css-extract-plugin');                                                       
module.exports = {
    mode: 'development', 
    output :{
        clean: true

    },
    module: {//el modulo indica que ya comenzara la configuracion del webpack y definir reglas
        rules: [//las reglas sirven para decirle al webpck que hacer con ciertos tipos de archivo o que haga en ciertaas ocaciones 
        {
            // la primera regla se definira como un objeto literal el cual tiene que tener un test
            // que es la condiicion que webpack tiene que hacer cuando este evaluando archivo por archivo 
            // y esta condicion se va aplicar si el archivo cumple lo siguiente expresion regular.
            test: /\.html$/i,
            loader: 'html-loader',//paquete de html-loader que anteriormete instalamos
            options: {
            // Disables attributes processing
            sources: false,//esta instruccion hace que en el caso movemos un archivo o necesitamos algo en html lo mueve adonde lo requiere
            minimize: false//genera el codigo en una sola linea
            },
        },

        {
        //Nueva regla para archivos de css
            test: /\.css$/i,
            exclude: /styles.css$/,//este exclude nos ayuda a excluir esta regla
            use : [ 'style-loader' ,'css-loader']//depedencias instaladas
        },
        {//Nueva regla evaluacion de un archivo en especifico
            test: /styles.css$/, //busca (el archivo style.css)
            use : [MiniCssExtractPlugin.loader,'css-loader']//evaluacion del estilo
        },
        {
            test: /\.(png|jpe?g|gif)$/,
            loader:'file-loader'

        },
        {
            test: /\.(pmg|jpe?g|gif)$/,
            loader: 'file-loader'
        }
      
      ],
    },
    plugins:[//los plugins es un arreglo aqui configuraremos una nueva instancia del htmlwebpackplugin
        new HtmlWebPackPlugin({
            title: 'Mi Webpack App',
            //filename:'index.html',
            template:'./src/index.html',
           
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({//funciona cuando queremos copiar o mover recursos 
                patterns: [
                    { from: 'src/assets/', to: 'assets/' }
                ]
            }
        )
        
    ]
}
