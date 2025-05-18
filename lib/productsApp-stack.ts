import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as lambdaNodejs from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";

export class ProductsAppStack extends cdk.Stack {
  readonly productsFetchHandler: lambdaNodejs.NodejsFunction;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.productsFetchHandler = new lambdaNodejs.NodejsFunction(
      this,
      "ProductsFetchHandler",
      {
        // Ambiente de execução da função Lambda
        runtime: lambda.Runtime.NODEJS_22_X,
        // Nome da função Lambda na AWS
        functionName: "ProductsFetchHandler",
        // Arquivo de ezecução da função Lambda
        entry: "lambda/products/productsFetchFunction.ts",
        // Nome da função a ser executada
        handler: "handler",
        // Quantidade de memória alocada para a função Lambda
        memorySize: 512, // Em MB
        // Tempo máximo de execução da função Lambda
        timeout: cdk.Duration.seconds(5),
        // Forma de empacotamento do código
        bundling: {
          // O código será o mais enxuto possível
          minify: true,
          // Desabilitando a geração de source maps que atuam como um mapa de debug
          sourceMap: false,
        },
      }
    );
  }
}
