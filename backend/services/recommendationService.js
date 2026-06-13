

const {
  SageMakerRuntimeClient,
  InvokeEndpointCommand,
} = require("@aws-sdk/client-sagemaker-runtime");

const client = new SageMakerRuntimeClient({
  region: "us-east-1",
});

async function getRecommendations(productName) {
  const command = new InvokeEndpointCommand({
    EndpointName: "sagemaker-scikit-learn-2026-06-11-04-21-05-626",
    ContentType: "application/json",
    Body: JSON.stringify({
      product_name: productName,
    }),
  });

  const response = await client.send(command);

  return JSON.parse(Buffer.from(response.Body).toString());
}

module.exports = { getRecommendations };
