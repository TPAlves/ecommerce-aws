import {
  APIGatewayProxyEvent,
  APIGatewayProxyResultV2,
  Context,
} from "aws-lambda";

export async function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResultV2> {
  const lambdaRequestId = context.awsRequestId;
  const apiRequestId = event.requestContext.requestId;

  console.log(
    `API Gateway RequestID: ${apiRequestId}\nLambda RequestID: ${lambdaRequestId}`
  );
  const method = event.httpMethod;
  if (event.resource === "/products" && method === "GET") {
    console.log("GET");
    return {
      statusCode: 200,
      body: JSON.stringify({
        lambdaRequestId,
        apiRequestId,
        message: "GET request received",
      }),
    };
  }

  return {
    statusCode: 400,
    body: JSON.stringify({
      lambdaRequestId,
      apiRequestId,
      message: "Bad request",
    }),
  };
}
