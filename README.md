# Ecommerce-AWS

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `npx cdk deploy` deploy this stack to your default AWS account/region
- `npx cdk diff` compare deployed stack with current state
- `npx cdk synth` emits the synthesized CloudFormation template

## Lambda

- É invocado quando o evento é recebido. Exemplo: quando um arquivo é enviado para o S3.
- Trabalha com concorrência. Ou seja, se um evento é recebido, ele pode ser processado em paralelo com outros eventos.
